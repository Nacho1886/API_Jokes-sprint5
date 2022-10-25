const APIs = {

    userDates: {
        url: 'https://ipapi.co/json/'
    },

    userWeather: {
        url: 'https://api.openweathermap.org/data/2.5/weather',
        key: 'd0047952dfbeb9ec30622425fe11ed84',
        referenceDates: {
            latitude: '?lat=',
            longitude: '&lon=',
            appId: '&appid=',
            units: '&units=metric'
        }
    },
    jokes1: {
        url: 'https://icanhazdadjoke.com/',
        options: { headers: { Accept: 'application/json' } }
    },

    jokes2: {
        url: 'https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes',
        options: {
            headers: {
                'X-RapidAPI-Key': '5d310a0d3cmshb1317272eac1986p1eedebjsn8b8fcb68e333',
                'X-RapidAPI-Host': 'jokes-by-api-ninjas.p.rapidapi.com'
            }
        }
    },

    jokes3: {
        url: 'https://jokeapi-v2.p.rapidapi.com/joke/any',
        options: {
            headers: {
                'X-RapidAPI-Key': '5d310a0d3cmshb1317272eac1986p1eedebjsn8b8fcb68e333',
                'X-RapidAPI-Host': 'jokeapi-v2.p.rapidapi.com'
            }
        }
    }
}




const weatherIcons = [
    {
        weatherTitle: 'sun',
        item:
            `<div class="sizeTime hot">
                <span id="text"></span>
                <span class="sun"></span>
                <span class="sunx"></span>
            </div>`,
        listIcon: ['01d']
    },
    {
        weatherTitle: 'cloudy',
        item:
            `<div class="sizeTime cloudy">
                <span id="text"></span>
                <span class="cloud"></span>
                <span class="cloudx"></span>
            </div>`,
        listIcon: ['02d', '02n', '03d', '03n', '04d', '04n']
    },
    {
        weatherTitle: 'stormy',
        item:
            `<div class="stormy sizeTime">
            <span id="text"></span>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <span class="snowe"></span>
            <span class="snowex"></span>
            <span class="stick"></span>
            <span class="stick2"></span>
        </div>`,
        listIcon: ['09d', '09n', '10d', '10n', '11d', '11n']
    },
    {
        weatherTitle: 'breezy',
        item:
            `<div class="breezy sizeTime">
                <span id="text"></span>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <span class="cloudr"></span>
            </div>`,
        listIcon: ['13d', '13n', '50d', '50n']
    },
    {
        weatherTitle: 'night',
        item:
            `<div class="night sizeTime">
                <span id="text"></span>
                <span class="moon"></span>
                <span class="spot1"></span>
                <span class="spot2"></span>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>`,
        listIcon: ['01n']
    },
];


const newJoke: HTMLElement | null = document.getElementById('newJoke');
const firstPartJoke: HTMLElement | null = document.getElementById('firstPartJoke');
const buttonResponse: HTMLElement | null = document.getElementById('buttonResponse');
const result: HTMLElement | null = document.getElementById('result');
const reviews = document.querySelectorAll('.review');

let finalJoke: object[]


const reportJokes: object[] = [];

/* interface Joke {
joke: string
score: number
author: object
}
implements Joke */
class Joke {
    joke: object[];
    score: number;
    date: string;
    constructor(joke: object[], score: number) {
        this.joke = joke;
        this.score = score;
        this.date = new Date().toISOString();
    }
}

const validateJokeType = joke => {
    if (joke.type === "twopart") {
        return [joke.setup, joke.delivery]
    }
    return [joke.joke]
}


const printJoke = joke => {
    finalJoke = joke
    newJoke.setAttribute('disabled', '');
    
reviews.forEach(review => review.classList.remove('invisible'));
    if (finalJoke.length === 2) return printComplexJoke(finalJoke)
    return printFinishJoke(finalJoke)
}


const printFinishJoke = joke => {
    result.classList.remove('invisible')
    result.innerHTML = joke
}

const printComplexJoke = joke => {
    firstPartJoke.innerHTML = joke[0]
    result.classList.add('invisible')
    buttonResponse.classList.remove('invisible')
}


const constructionAnswer = jsonReturn => printJoke(validateJokeType(jsonReturn))



const weatherCreation = (async () => {
    const { userDates, userWeather } = APIs
    const { url, key, referenceDates } = userWeather
    const { latitude, longitude } = await (await fetch(userDates.url)).json();
    const weatherUrlComplet: string = url + referenceDates.latitude + latitude + referenceDates.longitude + longitude + referenceDates.appId + key + referenceDates.units
    const weatherUser = await (await fetch(weatherUrlComplet)).json();

    const currentlyIcon = weatherIcons.find(icons => icons.listIcon.find
        (icon => icon === weatherUser.weather[0].icon))

    result.innerHTML = currentlyIcon.item
    document.getElementById('text').innerHTML = `${Math.round(weatherUser.main.temp)}°C`
})();


const jokeSelecter = async () => {
    const randomNumber = Math.round(Math.random());
    const firstJoke = await (await fetch(APIs.jokes1.url, APIs.jokes1.options)).json()
    const secondJoke = await (await fetch(APIs.jokes3.url, APIs.jokes3.options)).json()
    const randomJoke = randomNumber === 0 ? firstJoke : secondJoke
    return randomJoke
}


newJoke.addEventListener('click', async () => {
    const joke = await jokeSelecter()
    console.log("🚀 ~ file: script.ts ~ line 225 ~ randomJoke", joke)
    constructionAnswer(joke);
})

buttonResponse.addEventListener('click', () => {
    buttonResponse.classList.add('invisible')
    printFinishJoke(finalJoke[1])
})

reviews.forEach(buttonReview => {
    buttonReview.addEventListener('click', () => {
        const dataValue = buttonReview.getAttribute('data-funcion');

        reportJokes.push(new Joke(finalJoke, Number(dataValue)));
        reviews.forEach(review => review.setAttribute('disabled', ''));
        newJoke.removeAttribute('disabled');

        console.log(reportJokes);
    })
})
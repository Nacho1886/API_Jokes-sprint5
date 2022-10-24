let temperature: number

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
        item: `
    <div class="sizeTime stormy">
    <span id="text"></span>
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
            `<div class="sizeTime breezy">
            <span id="text"></span>
        <span class="cloudr"></span>
    </div>`,
        listIcon: ['13d', '13n', '50d', '50n']
    },
    {
        weatherTitle: 'night',
        item:
            `<div class="sizeTime night">
            <span id="text"></span>
        <span class="moon"></span>
        <span class="spot1"></span>
        <span class="spot2"></span>
    </div>`,
        listIcon: ['01n']
    },
];

const apiJokes1: string = 'https://icanhazdadjoke.com/';
const result: HTMLElement | null = document.getElementById('result');
const newJoke: HTMLElement | null = document.getElementById('newJoke');

const arrayJokes: object[] = [];

/* interface Joke {
  joke: string
  score: number
  author: object
}
implements Joke */
class Joke {
    joke: string;
    score: number;
    date: string;
    constructor(joke: string, score: number) {
        this.joke = joke;
        this.score = score;
        this.date = new Date().toISOString();
    }
}

const constructionAnswer = json => {
    result.innerHTML = `<div>${json.joke}</div> 
                <div id="divButtons">
                    <button type="button" data-funcion="1" class="btn btn-outline-info review">Bad</button>
                    <button type="button" data-funcion="2" class="btn btn-outline-dark review">Neutral</button>
                    <button type="button" data-funcion="3" class="btn btn-outline-danger review">Good</button>
                </div>`;
    newJoke.setAttribute('disabled', '');
};

const sendingReviewJoke = jsonJoke => {
    const reviews = document.querySelectorAll('.review');

    reviews.forEach(buttonReview => {
        buttonReview.addEventListener('click', () => {
            const dataValue = buttonReview.getAttribute('data-funcion');

            arrayJokes.push(new Joke(jsonJoke.joke, Number(dataValue)));
            reviews.forEach(review => review.setAttribute('disabled', ''));
            newJoke.removeAttribute('disabled');

            console.log(arrayJokes);
        });
    });
};


const weatherCreation = (async () => {
    const { latitude, longitude } = await (await fetch('https://ipapi.co/json/')).json();

    const apiWeatherKey: string = 'd0047952dfbeb9ec30622425fe11ed84';
    const apiWeather: string = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiWeatherKey}&units=metric`;
    const weatherUser = await (await fetch(apiWeather)).json();

    temperature = weatherUser.main.temp
    const currentlyIcon = weatherIcons.find(icons => icons.listIcon.find
        (icon => icon === weatherUser.weather[0].icon))
    
    result.innerHTML = currentlyIcon.item
    document.getElementById('text').innerHTML = `${Math.round(weatherUser.main.temp)}°C`
})();


newJoke?.addEventListener('click', () => {
    fetch(apiJokes1, { headers: { Accept: 'application/json' } })
        .then(response => response.json())
        .then(json => {
            constructionAnswer(json);
            sendingReviewJoke(json);
        });
});

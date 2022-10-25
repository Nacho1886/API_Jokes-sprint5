"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
};
const weatherIcons = [
    {
        id: '01_sun',
        weatherTitle: 'sun',
        listIcon: ['01d']
    },
    {
        id: '02_cloudy',
        weatherTitle: 'cloudy',
        listIcon: ['02d', '02n', '03d', '03n', '04d', '04n']
    },
    {
        id: '03_stormy',
        weatherTitle: 'stormy',
        listIcon: ['09d', '09n', '10d', '10n', '11d', '11n']
    },
    {
        id: '04_breezy',
        weatherTitle: 'breezy',
        listIcon: ['13d', '13n', '50d', '50n']
    },
    {
        id: '05_night',
        weatherTitle: 'night',
        listIcon: ['01n']
    },
];
const newJoke = document.getElementById('newJoke');
const firstPartJoke = document.getElementById('firstPartJoke');
const buttonResponse = document.getElementById('buttonResponse');
const result = document.getElementById('result');
const reviews = document.querySelectorAll('.review');
let finalJoke;
const reportJokes = [];
class Joke {
    constructor(joke, score) {
        this.joke = joke;
        this.score = score;
        this.date = new Date().toISOString();
    }
}
const validateJokeType = joke => {
    if (joke.type === "twopart") {
        return [joke.setup, joke.delivery];
    }
    return [joke.joke];
};
const printJoke = joke => {
    finalJoke = joke;
    newJoke.setAttribute('disabled', '');
    reviews.forEach(review => review.classList.remove('invisible'));
    if (finalJoke.length === 2)
        return printComplexJoke(finalJoke);
    return printFinishJoke(finalJoke);
};
const printFinishJoke = joke => {
    reviews.forEach(review => review.removeAttribute('disabled'));
    result.classList.remove('invisible');
    result.innerHTML = joke;
};
const printComplexJoke = joke => {
    firstPartJoke.classList.remove('invisible');
    buttonResponse.removeAttribute('disabled');
    firstPartJoke.innerHTML = joke[0];
    result.classList.add('invisible');
    buttonResponse.classList.remove('invisible');
};
const constructionAnswer = jsonReturn => printJoke(validateJokeType(jsonReturn));
const weatherCreation = (() => __awaiter(void 0, void 0, void 0, function* () {
    const { userDates, userWeather } = APIs;
    const { url, key, referenceDates } = userWeather;
    const { latitude, longitude } = yield (yield fetch(userDates.url)).json();
    const weatherUrlComplet = url + referenceDates.latitude + latitude + referenceDates.longitude + longitude + referenceDates.appId + key + referenceDates.units;
    const weatherUser = yield (yield fetch(weatherUrlComplet)).json();
    const currentlyIcon = weatherIcons.find(icons => icons.listIcon.find(icon => icon === weatherUser.weather[0].icon));
    const activeIconWeather = document.getElementById(currentlyIcon.id);
    activeIconWeather.classList.remove('invisible');
    document.querySelector(`#text_${currentlyIcon.id}`).innerHTML = `${Math.round(weatherUser.main.temp)}°C`;
}))();
const jokeSelecter = () => __awaiter(void 0, void 0, void 0, function* () {
    const randomNumber = Math.round(Math.random());
    const firstJoke = yield (yield fetch(APIs.jokes1.url, APIs.jokes1.options)).json();
    const secondJoke = yield (yield fetch(APIs.jokes3.url, APIs.jokes3.options)).json();
    const randomJoke = randomNumber === 0 ? firstJoke : secondJoke;
    return randomJoke;
});
newJoke.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
    firstPartJoke.classList.add('invisible');
    buttonResponse.classList.add('invisible');
    const joke = yield jokeSelecter();
    constructionAnswer(joke);
}));
buttonResponse.addEventListener('click', () => {
    buttonResponse.setAttribute('disabled', '');
    printFinishJoke(finalJoke[1]);
});
reviews.forEach(buttonReview => {
    buttonReview.addEventListener('click', () => {
        const dataValue = buttonReview.getAttribute('data-funcion');
        reportJokes.push(new Joke(finalJoke, Number(dataValue)));
        reviews.forEach(review => review.setAttribute('disabled', ''));
        newJoke.removeAttribute('disabled');
        console.log(reportJokes);
    });
});

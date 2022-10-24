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
        header: { headers: { Accept: 'application/json' } }
    },
    jokes2: {
        url: 'https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes',
        header: {
            headers: {
                'X-RapidAPI-Key': '5d310a0d3cmshb1317272eac1986p1eedebjsn8b8fcb68e333',
                'X-RapidAPI-Host': 'jokes-by-api-ninjas.p.rapidapi.com'
            }
        }
    }
};
const weatherIcons = [
    {
        weatherTitle: 'sun',
        item: `<div class="sizeTime hot">
            <span id="text"></span>
        <span class="sun"></span>
        <span class="sunx"></span>
    </div>`,
        listIcon: ['01d']
    },
    {
        weatherTitle: 'cloudy',
        item: `<div class="sizeTime cloudy">
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
        item: `<div class="sizeTime breezy">
            <span id="text"></span>
        <span class="cloudr"></span>
    </div>`,
        listIcon: ['13d', '13n', '50d', '50n']
    },
    {
        weatherTitle: 'night',
        item: `<div class="sizeTime night">
            <span id="text"></span>
        <span class="moon"></span>
        <span class="spot1"></span>
        <span class="spot2"></span>
    </div>`,
        listIcon: ['01n']
    },
];
const result = document.getElementById('result');
const newJoke = document.getElementById('newJoke');
const reportJokes = [];
/* interface Joke {
  joke: string
  score: number
  author: object
}
implements Joke */
class Joke {
    constructor(joke, score) {
        this.joke = joke;
        this.score = score;
        this.date = new Date().toISOString();
    }
}
const constructionAnswer = jsonReturn => {
    result.innerHTML = `<div>${jsonReturn.joke}</div> 
                <div id="divButtons">
                    <button type="button" data-funcion="1" class="btn btn-outline-info review">Bad</button>
                    <button type="button" data-funcion="2" class="btn btn-outline-dark review">Neutral</button>
                    <button type="button" data-funcion="3" class="btn btn-outline-danger review">Good</button>
                </div>`;
    newJoke.setAttribute('disabled', '');
};
const sendingReviewJoke = jsonSend => {
    const reviews = document.querySelectorAll('.review');
    reviews.forEach(buttonReview => {
        buttonReview.addEventListener('click', () => {
            const dataValue = buttonReview.getAttribute('data-funcion');
            reportJokes.push(new Joke(jsonSend.joke, Number(dataValue)));
            reviews.forEach(review => review.setAttribute('disabled', ''));
            newJoke.removeAttribute('disabled');
            console.log(reportJokes);
        });
    });
};
const weatherCreation = (() => __awaiter(void 0, void 0, void 0, function* () {
    const { userDates, userWeather } = APIs;
    const { url, key, referenceDates } = userWeather;
    const { latitude, longitude } = yield (yield fetch(userDates.url)).json();
    const weatherUrlComplet = url + referenceDates.latitude + latitude + referenceDates.longitude + longitude + referenceDates.appId + key + referenceDates.units;
    const weatherUser = yield (yield fetch(weatherUrlComplet)).json();
    const currentlyIcon = weatherIcons.find(icons => icons.listIcon.find(icon => icon === weatherUser.weather[0].icon));
    result.innerHTML = currentlyIcon.item;
    document.getElementById('text').innerHTML = `${Math.round(weatherUser.main.temp)}°C`;
}))();
const secondJokeGenerator = (() => __awaiter(void 0, void 0, void 0, function* () { return yield (yield fetch(APIs.jokes2.url, APIs.jokes2.header)).json(); }));
newJoke === null || newJoke === void 0 ? void 0 : newJoke.addEventListener('click', () => {
    fetch(APIs.jokes1.url, APIs.jokes1.header)
        .then(response => response.json())
        .then(json => {
        constructionAnswer(json);
        sendingReviewJoke(json);
    });
});

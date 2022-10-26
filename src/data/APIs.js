"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIs = void 0;
exports.APIs = {
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

import { APIs } from "../data/APIs.js";

export const jokeSelecter = async () => {
    const randomNumber = Math.round(Math.random());
    const firstJoke = await (await fetch(APIs.jokes1.url, APIs.jokes1.options)).json()
    const secondJoke = await (await fetch(APIs.jokes3.url, APIs.jokes3.options)).json()
    const randomJoke = randomNumber === 0 ? firstJoke : secondJoke
    return randomJoke
}
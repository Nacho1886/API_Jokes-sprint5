export class Joke {
    joke: object[];
    score: number;
    date: string;
    constructor(joke: object[], score: number) {
        this.joke = joke;
        this.score = score;
        this.date = new Date().toISOString();
    }
}
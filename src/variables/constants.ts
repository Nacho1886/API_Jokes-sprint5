export {newJoke, firstPartJoke, buttonResponse, result, reviews, reportJokes}

const newJoke: HTMLElement | null = document.getElementById('newJoke');
const firstPartJoke: HTMLElement | null = document.getElementById('firstPartJoke');
const buttonResponse: HTMLElement | null = document.getElementById('buttonResponse');
const result: HTMLElement | null = document.getElementById('result');
const reviews = document.querySelectorAll('.review');

const reportJokes: object[] = [];
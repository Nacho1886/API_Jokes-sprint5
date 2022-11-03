export { firstJoke, spanLeft, spanRight, spanTop, spanBottom, newJoke, firstPartJoke, buttonResponse, result, reviews, reportJokes, firstPart, secondPart }

// const buttonTopJoke: HTMLElement | null = document.querySelector('.buttonTopJoke');
const firstJoke: HTMLElement | null = document.getElementById('firstJoke');
const spanLeft: HTMLElement | null = document.getElementById('spanLeft');
const spanRight: HTMLElement | null = document.getElementById('spanRight');
const spanTop: HTMLElement | null = document.getElementById('spanTop');
const spanBottom: HTMLElement | null = document.getElementById('spanBottom');
const newJoke: HTMLElement | null = document.getElementById('newJoke');
const firstPartJoke: HTMLElement | null = document.getElementById('firstPartJoke');
const firstPart: HTMLElement | null = document.getElementById('firstPart');
const secondPart: HTMLElement | null = document.getElementById('secondPart');
const buttonResponse: HTMLElement | null = document.getElementById('buttonResponse');
const result: HTMLElement | null = document.getElementById('result');
const reviews = document.querySelectorAll('.review');

const reportJokes: object[] = [];
const quotes = [
  {
    quote: "늦었다고 생각할 때가 정말 늦었다",
    author: "박명수",
  },
  {
    quote: "일찍 일어난 새가 피곤하다",
    author: "박명수",
  },
  {
    quote: "어려운 길은 길이 아니다",
    author: "박명수",
  },
  {
    quote: "선배는 입 닫고 지갑 열어라",
    author: "박명수",
  },
  {
    quote: "가는 말이 고우면 얕본다",
    author: "박명수",
  },
  {
    quote: "감사의 표시는 돈으로 해라",
    author: "박명수",
  },
  {
    quote: "참을 인 세 번이면 호구 ",
    author: "박명수",
  },
  {
    quote: "안되면 말고 ",
    author: "박명수",
  },
  {
    quote: "죽음과 결혼은 뒤로 미룰수록 좋다  ",
    author: "박명수",
  },
  {
    quote: "결혼은 좋은 짝을 만나는 게 아니라 좋은 짝이 되어주는 거다 ",
    author: "박명수",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

console.log(todaysQuote);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

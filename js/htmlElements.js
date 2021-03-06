const body = document.querySelector("body");
const minutesDisplay = document.querySelector("#minutes");
const secondsDisplay = document.querySelector("#seconds");
const playButton = document.querySelector("#playButton");
const pauseButton = document.querySelector("#pauseButton");
const stopButton = document.querySelector("#stopButton");
const addButton = document.querySelector("#addButton");
const subtractButton = document.querySelector("#subtractButton");
const volumeBar = Array.from(document.querySelectorAll(".volumeBar"));
const forestCard = document.querySelector("#forestCard");
const forestSound = document.querySelector("#forestSound");
const rainCard = document.querySelector("#rainCard");
const rainSound = document.querySelector("#rainSound");
const coffeShopCard = document.querySelector("#coffeShopCard");
const coffeShopSound = document.querySelector("#coffeShopSound");
const firePlaceCard = document.querySelector("#firePlaceCard");
const firePlaceSound = document.querySelector("#firePlaceSound");
const buttonLightDarkMode = document.querySelector("#buttonLightDarkMode");
const boxButton = document.querySelector("#boxButton");
const boxInsideBall = document.querySelector("#boxInsideBall");
const standardMinutes = 0;
const standardSeconds = 0;
let count = 0;

export const elements = {
  body,
  minutesDisplay,
  secondsDisplay,
  playButton,
  pauseButton,
  stopButton,
  addButton,
  subtractButton,
  volumeBar,
  forestCard,
  forestSound,
  rainCard,
  rainSound,
  coffeShopCard,
  coffeShopSound,
  firePlaceCard,
  firePlaceSound,
  standardMinutes,
  standardSeconds,
  buttonLightDarkMode,
  boxButton,
  boxInsideBall,
  count,
};

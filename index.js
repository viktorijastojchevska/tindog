import dogs from "./data.js";
import Dog from "./dog.js";
import { like, disLike } from "./utils.js";

const cardEl = document.getElementById("card");

let dogIndex = 0;
let currentDog = new Dog(dogs[dogIndex]);

document.getElementById("btn-like").addEventListener("click", like);
document.getElementById("btn-dislike").addEventListener("click", disLike);

function render() {
  cardEl.innerHTML = currentDog.getDogCardHtml();
}
render();

function getNewDog() {
  if (dogIndex < dogs.length - 1) {
    dogIndex = dogIndex + 1;
  } else {
    dogIndex = 0;
  }
  currentDog = new Dog(dogs[dogIndex]);
  render();
}

export { getNewDog };

import { getNewDog } from "./index.js";

const likeEl = document.getElementById("liked");
const btnLike = document.getElementById("btn-like");
const dislikeEl = document.getElementById("disliked");
const btnDislike = document.getElementById("btn-dislike");

function like() {
  btnLike.style.background = "#DBFFF4";
  likeEl.style.display = "block";
  btnDislike.disabled = true;

  setTimeout(() => {
    getNewDog();
    defaultStyles();
  }, 1500);
}

function disLike() {
  btnDislike.style.background = "#FFE7EF";
  dislikeEl.style.display = "block";
  btnLike.disabled = true;

  setTimeout(() => {
    getNewDog();
    defaultStyles();
  }, 1500);
}

function defaultStyles() {
  btnLike.style.background = "#ffffff";
  btnDislike.style.background = "#ffffff";
  likeEl.style.display = "none";
  dislikeEl.style.display = "none";
  btnLike.disabled = false;
  btnDislike.disabled = false;
}

export { like, disLike, defaultStyles };

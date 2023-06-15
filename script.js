const btn = document.getElementById("btn");
const object = document.getElementById("object");
const container = document.querySelector(".container");
const h1 = document.querySelector("h1");
const playBtn = document.querySelector(".playbtn");
const image1 = document.querySelector(".img1");
const image2 = document.querySelector(".img2");
let isFirstPlay = true;

btn.onclick = function () {
  document.body.classList.toggle("light-theme");

  if (document.body.classList.contains("light-theme")) {
    object.classList.replace("fa-sun", "fa-moon");
  } else {
    object.classList.replace("fa-moon", "fa-sun");
  }
};

window.addEventListener("load", function () {
  container.classList.add("loaded");
  h1.classList.add("loaded");
});

function setDiceImage(image, randomNumber) {
  const randomImageSource = `images/${randomNumber}.png`;
  image.setAttribute("src", randomImageSource);
}

function playDice() {
  container.classList.remove("loaded");
  h1.classList.remove("loaded");
  playBtn.style.pointerEvents = "none";

  setTimeout(function () {
    const randomNumber1 = Math.ceil(Math.random() * 6);
    setDiceImage(image1, randomNumber1);

    const randomNumber2 = Math.ceil(Math.random() * 6);
    setDiceImage(image2, randomNumber2);

    if (randomNumber1 > randomNumber2) {
      h1.innerHTML = "Player 1 Wins!";
    } else if (randomNumber1 === randomNumber2) {
      h1.innerHTML = "It's a Draw!";
    } else {
      h1.innerHTML = "Player 2 Wins!";
    }

    container.classList.add("loaded");
    h1.classList.add("loaded");
    playBtn.style.pointerEvents = "auto";

    playBtn.innerHTML = `Play Again <i class="fa-solid fa-arrows-rotate"></i>`;
    isFirstPlay = false;
  }, 200);
}

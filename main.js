const morty = document.getElementById("figure");
const portal = document.getElementById("obstacle");
const ship = document.getElementById("ship");
const game = document.querySelector(".game");
const button = document.getElementById("start-game");
let score = document.querySelector(".js-score");
let counter = parseInt(score.innerText);
let topText = document.getElementById("title");

function jump() {
  if (morty.classList != "jump") {
    morty.classList.add("jump");

    setTimeout(function () {
      morty.classList.remove("jump");
    }, 400);
  }
}

let isAlive = setInterval(() => {
  // get current morty Y position
  let mortyTop = parseInt(
    window.getComputedStyle(morty).getPropertyValue("top")
  );

  //get current portal y position
  let portalLeft = parseInt(
    window.getComputedStyle(portal).getPropertyValue("left")
  );

  let shipLeft = parseInt(
    window.getComputedStyle(ship).getPropertyValue("left")
  );
  // detect collision

  if (portalLeft < 30 && portalLeft > 0 && mortyTop >= 130) {
    console.log("collision");
    alert("Ah Jeez, YOU LOSE!");
    // play Morty saying 'ah jeez' when theres collision
    counter = -2;
    // topText.innerText = "Game Over"
    // game.style.background = "red"
  }
  // detect ship collision
  if (shipLeft < 30 && shipLeft > 0 && mortyTop <= 120) {
    alert("Watch your head next time. You LOSE!");
    counter = -2;
    console.log("collision");
  }
}, 10);

document.addEventListener("keydown", function (event) {
  jump();
});

let addPoints = setInterval(() => {
  counter += 2;
  score.innerHTML = counter;
  console.log(counter);
}, 1000);

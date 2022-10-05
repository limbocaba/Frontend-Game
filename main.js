const morty = document.getElementById("figure");
const portal = document.getElementById("obstacle")

function jump() {
  if (morty.classList != "jump") {
    morty.classList.add("jump");

    setTimeout(function () {
      morty.classList.remove("jump")
    }, 400)
  }
}

let isAlive = setInterval(() => {
 // get current morty Y position
  let mortyTop = parseInt(window.getComputedStyle(morty).getPropertyValue("top"));

  //get current portal y position
  let portalLeft = parseInt(window.getComputedStyle(portal).getPropertyValue("left"))

// detect collision
  
  if (portalLeft < 50 && portalLeft > 0 && mortyTop >= 140) {
    console.log('collision')
    alert("Wubba Lubba Dub Dub, YOU LOSE!")
  }
  
}, 10);


document.addEventListener("keydown", function (event) {
  jump();
});

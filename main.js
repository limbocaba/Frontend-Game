const morty = document.getElementById("figure");

function jump() {
  if (morty.classList != "jump") {
    morty.classList.add("jump");

    setTimeout(function () {
      morty.classList.remove("jump")
    }, 300)
  }
}

document.addEventListener("keydown", function (event) {
  jump();
});

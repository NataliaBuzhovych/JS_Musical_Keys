const audio = new Audio();

document.body.addEventListener("keydown", function (e) {
  delActive();
  let addActive = "key" + e.code.substr(-1);
  if (document.querySelector(`.${addActive}`)) {
    document.querySelector(`.${addActive}`).classList.add("active");
    play(e);
    audio.play();
  }
});
document.querySelector("#keys").addEventListener("click", function (e) {
  delActive();

  if (e.target.classList.contains("key")) {
    e.target.classList.add("active");
    play(e);
    audio.play();
  }
});

function delActive() {
  document
    .querySelectorAll("div")
    .forEach((div) => div.classList.remove("active"));
}

function play(e) {
  if (e.code === "KeyI" || e.target.classList.contains("keyI")) {
    audio.src = "audio/ice.mp3";
  }
  if (e.code === "KeyP" || e.target.classList.contains("keyP")) {
    audio.src = "audio/bottled.mp3";
  }
  if (e.code === "KeyO" || e.target.classList.contains("keyO")) {
    audio.src = "audio/open.mp3";
  }
  if (e.code === "KeyM" || e.target.classList.contains("keyM")) {
    audio.src = "audio/mixed.mp3";
  }
  if (e.code === "KeyD" || e.target.classList.contains("keyD")) {
    audio.src = "audio/drink.mp3";
  }
}

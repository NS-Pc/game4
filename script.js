//Loading screen
setTimeout(() => {
  document.getElementById("loading").style.display = "none";
}, 5000);

let start = 0;
let sp = 2;
let Time = 0;
let time = 0;
document.getElementById("play").addEventListener("click", () => {
  document.getElementById("playbox").style.display = "none";
  setTimeout(() => {
    sp = 1.3;
  }, 10000);
  start = 1;
  Time = 1;
  time=0;
});

let Scr=document.getElementById("Scr");
let scr=document.getElementById("scrbox");

setInterval(() => {
  if (Time == 1) {
    time = time + 1;
    scr.innerText=time;
    Scr.innerText=time;
  }
}, 1000);

setInterval(() => {
  if (start == 1) {
    anime.style.animation = `rocks ${sp}s linear infinite`;
  } else {
    anime.style.animation = "none";
  }
}, 100);

//player controlls

let jump=document.getElementById("jump");
jump.addEventListener("click",()=>{
    player.style.bottom = "200px";
    setTimeout(() => {
      player.style.bottom = "40px";
    }, 500);
})
let player = document.getElementById("player");
let a = 0;
document.addEventListener("keydown", (e) => {
  if (e.key == "ArrowUp") {
    if (a == 0) {
      player.style.bottom = "200px";
      a = 1;
    }
    setTimeout(() => {
      player.style.bottom = "40px";
    }, 500);
  }
});
document.addEventListener("keyup", (e) => {
  if (e.key == "ArrowUp") {
    a = 0;
  }
});
let anime = document.getElementById("anime");
let gameover = document.getElementById("gameover");

setInterval(() => {
  const playerRect = player.getBoundingClientRect();
  const animeRect = anime.getBoundingClientRect();

  if (
    playerRect.left < animeRect.right &&
    playerRect.right > animeRect.left &&
    playerRect.top < animeRect.bottom &&
    playerRect.bottom > animeRect.top
  ) {
    gameover.style.display = "inline-block";
    anime.style.animation = "none";
    start = 0;
    Time=0;
  }
}, 10);

let home = document.getElementById("home");
home.addEventListener("click", () => {
  anime.style.animation = "none";
  start = 0;
  document.getElementById("playbox").style.display = "inline-block";
  gameover.style.display = "none";
  Time = 0;
  time = 0;
});

const canvas = document.querySelector("canvas");
canvas.style.border = "2px solid black";
const ctx = canvas.getContext("2d");
const background = new Image();
background.src = "../images/road.png";
const car = new Image();
car.src = "../images/car.png"

window.onload = () => {
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(car, 200, 525, 100, 150);
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {}
};

const canvas = document.querySelector("canvas");
canvas.style.border = "2px solid black";
const ctx = canvas.getContext("2d");

const background = new Image();
background.src = "../images/road.png";
const car = new Image();
car.src = "../images/car.png";

let speed = 0;
let carX = 200;
let carY = 525;
const carWidth = 100;
const carHeight = 150;



// function carStartPositionClearCanvas() {
//   ctx.clearRect(car, carX, carY, 100, 150);
// }
// function carStartPositionDrawCanvas(x, y, w, h, color) {
//   ctx.fillStyle = color;
//   ctx.fillRect(x, y, w, h);
// }

// const keyRight =
// const keyLeft =

window.onload = () => {
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  // ctx.drawImage(car, carX, carY, carWidth, carHeight);

  function drawCar(carX, carY, carWidth, carHeight) {
    ctx.drawImage(car, carX, carY, carWidth, carHeight);
  }
drawCar(250, 300, carWidth, carHeight)

  // function moveCar() {
  //   // ctx.clearRect();
  //   drawCar(250, 300, carWidth, carHeight)
  // }

  document.addEventListener("keydown", (event) => {
    if (event.key == "ArrowLeft") {
      console.log("keyleft");
    } else if (event.key == "ArrowRight") {
      console.log("Keyright");
    }
  });

  function drawObstacle(x, y, obstacleWidth, obstacleHeight) {

  }

  // .setInterval(), .setTimeout(), and .requestAnimationFrame()

  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {}
};

document.getElementById("draw-stairs").onclick = () => {
  // call drawStairs 10 times to create stairs
  for (let i = 0; i < 10; i++) {
    drawStairs();
  }
  document.getElementById("draw-stairs").disabled = true;
};

document.getElementById("climb-stairs").onclick = () => {
  climbStairs();
};

function drawStairs() {
  // Create Stair Element
  const stair = document.createElement("div");
  stair.classList.add("stair");
  // Get Stair side and make it not hidden
  const stairSide = document.getElementById("stair-side");
  stairSide.classList.remove("hidden");
  //append stair
  stairSide.append(stair);
}

function climbStairs() {
  const climber = document.createElement("img");
  climber.src = "images/left.png";
  climber.classList.add("climber");
  document.getElementById("stair-side").append(climber);

  let step = 0;
  const interval = setInterval(() => {
    //run the setinterval ten times
    if (step >= 10) {
      clearInterval(interval);
      return;
    }
    climber.style.bottom = `${step * 60}px`;
    //mod to check if step is even or odd to alternate climber
    if (step % 2 === 0) {
      climber.src = "images/right.png";
    } else {
      climber.src = "images/left.png";
    }
    step++;
  }, 500); // Adjust interval time as needed
}

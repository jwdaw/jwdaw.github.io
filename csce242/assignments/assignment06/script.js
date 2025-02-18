//Change From exercise 1 to 2

document.getElementById("exercise-two").onclick = () => {
  console.log("exercise 2 clicked");
  document.getElementById("traveling").classList.add("hidden");
  document.getElementById("coloring").classList.remove("hidden");
};

document.getElementById("exercise-one").onclick = () => {
  document.getElementById("traveling").classList.remove("hidden");
  document.getElementById("coloring").classList.add("hidden");
};

// Update image based on transportation mode
document
  .getElementById("transportation-mode")
  .addEventListener("input", (event) => {
    const transportImg = document.getElementById("transport-img");
    const mode = event.target.value.toLowerCase();

    //if statement got ugly so I did a switch case instead
    switch (mode) {
      case "bike":
        transportImg.src = "images/bike.png";
        break;
      case "skateboard":
        transportImg.src = "images/skateboard.jpg";
        break;
      case "car":
        transportImg.src = "images/car.jpg";
        break;
      case "scooter":
        transportImg.src = "images/scooter.jpg";
        break;
      default:
        transportImg.src = "";
        break;
    }
  });

// Change heart color
function changeColor(color) {
  const heart = document.getElementById("heart");
  heart.style.setProperty("--c", color);
}

document.getElementById("btn-red").onclick = () => changeColor("red");
document.getElementById("btn-blue").onclick = () => changeColor("blue");
document.getElementById("btn-green").onclick = () => changeColor("green");

// do stuff when button clicked
document.getElementById("btn-clickme").onclick = () => {
  console.log("Doing Stuff");
  document.getElementById("result").innerHTML = "Hi Jackson!";
};

document.getElementById("btn-color").onclick = () => {
  const messageP = document.getElementById("message");
  messageP.innerHTML = "Goodbye!";
  messageP.classList.add("sad");
};

//toggling the navigation on smaller screens
document.getElementById("toggle-nav").onclick = () => {
  document.getElementById("nav-items").classList.toggle("hide-small");
};

document.getElementById("color-button").onclick = () => {
  const color = document.getElementById("color").value.toLowerCase().trim();
  let mood = "";
  if (color == "blue") mood = "grumpy";
  if (color == "yellow") mood = "mellow";
  if (color == "red") mood = "angry";

  document.getElementById("color-message").innerHTML = `You chose ${mood}`;
};

let pos = 0;
const changeCirclePosition = (increment) => {
  pos += increment;
  document.getElementById("circle").style.setProperty("top", pos + "px");
};

document.getElementById("btn-down").onclick = () => {
  changeCirclePosition(10);
};

document.getElementById("btn-up").onclick = () => {
  changeCirclePosition(-10);
};

document.getElementById("btn-circle-color").onchange = (event) => {
  const color = event.currentTarget.value;
  document
    .getElementById("circle")
    .style.setProperty("background-color", color);
};

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

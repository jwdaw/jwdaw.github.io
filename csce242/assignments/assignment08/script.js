const objectMap = new Map();
objectMap.set("Happy Birthday", "images/birthday.jpg");
objectMap.set("Crazy Clown", "images/clown.jpg");
objectMap.set("It's Raining", "images/rain.jpg");
objectMap.set("Quiet Time", "images/read.jpg");
objectMap.set("Working Hard", "images/shovel.jpg");
objectMap.set("Working from Home", "images/work.jpg");

let objectList = document.getElementById("flex-container");

let popup = document.getElementById("popup");
popup.classList.add("hidden");
let closeButton = document.getElementById("close");
closeButton.classList.add("hidden");

// Use objectMap.entries() to get both key and value
for (const [key, value] of objectMap.entries()) {
  let objectHolder = document.createElement("h3");
  objectHolder.id = `${key}`;
  objectHolder.innerHTML = `${key}`;
  objectList.append(objectHolder);
}

document.getElementById("Happy Birthday").onclick = () => {
  console.log(objectMap.get("Happy Birthday"));
  happyBirthday = document.createElement("img");
  happyBirthday.src = objectMap.get("Happy Birthday");
  popup.append(happyBirthday);
  popup.classList.remove("hidden");
  closeButton.classList.remove("hidden");
};

document.getElementById("Crazy Clown").onclick = () => {
  console.log(objectMap.get("Crazy Clown"));
  crazyClown = document.createElement("img");
  crazyClown.src = objectMap.get("Crazy Clown");
  popup.append(crazyClown);
  popup.classList.remove("hidden");
  closeButton.classList.remove("hidden");
};

document.getElementById("It's Raining").onclick = () => {
  console.log(objectMap.get("It's Raining"));
  itsRaining = document.createElement("img");
  itsRaining.src = objectMap.get("It's Raining");
  popup.append(itsRaining);
  popup.classList.remove("hidden");
  closeButton.classList.remove("hidden");
};

document.getElementById("Quiet Time").onclick = () => {
  console.log(objectMap.get("Quiet Time"));
  quietTime = document.createElement("img");
  quietTime.src = objectMap.get("Quiet Time");
  popup.append(quietTime);
  popup.classList.remove("hidden");
  closeButton.classList.remove("hidden");
};

document.getElementById("Working Hard").onclick = () => {
  console.log(objectMap.get("Working Hard"));
  workingHard = document.createElement("img");
  workingHard.src = objectMap.get("Working Hard");
  popup.append(workingHard);
  popup.classList.remove("hidden");
  closeButton.classList.remove("hidden");
};

document.getElementById("Working from Home").onclick = () => {
  console.log(objectMap.get("Working from Home"));
  workingFromHome = document.createElement("img");
  workingFromHome.src = objectMap.get("Working from Home");
  popup.append(workingFromHome);
  popup.classList.remove("hidden");
  closeButton.classList.remove("hidden");
};

closeButton.onclick = () => {
  popup.classList.add("hidden");
  while (popup.firstChild) {
    popup.removeChild(popup.firstChild);
  }
  popup.append(closeButton);
  closeButton.classList.add("hidden");
};

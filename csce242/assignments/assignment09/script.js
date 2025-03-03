class Car {
  //Paramaterized constructor
  constructor(name, engineType, transmission, towingCapacity, photo) {
    this.name = name;
    this.engineType = engineType;
    this.transmission = transmission;
    this.towingCapacity = towingCapacity;
    this.photo = photo;
  }

  getSection() {
    //Class Properties
    const carSection = document.createElement("section");
    const carTitle = document.createElement("h2");
    carTitle.innerHTML = this.name;
    const carPhoto = document.createElement("img");
    carPhoto.src = this.photo;
    carSection.append(carTitle);
    carSection.append(carPhoto);
    carSection.id = "carSection";

    // Get the modal to show up
    carSection.addEventListener("click", () => {
      displayCarDetails(this.name);
    });

    return carSection;
  }
}

//Array populated with Car objects and attributes
const carList = [
  (Sedan = new Car(
    "Sedan",
    "Gasoline",
    "Automatic",
    "Not Reccomended for Towing",
    "images/sedan.jpg"
  )),
  (Truck = new Car(
    "Truck",
    "Gasoline",
    "Automatic/Manual",
    "6000 lbs",
    "images/truck.jpg"
  )),
  (Hatchback = new Car(
    "Hatchback",
    "Gasoline",
    "Automatic",
    "Not Reccomended for Towing",
    "images/hatchback.jpg"
  )),
  (SUV = new Car(
    "SUV",
    "Gasoline",
    "Automatic/Manual",
    "4000 lbs",
    "images/SUV.jpg"
  )),
  (Coupe = new Car(
    "Coupe",
    "Gasoline",
    "Manual",
    "Not Reccomended for Towing",
    "images/coupe.jpg"
  )),
];

// function runs on page startup - pretty cool didnt know this existed
window.onload = () => {
  const mainSection = document.getElementById("flex-container");
  for (let i = 0; i < carList.length; i++) {
    mainSection.append(carList[i].getSection());
  }

  //create modal
  const modal = document.createElement("div");
  modal.id = "carModal";
  modal.className = "modal";

  //populate the modal
  const modalContent = document.createElement("div");
  modalContent.className = "modal-content";

  //create close button and add functionality
  const closeBtn = document.createElement("span");
  closeBtn.className = "close";
  //close symbol
  closeBtn.innerHTML = "&times;";
  closeBtn.onclick = () => {
    modal.style.display = "none";
  };

  //create div for body of modal
  const modalBody = document.createElement("div");
  modalBody.id = "modal-body";

  modalContent.appendChild(closeBtn);
  modalContent.appendChild(modalBody);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
};

//function to populate modal with class attributes
function displayCarDetails(carName) {
  const modal = document.getElementById("carModal");
  const modalBody = document.getElementById("modal-body");

  const car = carList.find((car) => car.name === carName);
  modalBody.innerHTML = `
      <h2>${car.name}</h2>
      <img src="${car.photo}" alt="${car.name}" />
      <p><strong>Engine Type:</strong> ${car.engineType}</p>
      <p><strong>Transmission:</strong> ${car.transmission}</p>
      <p><strong>Towing Capacity:</strong> ${car.towingCapacity}</p>
    `;
  modal.style.display = "block";
}

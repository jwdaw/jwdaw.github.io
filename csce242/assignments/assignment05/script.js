//Change color of star when color selected
const colorPicker = document.getElementById("color-picker");
const star = document.getElementById("star");

colorPicker.addEventListener("change", (event) => {
  const selectedColor = event.target.value;
  star.style.backgroundColor = selectedColor; // Ensure this is backgroundColor
});

//create a counter to stop Hellos from going out of bounds
let counter = 0;
// Add Hello to every line when the column is clicked
document
  .getElementById("flex-item-hello")
  .addEventListener("click", function () {
    // if statement stops hellos from going out of box's boundaries
    if (counter < 6) {
      const messageP = document.getElementById("message");
      const newMessage = document.createElement("p");
      newMessage.textContent = "Hello!";
      messageP.appendChild(newMessage);
      counter++;
    }
  });

// create variable for img object
const img = document.getElementById("img");
// create variable to track which image is being displayed
let isOriginalSrc = true;

//switch image src back and forth when image is clicked
img.addEventListener("click", function () {
  if (isOriginalSrc) {
    img.src = "https://loremflickr.com/200/200";
  } else {
    img.src = "https://picsum.photos/200";
  }
  isOriginalSrc = !isOriginalSrc;
});

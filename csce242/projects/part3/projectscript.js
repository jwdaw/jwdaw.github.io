//This next section is how i intend on changing between project info for each button.
//I'm just going to change the image in this case, because the rest of the info is
//Lorem Ipsum. Point being, the paragraphs would change info and so would the images
let button1 = document.getElementById("placeholder");
let button2 = document.getElementById("placeholder1");
let button3 = document.getElementById("placeholder2");
let button4 = document.getElementById("placeholder3");
let button5 = document.getElementById("placeholder4");
let button6 = document.getElementById("placeholder5");

let imgElement = document.getElementById("project-img");

button1.addEventListener("click", function () {
  // console.log("Button 1 clicked");
  imgElement.src = "https://picsum.photos/300/200";
  // console.log("Image source updated to: " + imgElement.src);
});

button2.addEventListener("click", function () {
  // console.log("Button 2 clicked");
  imgElement.src = "https://picsum.photos/300/201";
  // console.log("Image source updated to: " + imgElement.src);
});

button3.addEventListener("click", function () {
  // console.log("Button 3 clicked");
  imgElement.src = "https://picsum.photos/301/200";
  // console.log("Image source updated to: " + imgElement.src);
});

button4.addEventListener("click", function () {
  // console.log("Button 4 clicked");
  imgElement.src = "https://picsum.photos/300/199";
  // console.log("Image source updated to: " + imgElement.src);
});

button5.addEventListener("click", function () {
  // console.log("Button 5 clicked");
  imgElement.src = "https://picsum.photos/299/200";
  // console.log("Image source updated to: " + imgElement.src);
});

button6.addEventListener("click", function () {
  // console.log("Button 6 clicked");
  imgElement.src = "https://picsum.photos/300/200";
  // console.log("Image source updated to: " + imgElement.src);
});

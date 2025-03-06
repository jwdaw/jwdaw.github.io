// Get button elements to be clicked
let button1 = document.getElementById("placeholder");
let button2 = document.getElementById("placeholder1");
let button3 = document.getElementById("placeholder2");
let button4 = document.getElementById("placeholder3");
let button5 = document.getElementById("placeholder4");
let button6 = document.getElementById("placeholder5");

// Get all HTML elements on the project page that need to change
let imgElement = document.getElementById("project-img");
let projectTitle = document.getElementById("project-title");
let projectDesc = document.getElementById("project-desc-paragraph");
let skillsPara = document.getElementById("skills-paragraph");
let contributions = document.getElementById("sources-paragraph");
let projectsArray = [];

// fetch projects.json from github
const getProjects = async () => {
  const url = "https://jwdaw.github.io/json/project.json";
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

// Create an array of Project Objects
const setProjects = async () => {
  let counter = 0;
  const projects = await getProjects();
  projects.forEach((project) => {
    projectsArray[counter] = project;
    counter++;
  });
};

//Call setProjects to create array
setProjects();

button1.addEventListener("click", async () => {
  console.log("Hello World");
  // Set the image url
  imgElement.src = projectsArray[0].image;
  // Set project title
  projectTitle.innerHTML = "Project Title: " + projectsArray[0].name;
  // Set Project Description
  projectDesc.innerHTML =
    "<strong>Project Description: </strong>" + projectsArray[0].desc;
});

button2.addEventListener("click", async () => {
  console.log("button2");
  // Set the image url
  imgElement.src = projectsArray[1].image;
  // Set the project title
  projectTitle.innerHTML = "Project Title: " + projectsArray[1].name;
  // set project description
  projectDesc.innerHTML =
    "<strong>Project Description: </strong>" + projectsArray[1].desc;
  // set skills
});

button3.addEventListener("click", async () => {});

button4.addEventListener("click", async () => {});

button5.addEventListener("click", async () => {});

button6.addEventListener("click", async () => {});

document.getElementById("toggle-nav").onclick = () => {
  document.getElementById("nav-items").classList.toggle("hide-small");
};

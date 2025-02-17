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
  imgElement.src = "images/DavinCi.png";
  // console.log("Image source updated to: " + imgElement.src);
  document.getElementById("project-title").innerHTML =
    "Project Title: DaVinci Academia";

  document.getElementById("project-desc-paragraph").innerHTML =
    "<strong>Project Description:</strong> DaVinci Academia is a recreation of a " +
    "University Course and Major review system. The project was created as a mock " +
    "full-stack software development life cycle, in which we covered topics such " +
    "as Requirements elicitation, UML design, Scrum management, Backend development, " +
    "Database development, Frontend development, and more";

  document.getElementById("skills-paragraph").innerHTML =
    "<strong>Skills Gained: </strong>The process of developing " +
    "DaVinci Academia had many parts. This included: requirments " +
    "elicitation, UML design, Scrum management, Backend development, " +
    "Database development, Frontend development, and more. Technical " +
    "skills learned include: Design Patterns, JavaFX, Unit Testing, " +
    "JSON, Scrum, Git, and more.";

  document.getElementById("sources-paragraph").innerHTML =
    "<strong>Sources/Contributions: </strong>We worked in groups of " +
    "4, in which each contrubutor had their own role. I was designated writer," +
    "with other roles including programmer, designer, and project manager." +
    " Granted, all members contributed to signifiant efforts to the coding and logic.";
});

button2.addEventListener("click", function () {
  // console.log("Button 2 clicked");
  imgElement.src = "images/DesignPatterns.png";
  imgElement.href = "https://github.com/jwdaw/Design-Patterns";

  document.getElementById("project-title").innerHTML =
    "Project Title: Design Patterns";

  document.getElementById("project-desc-paragraph").innerHTML =
    "<strong>Project Description:</strong> This project/learning period was a time " +
    "spent studying object oriented design patterns and their applications to software " +
    "solutions being built both in and out of class. We studied common patterns such as " +
    "facade, strategy, iterator, singleton, and more. Overall, this learning period taught " +
    "the importance of organizing code and creating space for reusibility.";

  document.getElementById("skills-paragraph").innerHTML =
    "<strong>Skills Gained: </strong>The process of learning " +
    "Object Oriented Design Patterns took the span of 3-4 weeks " +
    "in class and was spent learning the following Design Patters: " +
    "Decorator, Iterator, Observer, Singleton, State, Strategy, and Facade. " +
    "This also gave me a further understanding of Inheritance and Polymorphism " +
    "as well as general Java syntax.";

  document.getElementById("sources-paragraph").innerHTML =
    "<strong>Sources/Contributions: </strong>This was taught in class " +
    "and therefore was a an independent learning period. ";
});

button3.addEventListener("click", function () {
  // console.log("Button 3 clicked");
  imgElement.src = "images/csce190.png";

  document.getElementById("project-title").innerHTML =
    "Project Title: Basic Web Development";

  document.getElementById("project-desc-paragraph").innerHTML =
    "<strong>Project Description:</strong> This project mainly spent time " +
    "learning the basics of web development. This included learning " +
    "HTML, CSS, and JavaScript. This was a time spent learning the " +
    "design of webpages and how they interacted with web browsers and mobile devices";

  document.getElementById("skills-paragraph").innerHTML =
    "<strong>Skills Gained: </strong> Building a basic understanding of " +
    "HTML, CSS, and JavaScript. This included creating a small class porfolio " +
    "website and a few other mini-projects. Skills gained include: HTML, CSS, Web Design.";

  document.getElementById("sources-paragraph").innerHTML =
    "<strong>Sources/Contributions: </strong>Most of this content was taught by a professor " +
    "and personally implemented. A few smaller projects were collaborative efforts.";
});

button4.addEventListener("click", function () {
  // console.log("Button 4 clicked");
  imgElement.src = "https://placehold.co/600x400?text=Coming+Soon!";
  document.getElementById("project-title").innerHTML = "Coming Soon!";
  document.getElementById("project-desc-paragraph").innerHTML =
    "<strong>Project Description:</strong> This project is currently in the works. " +
    "Come back soon!";
  document.getElementById("skills-paragraph").innerHTML =
    "<strong>Skills Gained: </strong>Coming Soon! ";
  document.getElementById("sources-paragraph").innerHTML =
    "<strong>Sources/Contributions: </strong>Coming Soon! ";
});

button5.addEventListener("click", function () {
  imgElement.src = "https://placehold.co/600x400?text=Coming+Soon!";
  document.getElementById("project-title").innerHTML = "Coming Soon!";
  document.getElementById("project-desc-paragraph").innerHTML =
    "<strong>Project Description:</strong> This project is currently in the works. " +
    "Come back soon!";
  document.getElementById("skills-paragraph").innerHTML =
    "<strong>Skills Gained: </strong>Coming Soon! ";
  document.getElementById("sources-paragraph").innerHTML =
    "<strong>Sources/Contributions: </strong>Coming Soon! ";
});

button6.addEventListener("click", function () {
  imgElement.src = "https://placehold.co/600x400?text=Coming+Soon!";
  document.getElementById("project-title").innerHTML = "Coming Soon!";
  document.getElementById("project-desc-paragraph").innerHTML =
    "<strong>Project Description:</strong> This project is currently in the works. " +
    "Come back soon!";
  document.getElementById("skills-paragraph").innerHTML =
    "<strong>Skills Gained: </strong>Coming Soon! ";
  document.getElementById("sources-paragraph").innerHTML =
    "<strong>Sources/Contributions: </strong>Coming Soon! ";
});

document.getElementById("toggle-nav").onclick = () => {
  document.getElementById("nav-items").classList.toggle("hide-small");
};

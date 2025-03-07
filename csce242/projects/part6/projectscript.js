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

button1.addEventListener("click", async () => {
  //Call setProjects to create array
  await setProjects();
  // Set the image url
  imgElement.src = projectsArray[0].image;
  // Set project title
  projectTitle.innerHTML = "Project Title: " + projectsArray[0].name;
  // Set Project Description
  projectDesc.innerHTML =
    "<strong>Project Description: </strong>" + projectsArray[0].desc;

  // Clear previous skills first
  skillsPara.innerHTML = "<strong>Skills: </strong>";
  // Use projectsArray[0].skills instead of projects.skills
  projectsArray[0].skills.forEach((skill, index) => {
    if (index === projectsArray[0].skills.length - 1) {
      // Last item - don't add comma
      skillsPara.innerHTML += skill;
    } else {
      // Not the last item - add comma
      skillsPara.innerHTML += skill + ", ";
    }
  });

  // Clear previous contributions first
  contributions.innerHTML = "<strong>Contributions: </strong>";
  // Check if there are any contributions
  if (
    projectsArray[0].contributions &&
    projectsArray[0].contributions.length > 0
  ) {
    projectsArray[0].contributions.forEach((contributor, index) => {
      // Create a link element for each contributor
      const contributorLink = `<a href="${contributor.url}">${contributor.name}</a>`;

      if (index === projectsArray[0].contributions.length - 1) {
        // Last item - don't add comma
        contributions.innerHTML += contributorLink;
      } else {
        // Not the last item - add comma
        contributions.innerHTML += contributorLink + ", ";
      }
    });
  } else {
    contributions.innerHTML += "None";
  }
});

button2.addEventListener("click", async () => {
  //Call setProjects to create array
  await setProjects();
  // Set the image url
  imgElement.src = projectsArray[1].image;
  // Set project title
  projectTitle.innerHTML = "Project Title: " + projectsArray[1].name;
  // Set Project Description
  projectDesc.innerHTML =
    "<strong>Project Description: </strong>" + projectsArray[1].desc;

  // Clear previous skills first
  skillsPara.innerHTML = "<strong>Skills: </strong>";
  // Use projectsArray[1].skills instead of projects.skills
  projectsArray[1].skills.forEach((skill, index) => {
    if (index === projectsArray[1].skills.length - 1) {
      // Last item - don't add comma
      skillsPara.innerHTML += skill; // Fix: was using contributions.innerHTML
    } else {
      // Not the last item - add comma
      skillsPara.innerHTML += skill + ", ";
    }
  });

  // Clear previous contributions first
  contributions.innerHTML = "<strong>Contributions: </strong>";
  // Check if there are any contributions
  if (
    projectsArray[1].contributions &&
    projectsArray[1].contributions.length > 0
  ) {
    projectsArray[1].contributions.forEach((contributor, index) => {
      // Create a link element for each contributor
      const contributorLink = `<a href="${contributor.url}">${contributor.name}</a>`;

      if (index === projectsArray[1].contributions.length - 1) {
        // Last item - don't add comma
        contributions.innerHTML += contributorLink;
      } else {
        // Not the last item - add comma
        contributions.innerHTML += contributorLink + ", ";
      }
    });
  } else {
    contributions.innerHTML += "None";
  }
});

button3.addEventListener("click", async () => {
  //Call setProjects to create array
  await setProjects();
  // Set the image url
  imgElement.src = projectsArray[2].image;
  // Set project title
  projectTitle.innerHTML = "Project Title: " + projectsArray[2].name;
  // Set Project Description
  projectDesc.innerHTML =
    "<strong>Project Description: </strong>" + projectsArray[2].desc;

  // Clear previous skills first
  skillsPara.innerHTML = "<strong>Skills: </strong>";
  // Use projectsArray[2].skills instead of projects.skills
  projectsArray[2].skills.forEach((skill, index) => {
    if (index === projectsArray[2].skills.length - 1) {
      // Last item - don't add comma
      skillsPara.innerHTML += skill;
    } else {
      // Not the last item - add comma
      skillsPara.innerHTML += skill + ", ";
    }
  });

  // Clear previous contributions first
  contributions.innerHTML = "<strong>Contributions: </strong>";
  // Check if there are any contributions
  if (
    projectsArray[2].contributions &&
    projectsArray[2].contributions.length > 0
  ) {
    projectsArray[2].contributions.forEach((contributor, index) => {
      // Create a link element for each contributor
      const contributorLink = `<a href="${contributor.url}">${contributor.name}</a>`;

      if (index === projectsArray[2].contributions.length - 1) {
        // Last item - don't add comma
        contributions.innerHTML += contributorLink;
      } else {
        // Not the last item - add comma
        contributions.innerHTML += contributorLink + ", ";
      }
    });
  } else {
    contributions.innerHTML += "None";
  }
});

button4.addEventListener("click", async () => {
  //Call setProjects to create array
  await setProjects();
  // Set the image url
  imgElement.src = projectsArray[3].image;
  // Set project title
  projectTitle.innerHTML = "Project Title: " + projectsArray[3].name;
  // Set Project Description
  projectDesc.innerHTML =
    "<strong>Project Description: </strong>" + projectsArray[3].desc;

  // Clear previous skills first
  skillsPara.innerHTML = "<strong>Skills: </strong>";
  // Use projectsArray[3].skills instead of projects.skills
  projectsArray[3].skills.forEach((skill, index) => {
    if (index === projectsArray[3].skills.length - 1) {
      // Last item - don't add comma
      skillsPara.innerHTML += skill;
    } else {
      // Not the last item - add comma
      skillsPara.innerHTML += skill + ", ";
    }
  });

  // Clear previous contributions first
  contributions.innerHTML = "<strong>Contributions: </strong>";
  // Check if there are any contributions
  if (
    projectsArray[3].contributions &&
    projectsArray[3].contributions.length > 0
  ) {
    projectsArray[3].contributions.forEach((contributor, index) => {
      // Create a link element for each contributor
      const contributorLink = `<a href="${contributor.url}">${contributor.name}</a>`;

      if (index === projectsArray[3].contributions.length - 1) {
        // Last item - don't add comma
        contributions.innerHTML += contributorLink;
      } else {
        // Not the last item - add comma
        contributions.innerHTML += contributorLink + ", ";
      }
    });
  } else {
    contributions.innerHTML += "None";
  }
});

button5.addEventListener("click", async () => {
  //Call setProjects to create array
  await setProjects();
  // Set the image url
  imgElement.src = projectsArray[4].image;
  // Set project title
  projectTitle.innerHTML = "Project Title: " + projectsArray[4].name;
  // Set Project Description
  projectDesc.innerHTML =
    "<strong>Project Description: </strong>" + projectsArray[4].desc;

  // Clear previous skills first
  skillsPara.innerHTML = "<strong>Skills: </strong>";
  // Use projectsArray[4].skills instead of projects.skills
  projectsArray[4].skills.forEach((skill, index) => {
    if (index === projectsArray[4].skills.length - 1) {
      // Last item - don't add comma
      skillsPara.innerHTML += skill;
    } else {
      // Not the last item - add comma
      skillsPara.innerHTML += skill + ", ";
    }
  });

  // Clear previous contributions first
  contributions.innerHTML = "<strong>Contributions: </strong>";
  // Check if there are any contributions
  if (
    projectsArray[4].contributions &&
    projectsArray[4].contributions.length > 0
  ) {
    projectsArray[4].contributions.forEach((contributor, index) => {
      // Create a link element for each contributor
      const contributorLink = `<a href="${contributor.url}">${contributor.name}</a>`;

      if (index === projectsArray[4].contributions.length - 1) {
        // Last item - don't add comma
        contributions.innerHTML += contributorLink;
      } else {
        // Not the last item - add comma
        contributions.innerHTML += contributorLink + ", ";
      }
    });
  } else {
    contributions.innerHTML += "None";
  }
});

button6.addEventListener("click", async () => {
  //Call setProjects to create array
  await setProjects();
  // Set the image url
  imgElement.src = projectsArray[5].image;
  // Set project title
  projectTitle.innerHTML = "Project Title: " + projectsArray[5].name;
  // Set Project Description
  projectDesc.innerHTML =
    "<strong>Project Description: </strong>" + projectsArray[5].desc;

  // Clear previous skills first
  skillsPara.innerHTML = "<strong>Skills: </strong>";
  // Use projectsArray[5].skills instead of projects.skills
  projectsArray[5].skills.forEach((skill, index) => {
    if (index === projectsArray[5].skills.length - 1) {
      // Last item - don't add comma
      skillsPara.innerHTML += skill;
    } else {
      // Not the last item - add comma
      skillsPara.innerHTML += skill + ", ";
    }
  });

  // Clear previous contributions first
  contributions.innerHTML = "<strong>Contributions: </strong>";
  // Check if there are any contributions
  if (
    projectsArray[5].contributions &&
    projectsArray[5].contributions.length > 0
  ) {
    projectsArray[5].contributions.forEach((contributor, index) => {
      // Create a link element for each contributor
      const contributorLink = `<a href="${contributor.url}">${contributor.name}</a>`;

      if (index === projectsArray[5].contributions.length - 1) {
        // Last item - don't add comma
        contributions.innerHTML += contributorLink;
      } else {
        // Not the last item - add comma
        contributions.innerHTML += contributorLink + ", ";
      }
    });
  } else {
    contributions.innerHTML += "None";
  }
});

document.getElementById("toggle-nav").onclick = () => {
  document.getElementById("nav-items").classList.toggle("hide-small");
};

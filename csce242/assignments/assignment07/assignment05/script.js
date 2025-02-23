document.getElementById("draw-stairs").onclick = () => {
  if (document.getElementById("stair-side").classList.contains("hidden")) {
    const stairSide = document.getElementById("stair-side");
    stairSide.classList.remove("hidden");

    // Create a document fragment to batch DOM updates
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < 10; i++) {
      let stair = document.createElement("div");
      stair.classList.add("stair");
      stair.style.bottom = `${i * 20}px`; // Adjust the step height as needed

      if (i == 0) {
        const left = document.createElement("img");
        left.src = "images/left.png";
        stair.appendChild(left);
      }

      fragment.appendChild(stair);
    }

    // Append the fragment to the stairSide element
    stairSide.appendChild(fragment);
  }
};

document.getElementById("btn-display").onclick = () => {
  const startNum = parseInt(document.getElementById("txt-start").value);
  const endNum = parseInt(document.getElementById("txt-end").value);
  const errorDisplay = document.getElementById("error-num-order");
  errorDisplay.innerHTML = "";

  if (parseInt(endNum) < parseInt(startNum)) {
    errorDisplay.innerHTML = `${startNum} is greater than ${endNum}. Please enter a valid range.`;
    return;
  }
};

let count = 0;
let updateCount;

document.getElementById("btn-count").onclick = () => {
  if (document.getElementById("btn-count").innerHTML == "Start") {
    document.getElementById("btn-count").innerHTML = "Stop";
    updateCount = setInterval(() => {
      count++;
      document.querySelector("#count-display").innerHTML = count;
    }, 100);
  } else if (document.getElementById("btn-count").innerHTML == "Stop") {
    document.getElementById("btn-count").innerHTML = "Start";
    clearInterval(updateCount);
  }
};

document.getElementById("reset-count").onclick = () => {
  count = 0;
  clearInterval(updateCount);
  document.querySelector("#count-display").innerHTML = "";
  document.getElementById("btn-count").innerHTML = "Start";
};

document.querySelector("#btn-legos").onclick = () => {
  /*
  for (let lego of legos) {
    console.log(lego);
  }
  */
  const ul = document.createElement("ul");
  document.getElementById("legos-list").append(ul);
  legos.forEach((lego, i) => {
    const li = document.createElement("li");
    ul.append(li);
    li.innerHTML = `${i + 1}. ${lego}`;
  });
};

document.getElementById("lego-description").onclick = () => {
  const legoHashMap = {};
  legoHashMap["1x1"] = "This is a 1x1 Lego Piece";
  legoHashMap["2x1"] = "This is a 2x1 Lego Piece";
  legoHashMap["3x1"] = "This is a 3x1 Lego Piece";
  legoHashMap["2x2"] = "This is a 2x2 Lego Piece";
  legoHashMap["3x2"] = "This is a 3x2 Lego Piece";
  legoHashMap["4x2"] = "This is a 4x2 Lego Piece";
  const section = document.getElementById("display-lego-desc");

  for (let lego in legoHashMap) {
    const p = document.createElement("p");
    section.append(p);
    p.innerHTML = `${lego}: ${legoHashMap[lego]}`;
    p.onclick = () => {};
  }
};

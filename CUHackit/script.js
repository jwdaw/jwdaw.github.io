document.getElementById("subscribe-button").onclick = () => {
  const email = document.getElementById("email").value;
  const messageElement = document.getElementById("message");

  if (!email) {
    messageElement.textContent = "Please enter your email.";
    return;
  }

  const apiUrl =
    "https://myzkba1pue.execute-api.us-east-1.amazonaws.com/dev/subscribe"; // Calls the API to subscribeL

  console.log("Fetching URL:", apiUrl); // For debugging

  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email }),
  })
    .then((response) => response.json())
    .then((data) => {
      messageElement.textContent = data.message;
    })
    .catch((error) => {
      messageElement.textContent = "An error occurred.";
      console.error("Error:", error);
    });
};

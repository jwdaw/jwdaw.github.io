document.getElementById("toggle-nav").onclick = () => {
  document.getElementById("nav-items").classList.toggle("hide-small");
};

const showEmailResult = async (e) => {
  e.preventDefault();
  const result = document.getElementById("contact-result");
  result.classList.remove("hidden"); // Make the result visible
  result.innerHTML = "Please wait...";

  let response = await getEmailResult();
  if (response && response.status == 200) {
    result.innerHTML = "Email Sent Successfully";
  } else {
    result.innerHTML = "Sorry, your email was not sent";
  }
};

const getEmailResult = async () => {
  const form = document.getElementById("contact-me");
  const formData = new FormData(form);
  const object = Object.fromEntries(formData); // Fixed fromEntries method name
  const json = JSON.stringify(object);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    return response;
  } catch (error) {
    console.log(error);
    const result = document.getElementById("contact-result");
    result.classList.remove("hidden");
    result.innerHTML = "Sorry your email couldn't be sent";
    return null;
  }
};

document.getElementById("contact-me").onsubmit = showEmailResult;

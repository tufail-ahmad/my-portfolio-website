/* darkMode Functionality */
let toggleBallDM = localStorage.getItem("toggleBallDM");
let darkMode = localStorage.getItem("darkmode");
const toggleBtn = document.querySelector("#checkbox");
const toggleBall = document.querySelector(".toggle-ball");

const enableDarkMode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
};

const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", null);
};

const enableToggleBallDM = () => {
  toggleBall.classList.add("js-toggle-ball");
  localStorage.setItem("toggleBallDM", "active");
};

const disableToggleBallDM = () => {
  toggleBall.classList.remove("js-toggle-ball");
  localStorage.setItem("toggleBallDM", null);
};

if (toggleBallDM == "active") enableToggleBallDM();
if (darkMode == "active") enableDarkMode();

toggleBtn.addEventListener("click", () => {
  if (toggleBtn.checked) {
    enableToggleBallDM();
    enableDarkMode();
  } else {
    disableToggleBallDM();
    disableDarkMode();
  }
});

// Page load hone par check karo ki checkbox ka state localStorage me hai ya nahi
window.onload = function () {
  // const checkbox = document.getElementById("#checkbox");
  const isChecked = localStorage.getItem("myCheckboxChecked");

  // Agar stored value "true" hai to checkbox ko checked karo
  toggleBtn.checked = isChecked === "true";

  // Jab checkbox change ho to uska state localStorage me store karo
  localStorage.setItem("myCheckboxChecked", toggleBtn.checked);
};

/* Calculator Functionality */
let input1 = document.querySelector(".display");
let input2 = document.querySelector(".display2");
let buttons = document.querySelectorAll(".btn");
let allClearBtn = document.querySelector("#all-clear");
let backspaceBtn = document.querySelector("#backspace-btn");
let displayValue = "";

let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
      displayValue = eval(displayValue);
      input1.value = displayValue;
      input2.value = "";
    } else {
      displayValue += e.target.innerHTML;
      input2.value = displayValue;
      input1.value = "";
    }
  });
});

allClearBtn.addEventListener("click", (e) => {
  displayValue = "";
  input1.value = displayValue;
  input2.value = displayValue;
});

backspaceBtn.addEventListener("click", (e) => {
  displayValue = displayValue.substring(0, displayValue.length - 1);
  input2.value = displayValue;
});

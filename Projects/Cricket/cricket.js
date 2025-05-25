/*==================== Score Functionality =====================*/
let scoreStr = localStorage.getItem("score");
let score;
reserScore(scoreStr);
function reserScore(scoreStr) {
  score = scoreStr
    ? JSON.parse(scoreStr)
    : {
        win: 0,
        lose: 0,
        tie: 0,
      };

  score.displayScore = () => {
    return `win: ${score.win}, lost: ${score.lose}, tie: ${score.tie}`;
  };
  showDisplayResult();
}

/*==================== Generate Computer Choice =====================*/
const generateComputerChoice = () => {
  let computerRandomChoice = Math.random() * 3;
  if (computerRandomChoice <= 1) {
    return "Bat";
  } else if (computerRandomChoice <= 2) {
    return "Ball";
  } else {
    return "Stump";
  }
};

/*==================== Generate Result Msg =====================*/
const generateResultMsg = (userMove, computerMove) => {
  if (userMove === "Bat") {
    if (computerMove == "Bat") {
      score.tie++;
      return "It's a tie";
    } else if (computerMove == "Ball") {
      score.win++;
      return "User has won";
    } else {
      score.lose++;
      return "Computer has won";
    }
  } else if (userMove === "Ball") {
    if (computerMove == "Ball") {
      score.tie++;
      return "It's a tie";
    } else if (computerMove == "Stump") {
      score.win++;
      return "User has won";
    } else {
      score.lose++;
      return "Computer has won";
    }
  } else if (userMove === "Stump") {
    if (computerMove == "Stump") {
      score.tie++;
      return "It's a tie";
    } else if (computerMove == "Bat") {
      score.win++;
      return "User has won";
    } else {
      score.lose++;
      return "Computer has won";
    }
  }
};

/*==================== Show Display Result =====================*/
function showDisplayResult(userMove, computerMove, resultMsg) {
  localStorage.setItem("score", JSON.stringify(score));

  document.querySelector("#user-move").innerText = userMove
    ? `You have chosen ${userMove}`
    : "";

  document.querySelector("#computer-move").innerText = computerMove
    ? `Computer Choice is ${computerMove}`
    : "";

  document.querySelector("#result-msg").innerText = resultMsg || "";

  document.querySelector("#score").innerText = score.displayScore();
}

/*==================== Bat Button Functionality =====================*/
const batBtn = document.querySelector("#bat-btn");

batBtn.addEventListener("click", () => {
  let computerMove = generateComputerChoice();
  let resultMsg = generateResultMsg("Bat", computerMove);
  showDisplayResult("Bat", computerMove, resultMsg);
});

/*==================== Ball Button Functionality =====================*/
const ballBtn = document.querySelector("#ball-btn");

ballBtn.addEventListener("click", () => {
  computerMove = generateComputerChoice();
  let resultMsg = generateResultMsg("Ball", computerMove);
  showDisplayResult("Ball", computerMove, resultMsg);
});

/*==================== Stump Button Functionality =====================*/
const stumpBtn = document.querySelector("#stump-btn");

stumpBtn.addEventListener("click", () => {
  computerMove = generateComputerChoice();
  let resultMsg = generateResultMsg("Stump", computerMove);
  showDisplayResult("Stump", computerMove, resultMsg);
});

/*==================== Reset Button Functionality =====================*/
let resetBtn = document.querySelector("#reset-btn");

resetBtn.addEventListener("click", () => {
  reserScore();
});

/*==================== Dark Mode Functionality =====================*/
let darkMode = localStorage.getItem("darkMode");
const toggleBtn = document.querySelector("#toggle-btn");

const enableDarkMode = () => {
  document.body.classList.add("darkMode");
  localStorage.setItem("darkMode", "active");
};

const disableDarkMode = () => {
  document.body.classList.remove("darkMode");
  localStorage.setItem("darkMode", null);
};

if (darkMode == "active") enableDarkMode();

toggleBtn.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  darkMode !== "active" ? enableDarkMode() : disableDarkMode();
});

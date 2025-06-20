/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let displayText = "";
/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll(".button");
const calculator = document.querySelector("#calculator");
const display = document.querySelector(".display");
/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.classList.contains("number")) {
      displayText += event.target.textContent;
      display.textContent = displayText;
    }
    if (event.target.classList.contains("operator")) {
      let operator = event.target.textContent;
      if (operator === "C") {
        clearDisplay();
      } else {
        displayText += " " + operator + " ";
        display.textContent = displayText;
      }
    }
    if (event.target.classList.contains("equals")) {
      console.log("Click");
      evaluateEquation();
    }
  });
});

/*-------------------------------- Functions --------------------------------*/
const clearDisplay = () => {
  displayText = "";
  display.textContent = displayText;
};

const evaluateEquation = () => {
  displayText = eval(displayText);
  display.textContent = displayText;
  displayText = "";
};

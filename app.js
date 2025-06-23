/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let displayText = [];
/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll(".button");
const calculator = document.querySelector("#calculator");
const display = document.querySelector(".display");

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.classList.contains("number")) {
      displayText.push(event.target.textContent);
      display.textContent = displayText.join(" ");
    }
    if (event.target.classList.contains("operator")) {
      let operator = event.target.textContent;
      if (operator === "C") {
        clearDisplay();
      } else {
        displayText.push(event.target.textContent);
        display.textContent = displayText.join(" ");
      }
    }
    if (event.target.classList.contains("equals")) {
      evaluateEquation();
    }
  });
});

/*-------------------------------- Functions --------------------------------*/
const clearDisplay = () => {
  displayText = [];
  display.textContent = displayText.join(" ");
};

const evaluateEquation = () => {
  try {
    //This utilizes the math.evaluate() method from MathJs library.
    //https://mathjs.org/docs/expressions/parsing.html
    const result = math.evaluate(displayText.join(""));
    display.textContent = result;
    displayText = "";
  } catch (error) {
    display.textContent = "Error";
    console.error(error);
    displayText = "";
  }
};

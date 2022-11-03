let resultScreen = document.querySelector(".input-screen");
let inputs = document.querySelectorAll("button");
let preOp = "";
let curVal = "";
let equation = "";
let result = "";
let preval = "";

function checkInput(input) {
  curVal = input.innerHTML;
  if (!isNaN(curVal) && preOp !== "=") addinput(curVal);
  else checkOperator(curVal);
}

function displayEquation(equation) {
  resultScreen.innerHTML = equation;
}

function addinput(curVal) {
  equation += curVal;
  displayEquation(equation);
}

function displayResult(equation) {
  result = eval(equation);
  equation = "";
  equation = result;
  displayEquation(result);
  curVal = result;
  preOp = "=";
}

function reset() {
  equation = "";
  result = "";
  preOp = "";
  curVal = "";
  displayEquation(equation);
}
function addOperator() {
  addinput(curVal);
  preOp = curVal;
}

function checkOperator(curVal) {
  preval = equation.slice(-1);
  switch (curVal) {
    case "c": {
      reset();
      break;
    }
    case "+":
    case "*":
    case "/": {
      if (!isNaN(preval) && equation !== "") addOperator();

      break;
    }
    case "=": {
      if (!isNaN(preval) && equation !== "") displayResult(equation);
      break;
    }

    case ".": {
      if (preOp !== "." && preOp !== "=") addOperator();
      break;
    }
    case "-": {
      if (preval !== "-") {
        addOperator();
        break;
      }
    }
  }
}

inputs.forEach(function (input) {
  input.addEventListener("click", function (event) {
    checkInput(event.target);
    inputs.forEach((input) => input.classList.remove("active"));
    this.classList.add("active");
  });
});

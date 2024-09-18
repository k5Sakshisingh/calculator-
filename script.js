const display = document.querySelector("#display");
const keys = document.querySelector(".calculator-keys");

keys.addEventListener("click", function (event) {
  const { target } = event;
  const value = target.value;
  if (!target.matches("button")) {
    return;
  }

  switch (value) {
    case "=":
      try {
        display.value = eval(display.value);
      } catch (error) {
        display.value = "Error";
      }
      break;
    case "clear":
      display.value = "";
      break;
    default:
      display.value += value;
      break;
  }
});

// Your code here
const dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#000000";

dodger.style.backgroundColor = "#FF69B4";

dodger.style.bottom = "100px";

dodger.style.bottom = "0px";

dodger.style.left = "0px";

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
};

function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);
  const maxWidth = 360;

  if (left < maxWidth) {
    dodger.style.left = `${left + 1}px`;
  }
}
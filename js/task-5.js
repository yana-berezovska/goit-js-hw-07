function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btn = document.querySelector(".change-color");
btn.addEventListener("click", changeColor);
function changeColor() {
  const span = document.querySelector(".color");
  const color = getRandomHexColor();
  span.style.backgroundColor = color;
  document.body.style.backgroundColor = color;
}

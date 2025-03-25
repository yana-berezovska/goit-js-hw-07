const inputText = document.querySelector("#name-input");
const spanText = document.querySelector("#name-output");
inputText.addEventListener("input", handlInput);
function handlInput(event) {
  console.log(event.target.value);
  const nameUser = event.target.value.trim();
  if (nameUser === "") {
    spanText.textContent = "Anonymous";
  } else {
    spanText.textContent = nameUser;
  }
}

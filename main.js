const checkbox = document.getElementById("checkbox");
const submitBtn = document.querySelector("button[type=submit]");

// disable checkbox
checkbox.disabled = true;
submitBtn.disabled = true;

const elements = document.querySelectorAll(".element");
const selectColor = document.getElementById("SelectColor");
// selectColor = document.getElementById("#SelectColor");

// Assign color to Elements
elements.forEach(function (element) {
  const color = getRandomColor();

  element.style.backgroundColor = color;
  element.innerHTML = color;
  selectColor.innerHTML = color;
});
// Generate random color Func
function getRandomColor() {
  const letter = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letter[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Check if right color

elements.forEach(function (element) {
  element.addEventListener("click", function () {
    if (element.innerHTML === selectColor.innerHTML) {
      alert("You are human!");
      checkbox.checked = true;
      alert("you are human!");
      submitBtn.disabled = false;
      submitBtn.classList.remove("btn-light");
      submitBtn.classList.add("btn-success");
    } else {
      alert("Please verify that you are Human!");
      location.reload(true);
    }
  });
});

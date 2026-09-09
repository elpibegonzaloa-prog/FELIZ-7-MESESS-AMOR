const startImage = document.getElementById("startImage");

const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");

startImage.addEventListener("click", () => {
  screen1.classList.add("hidden");
  screen2.classList.remove("hidden");
});

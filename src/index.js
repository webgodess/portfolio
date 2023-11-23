const hamburgerButton = document.getElementById("burger-menu-button");
const hiddenLinks = document.getElementById("mobile-ul");
const heroText = document.getElementsByClassName("hero-text")[0];

const displayToggle = () => {
  hamburgerButton.classList.toggle("change");
  hiddenLinks.classList.toggle("hidden");
  heroText.classList.toggle("hidden");
};

hamburgerButton.addEventListener("click", () => {
  displayToggle();
});

hiddenLinks.addEventListener("click", () => {
  displayToggle();
});

const closeNavigationButton = document.getElementById("close-button");
const navigationToggler = document.getElementById("navigation-toggler");
const navigationOverlay = document.getElementById("main-page-navigation");

function openNavigation() {
  navigationOverlay?.classList.remove("hidden");
  navigationOverlay?.classList.add("flex");
}

function closeNavigation() {
  navigationOverlay?.classList.remove("flex");
  navigationOverlay?.classList.add("hidden");
}

navigationToggler?.addEventListener("click", openNavigation);

closeNavigationButton?.addEventListener("click", closeNavigation);

document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    !navigationOverlay?.classList.contains("hidden")
  ) {
    closeNavigation();
  }
});

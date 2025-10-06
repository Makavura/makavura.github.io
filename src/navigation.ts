const closeNavigationButton = document.getElementById("close-button");
const navigationToggler = document.getElementById("navigation-toggler");
const navigationOverlay = document.getElementById("main-page-navigation");


function openNavigation() {
    console.log('open navigation');
  navigationOverlay?.classList.remove("hidden");
}

function closeNavigation() {
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

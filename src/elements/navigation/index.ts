class Navigation extends HTMLElement {
  showNavigation = true;

  constructor(showNavigation) {
    super();

    this.showNavigation = showNavigation;
    if (window.location.pathname.includes("index.html")) {
      this.showNavigation = false;
    } else {
      this.showNavigation = true;
    }
  }

  connectedCallback() {
    this.innerHTML = `
${
  this.showNavigation
    ? `
<div class="grid grid-cols-4 px-14 py-4 gap-4 h-24  mb-4">
    <navigation-element bannerPath="About" svgIcon="./assets/svg/hi.svg"></navigation-element>
        <navigation-element bannerPath="Experience" svgIcon="./assets/svg/curious.svg"></navigation-element>
            <navigation-element bannerPath="Education" svgIcon="./assets/svg/read.svg"></navigation-element>
                <navigation-element bannerPath="Projects" svgIcon="./assets/svg/projects.svg"></navigation-element>
</div>
`
    : null
}
`;
  }
}

customElements.define("navigation-stack", Navigation);

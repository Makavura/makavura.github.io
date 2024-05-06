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

    this.onclick = this.handleClick.bind(this);
  }

  connectedCallback() {
    this.innerHTML = `
${
  this.showNavigation
    ? `<div class="flex flex-row w-full px-4 justify-between pt-2">
          <img 
          id="index"
          alt="Portfolio Home"
          src="./assets/svg/browser_icon_1.svg" class="rounded-md h-14 drop-shadow-xl shadow-2xl hover:cursor-pointer hover:scale-150" />
          <div class="grid grid-cols-4 px-14 py-4 gap-4 h-24  mb-4">
              <navigation-element bannerPath="About" svgIcon="./assets/svg/hi.svg"></navigation-element>
                  <navigation-element bannerPath="Experience" svgIcon="./assets/svg/curious.svg"></navigation-element>
                      <navigation-element bannerPath="Education" svgIcon="./assets/svg/read.svg"></navigation-element>
                          <navigation-element bannerPath="Projects" svgIcon="./assets/svg/projects.svg"></navigation-element>
          </div>
          <img 
          id="contact"
          alt="Contact Makavura"
          src="./assets/svg/Asset 5.svg" class="rounded-md h-14 drop-shadow-xl shadow-2xl hover:cursor-pointer hover:scale-150"    
          /> 
        </div>
`
    : null
}
`;
  }

  handleClick(event: PointerEvent) {
    if (event.target instanceof Element) {
      const id = event.target.id;
      if (id === "index" || id === "contact") {
        const targetPath = id;
        window.location.replace(targetPath + ".html");
      }
    }
  }
}

customElements.define("navigation-stack", Navigation);

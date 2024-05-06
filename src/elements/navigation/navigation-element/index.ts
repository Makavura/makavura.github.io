class NavigationElement extends HTMLElement {
  static observedAttributes = ["bannerPath", "svgIcon"];
  activeElement = false;

  constructor(activeElement) {
    super();

    this.onmouseover = this.onHover;
    this.onmouseleave = this.onHoverOut;
    this.onclick = this.handleBannerClick.bind(this);

    this.activeElement = activeElement;
    this.activeElement = window.location.pathname.includes(
      this.getAttribute("bannerPath").toLowerCase()
    );
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="px-1 pt-1 pb-4 bg-[#233DFF] rounded-md">
        <div class="drop-shadow-xl shadow-2xl  rounded-md flex flex-row-reverse  justify-end
                    ${this.activeElement ? "bg-none" : "bg-white"} 
        ">  
            <p class="aloja hidden lg:inline  text-4xl justify-self-end  self-start ml-4 mt-4 z-10 drop-shadow-xl
            ${this.activeElement ? "text-white underline" : "text-slate-500"} 
            ">
                ${this.getAttribute("bannerPath")}
            </p>
            <img src="${this.getAttribute(
              "svgIcon"
            )}" class="rounded-md h-14 drop-shadow-xl shadow-2xl" />
        </div>
    </div>
    `;
  }

  handleBannerClick(event: PointerEvent) {
    const url = this.getAttribute("bannerPath").toLowerCase();
    window.location.assign(url + ".html");
  }

  onHover() {
    this.style.zIndex = "100";
    this.style.transform = "scale(1.2)";
  }

  onHoverOut() {
    this.style.zIndex = "10";
    this.style.transform = "scale(1.0)";
  }
}

customElements.define("navigation-element", NavigationElement);

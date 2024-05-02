class BannerLink extends HTMLElement {
  static observedAttributes = ["bannerPath", "svgIcon"];

  constructor() {
    super();
  };

  connectedCallback() {
    this.innerHTML = `<div class="px-1 pt-1 pb-4 bg-[#233DFF] rounded-md ">
                <div class="drop-shadow-xl shadow-2xl  bg-white rounded-md flex flex-row-reverse  justify-end">
                    <div class="grid grid-rows-2 w-full">
                        <p class="aloja text-slate-500 text-4xl justify-self-end  self-start -ml-24 mt-4 inline z-10 drop-shadow-xl">
                        ${this.getAttribute(
                          "bannerPath"
                        )}
                        </p>
                        <svg class="text-slate-700 justify-self-end self-end p-2" viewBox="0 0 16 16" height="4em" width="4em" {...props}>
                            <path
                                d="M14 0a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2h12zM5.904 10.803L10 6.707v2.768a.5.5 0 001 0V5.5a.5.5 0 00-.5-.5H6.525a.5.5 0 100 1h2.768l-4.096 4.096a.5.5 0 00.707.707z" />
                        </svg>
                    </div>
                    ${
                      this.hasAttribute("svgIcon")
                        ? `<img src="${this.getAttribute(
                            "svgIcon"
                          )}" class="rounded-md h-48 drop-shadow-xl shadow-2xl" />`
                        : null
                    }
                </div>
            </div>`;
  };
};

customElements.define("banner-link", BannerLink);

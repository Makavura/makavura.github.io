class BannerLink extends HTMLElement {
  static observedAttributes = ["bannerPath", "svgIcon"];

  constructor() {
    super();
  };

  connectedCallback() {
    this.innerHTML = `<div class="px-1 py-1 bg-[#233DFF] rounded-md ">
                <div class="drop-shadow-xl shadow-2xl  bg-white  p-2 rounded-md flex flex-row-reverse justify-between ">
                    <div class="grid grid-cols-2 items-center place-content-between">
                        <p class="aloja text-slate-400 text-2xl inline">
                        ${this.getAttribute(
                          "bannerPath"
                        )}
                        </p>
                        <svg class="text-slate-700 place-self-end self-center" viewBox="0 0 16 16" height="1.5em" width="1.5em" {...props}>
                            <path
                                d="M14 0a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2h12zM5.904 10.803L10 6.707v2.768a.5.5 0 001 0V5.5a.5.5 0 00-.5-.5H6.525a.5.5 0 100 1h2.768l-4.096 4.096a.5.5 0 00.707.707z" />
                        </svg>
                    </div>
                    ${
                      this.hasAttribute("svgIcon")
                        ? `<img src="${this.getAttribute(
                            "svgIcon"
                          )}" class="rounded-md h-48 drop-shadow-xl shadow-2xl mt-4" />`
                        : null
                    }
                </div>
            </div>`;
  };
};

customElements.define("banner-link", BannerLink);

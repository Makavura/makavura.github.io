(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const a="theme",l=t=>{const n=`<svg 
                id="sun" 
                width="24" height="24" viewBox="0 0 33 33" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M18 22.5C19.25 22.5 20.3125 22.0625 21.1875 21.1875C22.0625 20.3125 
                    22.5 19.25 22.5 18C22.5 16.75 22.0625 15.6875 21.1875 14.8125C20.3125 
                    13.9375 19.25 13.5 18 13.5C16.75 13.5 15.6875 13.9375 14.8125 14.8125C13.9375 
                    15.6875 13.5 16.75 13.5 18C13.5 19.25 13.9375 20.3125 14.8125 
                    21.1875C15.6875 22.0625 16.75 22.5 18 22.5ZM18 25.5C15.925 25.5 14.1562 24.7687 
                    12.6937 23.3062C11.2312 21.8437 10.5 20.075 10.5 18C10.5 15.925 11.2312 14.1562 
                    12.6937 12.6937C14.1562 11.2312 15.925 10.5 18 10.5C20.075 10.5 21.8437 11.2312 
                    23.3062 12.6937C24.7687 14.1562 25.5 15.925 25.5 18C25.5 20.075 24.7687 21.8437 
                    23.3062 23.3062C21.8437 24.7687 20.075 25.5 18 25.5ZM7.5 19.5H1.5V16.5H7.5V19.5ZM34.5 
                    19.5H28.5V16.5H34.5V19.5ZM16.5 7.5V1.5H19.5V7.5H16.5ZM16.5 
                    34.5V28.5H19.5V34.5H16.5ZM9.6 11.625L5.8125 7.9875L7.95 5.775L11.55 
                    9.525L9.6 11.625ZM28.05 30.225L24.4125 26.4375L26.4 24.375L30.1875 28.0125L28.05 
                    30.225ZM24.375 9.6L28.0125 5.8125L30.225 7.95L26.475 11.55L24.375 9.6ZM5.775 
                    28.05L9.5625 24.4125L11.625 26.4L7.9875 30.1875L5.775 28.05Z"
                    fill="white" />
            </svg>
            `,i=`<svg 
        id="moon" 
        class="" 
        width="24" height="24" viewBox="0 0 33 33" fill="none"
        xmlns="http://www.w3.org/2000/svg">
            <path d="M14 0C6.26889 0 0 6.26889 0 14C0 21.7311 6.26889 28 14 28C21.7311 28 28 21.7311 28 14C28 13.2844 
                27.9378 12.5689 27.8444 11.8844C26.32 14.0156 23.8311 15.4 21 15.4C16.3644 15.4 12.6 11.6356 12.6 
                7C12.6 4.18444 13.9844 1.68 16.1156 0.155555C15.4311 0.0622221 14.7156 0 14 0Z" fill="#051923" />
    </svg>
    `,s=document.getElementById("theme-toggler"),e=document.body;t==="dark"?(e.classList.add("dark"),s.innerHTML=n):(e.classList.remove("dark"),s.innerHTML=i),localStorage.setItem(a,t)},g=()=>{let t;const n=localStorage.getItem(a);n==="dark"||n==="light"?t=n:(t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",localStorage.setItem(a,t)),l(t)};document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("theme-toggler");g(),t&&t.addEventListener("click",n=>{const s=n.target.closest("#sun, #moon")?.getAttribute("id");s==="moon"?l("dark"):s==="sun"&&l("light")})});const m=document.getElementById("navigation-close-button"),r=document.getElementById("main-page-navigation"),u=document.getElementById("navigation-toggler");function f(){r?.classList.remove("hidden"),r?.classList.add("flex")}function d(){r?.classList.remove("flex"),r?.classList.add("hidden")}u?.addEventListener("click",f);m?.addEventListener("click",d);document.addEventListener("keydown",t=>{t.key==="Escape"&&!r?.classList.contains("hidden")&&d()});

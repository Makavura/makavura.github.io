// @ts-ignore
// initial checker to avoid FOUC
if (userTheme == 'dark' || window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // @ts-ignore
    setUserTheme(userTheme);
    // @ts-ignore
    setDarkMode();
}
else {
    // @ts-ignore
    userTheme = 'light';
    // @ts-ignore
    setUserTheme(userTheme);
    // @ts-ignore
    setLightMode();
}
;
// Global user settings change
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    // @ts-ignore
    userTheme = event.matches ? "dark" : "light";
    // @ts-ignore
    setUserTheme(userTheme);
});

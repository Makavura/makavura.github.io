let themeToggler = document.getElementById("theme-toggler");
let togglerIcon = document.getElementById("toggler-icon");
themeToggler.addEventListener("click", (event) => {
    event.preventDefault();
    let newSVGPathDContent = document.createAttribute('d');
    // @ts-ignore
    if (togglerIcon.children.item('path').attributes.getNamedItem('d').value == lightSVGPathDContent) {
        // @ts-ignore
        togglerIcon.children.item('path').attributes.removeNamedItem('d');
        // @ts-ignore
        newSVGPathDContent.value = darkSVGPathDContent;
        // @ts-ignore
        togglerIcon.children.item('path').setAttribute('d', newSVGPathDContent.value);
        // @ts-ignore
        setUserTheme('dark');
        // @ts-ignore
        // @ts-ignore
    }
    else if (togglerIcon.children.item('path').attributes.getNamedItem('d').value == darkSVGPathDContent) {
        // @ts-ignore
        togglerIcon.children.item('path').attributes.removeNamedItem('d');
        // @ts-ignore
        newSVGPathDContent.value = lightSVGPathDContent;
        // @ts-ignore
        togglerIcon.children.item('path').setAttribute('d', newSVGPathDContent.value);
        // @ts-ignore
        setUserTheme('light');
    }
    ;
});

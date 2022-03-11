let themeToggler = document.getElementById("theme-toggler");
let togglerIcon = document.getElementById("toggler-icon");
themeToggler.addEventListener("click", (event: MouseEvent) => {
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
    } else if (togglerIcon.children.item('path').attributes.getNamedItem('d').value == darkSVGPathDContent) {
        // @ts-ignore
        togglerIcon.children.item('path').attributes.removeNamedItem('d');
        // @ts-ignore
        newSVGPathDContent.value = lightSVGPathDContent;
        // @ts-ignore
        togglerIcon.children.item('path').setAttribute('d', newSVGPathDContent.value);
        // @ts-ignore
        setUserTheme('light');
    };
});


function switchTab(category) {
    // @ts-ignore
    if (document.getElementsByClassName('active-content').item('div')) {
        // @ts-ignore
        document.getElementsByClassName('active-content').item('div').style.display = 'none';
        // @ts-ignore
        document.getElementsByClassName('active-content').item('div').classList.remove('active-content');
    };
    switch (category) {
        case 'about':
            renderActiveContent('about');
            break;
        case 'experience':
            renderActiveContent('experience');
            break;
        case 'projects':
            renderActiveContent('projects');
            break;
        case 'contact':
            renderActiveContent('contact');
            break;
        default:
            break;
    };
};

const renderActiveContent = (category) => {
    document.getElementById(`${category}`).style.display = 'block';
    document.getElementById(`${category}`).classList.add('active-content');
};
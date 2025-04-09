function changeHeaderBackground(color) {
    document.querySelector("header").style.backgroundColor = color;
}

function changeHeaderFontColor(color) {
    document.querySelector("header").style.color = color;
}

function changeHeaderFontSize(size) {
    document.querySelector("header").style.fontSize = size + "px";
}

function changeSidebarBackground(color) {
    document.querySelector("nav").style.backgroundColor = color;
}

function changeSidebarFontColor(color) {
    document.querySelectorAll("nav a").forEach(a => {
        a.style.color = color;
    });
}

function changeSidebarFontSize(size) {
    document.querySelectorAll("nav a").forEach(a => {
        a.style.fontSize = size + "px";
    });
}

const savedStylesheet = localStorage.getItem("stylesheet");

if (savedStylesheet) {
    document.getElementById("pagestyle").setAttribute("href", savedStylesheet);
}

function changeTheme() {
    const cssLink = document.getElementById("pagestyle");
    const newStylesheet = cssLink.getAttribute("href") === "style/style.css"
        ? "style/style2.css"
        : "style/style.css";

    cssLink.setAttribute("href", newStylesheet);
    localStorage.setItem("stylesheet", newStylesheet);
}

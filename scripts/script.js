const feuilleSauvegardee = localStorage.getItem("stylesheet");

if (feuilleSauvegardee) {
    document.getElementById("pagestyle").setAttribute("href", feuilleSauvegardee);
}

function changerTheme() {
    const lienCss = document.getElementById("pagestyle");
    const nouvelleFeuille = lienCss.getAttribute("href") === "/style/style.css"
        ? "/style/style2.css"
        : "/style/style.css";

    lienCss.setAttribute("href", nouvelleFeuille);
    localStorage.setItem("stylesheet", nouvelleFeuille);
}

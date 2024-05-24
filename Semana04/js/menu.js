const menu = [
    "Inicio",
    "Nosotros",
    "Galeria",
    "Intranet"
]

var contentMenu = document.getElementById("content_menu");
var informacion = "";
for (let index = 0; index < menu.length; index++) {
    const currentURL = window.location.href;

    if (currentURL.includes('Ejercicio')) {
        if (menu[index] == "Inicio") {
            informacion += "<a href='/Semana04/Ejercicio01.html'>" + menu[index] + "</a>";
        }
        else {
            informacion += "<a href='./views/" + menu[index] + ".html'>" + menu[index] + "</a>";
        }
    } else {
        if (!currentURL.includes('Ejercicio')) {
            if (menu[index] == "Inicio") {
                informacion += "<a href='/Semana04/Ejercicio01.html'>" + menu[index] + "</a>";
            } else {
                informacion += "<a href='./" + menu[index] + ".html'>" + menu[index] + "</a>";
            }
        }
    }

}

contentMenu.innerHTML = informacion;


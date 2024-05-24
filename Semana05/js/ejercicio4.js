class MiPagina {
    Header() {
        var html = "<link rel='stylesheet' href='./css/style.css'>";
        html += "<div id='content_menu'>";
        html += "<ul id='menu'>";
        html += "<li><a class='item'  onclick='CambiarDatos(\"Inicio\")'>Inicio</a></li>";
        html += "<li><a class='item'  onclick='CambiarDatos(\"Nosotros\")'>Nosotros</a></li>";
        html += "<li><a class='item'  onclick='CambiarDatos(\"Contacto\")'>Contacto</a></li>";
        html += "</ul>";
        html += "</div>";
        document.write(html);
    }

    Contenido() {
        var html = "";
        html += "<div>Contenido </div>";
        document.write(html);
    }

    Contenido_Nosotros() {
        var html = "";
        html += "<div>Contenido Nosotros </div>";
        document.write(html);
    }

    Contenido_Contacto() {
        var html = "";
        html += "<div>Contenido Contacto </div>";
        document.write(html);
    }

    Footer() {
        var html = "";
        html += "<Footer> Pie de página</Footer>";
        document.write(html);
    }
}

let objPagina = new MiPagina();
objPagina.Header();
objPagina.Contenido();
objPagina.Footer();

function CambiarDatos(valor) {
    document.getElementById("cuerpo").innerHTML = "";
    let objPagina = new MiPagina();

    switch (valor) {
        case "Inicio":
            objPagina.Header();
            objPagina.Contenido();
            objPagina.Footer();
            break;
        case "Nosotros":
            objPagina.Header();
            objPagina.Contenido_Nosotros();
            objPagina.Footer();
            break;
        case "Contacto":
            objPagina.Header();
            objPagina.Contenido_Contacto();
            objPagina.Footer();

            break;

        default:
            break;
    }
}
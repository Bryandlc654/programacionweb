class Operaciones {
    Sumar(n1, n2) {
        return n1 + n2;
    }

    Restar(n1, n2) {
        return n1 - n2;
    }

    Multiplicar(n1, n2) {
        return n1 * n2;
    }

    Dividir(n1, n2) {
        return n1 / n2;
    }
}

function Ejecutar(opcion) {
    var n1 = parseFloat(document.getElementById("txt_n1").value);
    var n2 = parseFloat(document.getElementById("txt_n2").value);
    var r = 0;

    let objOperacion = new Operaciones();

    switch (opcion) {
        case 1:
            r = objOperacion.Sumar(n1, n2);
            document.getElementById("txt_r").value = r;
            break;
        case 2:
            r = objOperacion.Restar(n1, n2);
            document.getElementById("txt_r").value = r;
            break;
        case 3:
            r = objOperacion.Multiplicar(n1, n2);
            document.getElementById("txt_r").value = r;
            break;
        case 4:
            r = objOperacion.Dividir(n1, n2);
            document.getElementById("txt_r").value = r;
            break;

        default:
            break;
    }
}
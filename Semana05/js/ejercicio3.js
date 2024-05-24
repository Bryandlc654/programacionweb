class Calcular {
    Calcular(n1, n2) {
        return n1 * n2;
    }
}

function Ejecutar() {
    var n1 = parseFloat(document.getElementById("txt_n2").value);
    var n2 = parseFloat(document.getElementById("txt_n3").value);
    var r = 0;

    let objCalcular = new Calcular();


    r = objCalcular.Calcular(n1, n2);
    document.getElementById("txt_r").value = r;

}
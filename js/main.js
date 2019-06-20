function escribirEdadActual() {
    var fecha = new Date();
    var fechaActual = parseInt(fecha.getFullYear());
    var edadActual = fechaActual - 1999;
    if ((fecha.getMonth() + 1) < 2) {
        edadActual--;
    }
    document.getElementById('edadActual').innerHTML = edadActual + " años";
}
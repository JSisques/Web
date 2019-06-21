function openNav() {
    //Podemos modificar las propiedades del elemento de esta forma
    var menu = document.getElementById("mobileMenu");
    menu.style.width = "100%";
    menu.style.backgroundColor = "rgb(38,38,38,0.9)";
    //Escondemos el boton hamburguesa al abrir el menu
}

function closeNav() {
    document.getElementById("mobileMenu").style.width = "0";
}

function escribirEdadActual() {
    var fecha = new Date();
    var fechaActual = parseInt(fecha.getFullYear());
    var edadActual = fechaActual - 1999;
    if ((fecha.getMonth() + 1) < 2) {
        edadActual--;
    }
    document.getElementById('edadActual').innerHTML = edadActual + " años";
}
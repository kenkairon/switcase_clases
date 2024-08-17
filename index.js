do {
    let menu = prompt("Necesidades \n 1-Alimentación \n 2-Gastos Básicos \n 3-Salud \n 4-Entretenimiento \n 5-Salir");

    switch (menu) {
        case '1':
            opcion1();   
            break;
        case '2':
            alert("Has seleccionado Gastos Básicos");
            break;
        case '3':
            alert("Has seleccionado Salud");
            break;
        case '4':
            alert("Has seleccionado Entretenimiento");
            break;
        case '5':
            alert("Saliendo del menú...");
            break;
        default:
            alert("Opción no válida. Por favor, selecciona un número entre 1 y 5.");
            break;
    }
} while (menu !== '5');

function opcion1() {
    let alimentacion = parseInt(prompt("¿Qué tipo de alimento deseas? \n 1-Carne \n 2-Vegano \n 3-Vegetariano"));
    
    switch (alimentacion) {
        case 1:
            alert("Has seleccionado Carne");
            break;
        case 2:
            alert("Has seleccionado Vegano");
            break;
        case 3:
            alert("Has seleccionado Vegetariano");
            break;
        default:
            alert("Opción no válida. Por favor, selecciona un número entre 1 y 3.");
            break;
    }
}

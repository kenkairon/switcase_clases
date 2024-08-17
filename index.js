function programa() {
    let menu;
    do {
        menu = prompt("Necesidades \n 1-Alimentación \n 2-Gastos Básicos \n 3-Salud \n 4-Entretenimiento \n 5-Salir");

        switch (menu) {
            case '1':
                opcion1();
                break;
            case '2':
                opcion2();
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
}

// Inicializa el programa
programa();

function opcion1() {
    let alimentacion = prompt("¿Qué tipo de alimento deseas? \n 1-Carne \n 2-Vegano \n 3-Vegetariano");

    switch (alimentacion) {
        case '1':
            alert("Has seleccionado Carne");
            break;
        case '2':
            alert("Has seleccionado Vegano");
            break;
        case '3':
            alert("Has seleccionado Vegetariano");
            break;
        default:
            alert("Opción no válida. Por favor, selecciona un número entre 1 y 3.");
            break;
    }
}

function opcion2() {
    let luz = 0, gas = 0, agua = 0;
    let gastosBasicos;

    do {
        gastosBasicos = prompt("¿Indica los Gastos que tienes? \n 1-Luz \n 2-Gas \n 3-Agua \n 4-Total");

        if (gastosBasicos === '1') {
            luz = parseInt(prompt("Ingresa el valor de la luz"), 10);
            alert("El valor de la luz es: " + luz);
        } else if (gastosBasicos === '2') {
            gas = parseInt(prompt("Ingresa el valor del gas"), 10);
            alert("El valor del gas es: " + gas);
        } else if (gastosBasicos === '3') {
            agua = parseInt(prompt("Ingresa el valor del agua"), 10);
            alert("El valor del agua es: " + agua);
        } else if (gastosBasicos === '4') {
            let total = luz + gas + agua;
            alert("El valor total es: " + total);
            mensajes();            
        } else {
            alert("Opción no válida. Por favor, selecciona un número entre 1 y 4.");
        }
    } while (gastosBasicos !== '4');
}

function mensajes() {
    let inicio = prompt("¿Qué deseas hacer? \n 1-Volver al menú de Gastos \n 2-Volver a Menú Principal");
    switch (inicio) {
        case '1':
            opcion2();
            break;  // Agregado break para evitar caer en el siguiente case
        case '2':
            programa();
            break;  // Agregado break para evitar caer en el default
        default:
            alert("No has seleccionado ninguna opción válida");
            mensajes();  // Llamada recursiva para volver a pedir la opción
            break;
    }
}

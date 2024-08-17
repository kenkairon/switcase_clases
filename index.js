function programa() {
    let menu;
    let continuar = true; // Variable para controlar la ejecución del bucle

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
                continuar = false; // Cambia la variable para salir del bucle
                break;
            default:
                alert("Opción no válida. Por favor, selecciona un número entre 1 y 5.");
                break;
        }
    } while (continuar);
}

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
    let luz = 0, gas = 0, agua = 0, otrosGastos = 0;
    let gastosBasicos;

    do {
        gastosBasicos = prompt("Indica los Gastos que tienes: \n 1-Luz \n 2-Agua \n 3-Gas \n 4-Otros Gastos \n 5-Total \n 6-Menú Principal");

        switch (gastosBasicos) {
            case '1':
                luz = parseInt(prompt("Ingresa el valor de la luz"), 10);
                alert("El valor de la luz es: " + luz);
                break;
            case '2':
                agua = parseInt(prompt("Ingresa el valor del agua"), 10);
                alert("El valor del agua es: " + agua);
                break;
            case '3':
                gas = parseInt(prompt("Ingresa el valor del gas"), 10);
                alert("El valor del gas es: " + gas);
                break;
            case '4':
                otrosGastos = parseInt(prompt("Ingresa el valor de otros gastos"), 10);
                alert("El valor de otros gastos es: " + otrosGastos);
                break;
            case '5':
                let total = luz + gas + agua + otrosGastos;
                alert("El valor total es: " + total);
                mensajes(); // Redirige a mensajes
                return; // Salir de la función para evitar el bucle adicional
            case '6':
                return; // Volver al menú principal
            default:
                alert("Opción no válida. Por favor, selecciona un número entre 1 y 6.");
                break;
        }
    } while (true); // Bucle infinito hasta que se selecciona una opción válida para salir
}

function mensajes() {
    let inicio = prompt("¿Qué deseas hacer? \n 1-Volver al menú de Gastos \n 2-Volver al Menú Principal");
    switch (inicio) {
        case '1':
            opcion2();
            break;
        case '2':
            return; // Salir de la función mensajes para volver al menú principal
        default:
            alert("No has seleccionado ninguna opción válida.");
            mensajes(); // Llamada recursiva para volver a pedir la opción
            break;
    }
}

// Inicializa el programa
programa();

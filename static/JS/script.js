/*1. Módulo de Tesorería: Pago de Permisos (Cálculos y Retorno)
El vecino ingresa el monto de su permiso de circulación para saber cuánto pagará tras el descuento municipal.
Lógica: Si el monto es mayor a $70.000, el descuento es del 15%. Si es menor, es del 5%.
Regla: La Función Principal debe mostrar el total a pagar con un signo de peso ($).
*/
function pagoPermisos() {
    let monto = parseFloat("Ingrese monto: ");
    let total = calcularDescuento(monto)
    document.getElementById("result1").textContent`El total a pagar es: ${monto} ` + ` ${total}$`
}
function pagoDescuento() {
    let descuento1 = 0.15;
    let descuento2 = 0.05;
    if (monto > 70000) {
        monto * descuento1
    } else {
        monto * descuento2
    }
    return total
}


/*Regla: La Función Principal debe mostrar el total a pagar con un signo de peso ($).
2. Módulo de Salud: Fila de Vacunación (Arreglos y Prioridad)
Gestión de nombres en la fila de espera del consultorio local.
Lógica: * Botón Normal: Agrega el nombre al final de la lista (push).
Botón Urgencia: Agrega el nombre al inicio de la lista (unshift).
Regla: El resultado debe mostrarse como una lista ordenada en el HTML. <ol>
*/

function ingresaUrgencia() {
const nombres = ["Carlos", "María", "Diego", "Juan", "Marco", "Sofia"];
const contenedor = document.getElementById('contenedor-lista');

let contenido = ""; // Empezamos con un string vacío

for (let i = 0; i < nombres.length; i++) {
    // Concatenamos: Índice+1 + el separador ".- " + el nombre + un salto de línea
    contenido += (i + 1) + ".- " + nombres[i] + "<br>";
}
};

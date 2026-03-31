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

let pacientes = ["Carlos", "María", "Diego", "Juan", "Marco", "Sofia"];
function ingresaUrgencia() {
    pacientes.unshift(nombre);
    return pacientes.join(", ")
};
// esta funcion se activara al momento que el boton se presione
function buscarBeneficiario() {
    // los tres const estan seleccionando desde javascript al html
    const container = document.getElementById("container2");
    const result = document.getElementById("result2");
    const input = document.getElementById("input2");
    // valida si el input esta vacio.
    if (input.value !== "") {
        // guarda el valor del input
        let nombre = input.value;
        // resultado va a guardar el valor de nombre, enviandolo a la primera funcion
        let resultado = ingresaUrgencia(nombre);
        result.textContent = resultado;
        input.value = "";
        container.classList.remove("d-none");
    } else {
        alert("El nombre no puede quedar vacío.")
    };

};

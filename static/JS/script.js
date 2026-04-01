/*1. Módulo de Tesorería: Pago de Permisos (Cálculos y Retorno)
El vecino ingresa el monto de su permiso de circulación para saber cuánto pagará tras el descuento municipal.
Lógica: Si el monto es mayor a $70.000, el descuento es del 15%. Si es menor, es del 5%.
Regla: La Función Principal debe mostrar el total a pagar con un signo de peso ($).
*/


// 1. FUNCIÓN DE OPERACIÓN (Cálculo)
function calcularDescuento(monto) {
  let factor;
  if (monto > 70000) {
    factor = 0.85; // 15% descuento
  } else {
    factor = 0.95; // 5% descuento
  }
  return monto * factor;
}

// 2. FUNCIÓN PRINCIPAL (Interfaz)
function moduloTesoreria() {
  // Referencias a los elementos
  const input = document.getElementById("input1");
  const resultadoTexto = document.getElementById("result1"); // El <p> o <span> interno
  const container = document.getElementById("container1"); // El div verde

  let monto = parseFloat(input.value);

  if (monto > 0) {
    // Ejecutamos el cálculo
    let total = calcularDescuento(monto);

    // Ponemos el resultado y mostramos el cuadro
    resultadoTexto.innerText = "$" + total.toFixed(2);
    container.classList.remove("d-none");
  }
}
/*Regla: La Función Principal debe mostrar el total a pagar con un signo de peso ($).
2. Módulo de Salud: Fila de Vacunación (Arreglos y Prioridad)
Gestión de nombres en la fila de espera del consultorio local.
Lógica: * Botón Normal: Agrega el nombre al final de la lista (push).
Botón Urgencia: Agrega el nombre al inicio de la lista (unshift).
Regla: El resultado debe mostrarse como una lista ordenada en el HTML. <ol>
*/
// Nuestra base de datos temporal (Arreglo)
// 1. VARIABLE GLOBAL (Arreglo vacío para la fila)
let fila = [];

const pintarLista = () => {
  const lista = document.getElementById("listaPacientes");
  const container = document.getElementById("container2");
  const cuadroVerde = document.getElementById("result2");

  // 1. Llenamos la lista <ol> (Se numeran solos: 1, 2, 3...)
  lista.innerHTML = fila.map(nombre => `<li>${nombre}</li>`).join("");

  // 2. Concatenamos los nombres también en el cuadro verde con comas
  cuadroVerde.innerText = fila.join(", ");

  // 3. Mostramos todo el bloque
  container.classList.remove("d-none");
};

const agregarNormal = () => {
  const input = document.getElementById("input2");
  if (input.value.trim()) {
    fila.push(input.value.toUpperCase()); // Al final
    input.value = "";
    pintarLista();
  }
};

const agregarUrgencia = () => {
  const input = document.getElementById("input2");
  if (input.value.trim()) {
    fila.unshift(input.value.toUpperCase()); // Al inicio (Prioridad)
    input.value = "";
    pintarLista();
  }
};

// Nuestra lista de datos
const beneficiarios = ["MARCO", "ANA", "JUAN", "LUCIA", "PEDRO", "ELENA"];

// LA ÚNICA FUNCIÓN
function buscarLista() {
    // 1. Capturamos los elementos del HTML
    const input = document.getElementById("input3");
    const resultadoDiv = document.getElementById("result3");
    const contenedor = document.getElementById("container3");
    
    // 2. Limpiamos el texto que escribió el usuario
    const nombreBuscado = input.value.toUpperCase().trim();
    let mensaje = "No registrado"; // Valor por defecto

    // 3. CICLO FOR: Buscamos en la lista
    for (let i = 0; i < beneficiarios.length; i++) {
        if (beneficiarios[i] === nombreBuscado) {
            mensaje = "Beneficiario Verificado";
            break; // Si lo encontramos, dejamos de buscar
        }
    }

    // 4. MOSTRAR RESULTADO
    resultadoDiv.innerText = mensaje;
    
    // Cambiamos el color según el resultado
    resultadoDiv.classList.remove("alert-success", "alert-danger");
    if (mensaje === "Beneficiario Verificado") {
        resultadoDiv.classList.add("alert-success");
    } else {
        resultadoDiv.classList.add("alert-danger");
    }

    // Hacemos visible el cuadro
    contenedor.classList.remove("d-none");
}
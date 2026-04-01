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

/*3. Módulo de Subsidios: Buscador de Beneficiarios (Ciclos e If)
Verificar si un RUT o nombre está en el Listado de entrega de beneficios.
Lógica: Tener un arreglo con al menos 6 nombres. Usar un ciclo for para buscar si el dato ingresado existe en la lista.
Regla: La función debe devolver "Beneficiario Verificado" o "No registrado".
*/
// 1. Datos iniciales
const beneficiarios = ["MARCO", "ANA", "JUAN", "LUCIA", "PEDRO", "ELENA"];

// 2. Función de Lógica (Busca en el arreglo)
const buscarLista = (dato) => {
    // Normalizamos la entrada: mayúsculas y sin espacios extras
    const busqueda = dato.toUpperCase().trim();
    
    for (let i = 0; i < beneficiarios.length; i++) {
        if (beneficiarios[i] === busqueda) {
            return "Beneficiario Verificado";
        }
    }
    return "No registrado";
};

// 3. Función del Botón (Interfaz)
const BuscarLista = () => {
    const entrada = document.getElementById("input3").value;
    const contenedor = document.getElementById("container3");
    const resultadoDiv = document.getElementById("result3");

    // Si el input está vacío, avisamos y no seguimos
    if (entrada.trim() === "") {
        alert("Por favor, escribe un nombre.");
        return;
    }

    const mensaje = buscarLista(entrada);
    resultadoDiv.innerText = mensaje;

    // --- MEJORA DE COLOR ---
    // Limpiamos clases anteriores de color
    resultadoDiv.classList.remove("alert-success", "alert-danger");

    if (mensaje === "Beneficiario Verificado") {
        resultadoDiv.classList.add("alert-success"); // Color verde
    } else {
        resultadoDiv.classList.add("alert-danger");  // Color rojo
    }

    // Mostramos el resultado
    contenedor.classList.remove("d-none");
};
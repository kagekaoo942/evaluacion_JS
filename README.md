# evaluacion_JS

**Ejercicio 1**:
Primera función 

let factor: Es la variable. Aquí se crea un valor el cual se usara para guardar el porcentaje (0.85 o 0.95) que se aplicaremos después.

2. if (monto > 70000): Es una condicional que evalúa si el valor cumple con la condicion si es verdadero se ejecuta el primer bloque, si es falso salta al else.

3. 0.85 / 0.95: Son decimales que representan el valor de los descuentos: multiplicar por 0.85 es igual a calcular el 85% del valor (o aplicar un 15% de descuento).

4. return: Es la sentencia de salida. Finaliza la función y devuelve el resultado final al lugar donde fue llamada.

segunda función:

document.getElementById(...): Es un método del DOM (Document Object Model). Es el puente que usa JavaScript para ingresar y obtener el elemento HTML que tiene ese ID específico.

2. .value: Es una propiedad unica. Obtiene el texto que el usuario escribió dentro del <input>.

3. parseFloat(...): Es una función que transforma a decimal los numeros. Como lo que viene del formulario siempre es texto (aunque escribas números), esta función lo convierte en un número decimal para poder hacer cálculos matemáticos.

4. if (monto > 0): Es un filtro de validación. Evita que el programa intente calcular descuentos sobre valores inválidos (como letras, espacios vacíos o números negativos).

5. .innerText: Es una propiedad que modifica texto. Cambia el texto visible dentro del elemento HTML seleccionado por el valor que tú decidas.

6 .toFixed(2): Es un método de formato. Asegura que el resultado siempre muestre dos decimales (como $50.00 en lugar de $50), ideal para temas monetarios.

7. .classList.remove("d-none"): Es un manipulador de estilos. Modifica la lista de clases CSS del elemento. Al quitar la clase "d-none" hace que el cuadro aparezca automaticamente en la pantalla.


**ejercicio 2:**

función 1:
.value.trim(): Es un método de limpieza. El trim() elimina los espacios en blanco accidentales al inicio o al final del nombre (para que no agreguen un paciente que sea solo un espacio).

2. .toUpperCase(): Es un formateador. Convierte el nombre a MAYÚSCULAS para que la lista se vea mejor.

3. .push():Agrega el nombre al final del arreglo.

4. .unshift():Agrega el nombre al inicio del arreglo saltándose a todos los demás.

5. input.value = "": Es un reset. Borra lo que escribiste en el cuadro de texto para que el cuadro de texto quede limpio.

función 2:

.map():Es un transformador de arreglos. Toma cada nombre del arreglo y lo convierte una de una lista de palabras a en una lista de ítems para la web.

2. .join(""):devuelve una lista de elementos separados por comas, join("") los une todos en un solo bloque de texto HTML sin espacios.

3. .innerHTML:Mete todo ese código HTML generado directamente dentro del elemento <ol>, lo que hace que los números (1, 2, 3...) aparezcan solos.

4. fila.join(", "):Aquí se usa join de forma distinta. Convierte hace que los nombres están separados por una coma y un espacio.

5. .classList.remove("d-none"):este es un interruptor de visibilidad que muestra el contenedor una vez que hay al menos un paciente.

**ejericio 3:**

función 1:
 const: Se usa porque la lista de nombres es fija y no cambiará durante la ejecución del programa.

2. ["MARCO", "ANA", ...]: Es el Arreglo (Array) que contiene todos los datos en los cuales vamos a comparar lo que el usuario escriba.

función 2:

for (let i = 0; i < beneficiarios.length; i++): Es el Ciclo (Bucle), en el cual i se encargara de contar el largo de beneficiarios para que pueda contar los valores que hay en el arreglo y asi poder saber que nombres son los beneficioarios y no confundirse.

2. i = 0: Empieza en la posición cero.

3. i < beneficiarios.length: si i es menor al largo de la lista se detendrá al llegar al final de la lista en la cual hay 6 elementos.

4. i++: Avanza de uno en uno en el largo de las lista.

5. beneficiarios[i]: Es el Selector de índice. Accede al nombre específico que el ciclo está revisando.

6. dato.toUpperCase().trim(): Convierte lo que el usuario escribió a mayúsculas y quita espacios, para que si alguien escribe " ana ", el sistema lo reconozca como "ANA".

7. return "Beneficiario Verificado": Es la Salida. Si el if encuentra una coincidencia, la función se detiene inmediatamente sale con este mensaje. No sigue revisando el resto de la lista.

8. return "No registrado": Es el Resultado por Defecto. Si el ciclo for termina de revisar los 6 nombres y NUNCA entró al if, la función llega a esta línea al final evitando asi un bucle infinito.

funcion 3:

document.getElementById("input3").value:Extrae el texto que el usuario ingresó en el buscador.

2. const mensaje = buscarEnLista(entrada): Llama a la Función. Guarda el resultado de la búsqueda ("Verificado" o "No registrado") en una variable llamada mensaje.

3. resultadoDiv.innerText = mensaje:Toma el mensaje obtenido y lo escribe dentro del elemento visual de la página.

4. contenedor.classList.remove("d-none"):uita la clase de Bootstrap que oculta el cuadro de resultados para que el usuario pueda verlo.

 
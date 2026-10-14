import estudiantes, { curso } from "./datos.js";
import { reporte } from "./calculos.js";

// Spread de objeto y de arreglo
const nuevo = { ...estudiantes[0], nombre: "Ana María" };
const todos = [...estudiantes, nuevo];

// Mostrar curso en consola
console.log(`Curso: ${curso}`);

const listaUI = document.querySelector("#reportes");

// Recorrer y mostrar reportes
todos.forEach((estudiante) => {
  const linea = reporte(estudiante);

  // Mostrar en consola
  console.log(linea);

  // Mostrar en el HTML
  const li = document.createElement("li");
  li.textContent = linea;
  listaUI.appendChild(li);
});

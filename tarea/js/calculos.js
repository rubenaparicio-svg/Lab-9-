// Arrow function con rest operator (...notas)
export const promedio = (...notas) =>
  notas.reduce((suma, nota) => suma + nota, 0) / notas.length;

// Parámetro por defecto (minima = 13)
export const estado = (nota, minima = 13) =>
  nota >= minima ? "Aprobado" : "Desaprobado";

// Desestructuración ({ nombre, notas }) y spread (...notas)
export const reporte = ({ nombre, notas }) => {
  const prom = promedio(...notas);
  return `${nombre}: ${prom.toFixed(1)} - ${estado(prom)}`;
};

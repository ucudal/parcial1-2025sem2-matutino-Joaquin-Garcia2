/**
 * EJERCICIO DE PARCIAL: SISTEMA DE GESTIÓN DE BIBLIOTECA UNIVERSITARIA
 * 
 * OBJETIVO: Implementar un sistema que permita gestionar los préstamos de libros 
 * en una biblioteca universitaria, aplicando conceptos avanzados de manipulación
 * de objetos y arrays en JavaScript.
 * 
 * INSTRUCCIONES:
 * 1. Analiza la estructura de datos proporcionada
 * 2. Implementa todas las funciones requeridas 
 * 3. Prueba tus funciones con los datos de ejemplo y los casos de prueba proporcionados
 * 4. NO modifiques la estructura base de los objetos, solo añade las funcionalidades solicitadas
 */

// Importamos los datos desde el archivo JSON usando ES6 import
import bibliotecaData from './datos_biblioteca.json' assert { type: 'json' };

// Creamos una copia de los datos para trabajar con ellos
const biblioteca = { ...bibliotecaData };

/**
 * FUNCIONES A IMPLEMENTAR:
 */

/**
 * 1. Función para prestar un libro
 * 
 * Implementa una función que gestione el proceso de préstamo de un libro a un estudiante.
 * Deberás realizar las validaciones necesarias y actualizar los registros correspondientes.
 * 
 * @param {number} idLibro - ID del libro a prestar
 * @param {number} idEstudiante - ID del estudiante que pide prestado
 * @param {string} fechaPrestamo - Fecha del préstamo (formato YYYY-MM-DD)
 * @return {boolean|string} - true si se realizó el préstamo, mensaje de error si no
 */
function prestarLibro(idLibro, idEstudiante, fechaPrestamo) {
  const libro = biblioteca.libros.find(l => l.id === idLibro);
  if (!libro) {
    return "El libro no existe";
  }
  
  if (!libro.disponible) {
    return "El libro no está disponible";
  }
  
  const estudiante = biblioteca.estudiantes.find(e => e.id === idEstudiante);
  if (!estudiante) {
    return "El estudiante no existe";
  }
  
  libro.disponible = false;
  libro.prestamos.push({
    "estudiante": estudiante.nombre,
    "fechaPrestamo": fechaPrestamo,
    "fechaDevolucion": null
  });
  
  estudiante.librosActuales.push(idLibro);
  
  return true;
}


/**
 * 2. Función para buscar libros
 * 
 * Desarrolla una función de búsqueda flexible que permita encontrar libros 
 * según diversos criterios como título, autor, categoría y disponibilidad.
 * 
 * @param {object} criterios - Objeto con los criterios de búsqueda
 * @return {array} - Array con los libros que cumplen los criterios
 */
function buscarLibros(criterios) {
    return biblioteca.libros.filter(libro => {
    for (let criterio in criterios) {
      if (criterio === 'titulo') {
        if (!libro.titulo.toLowerCase().includes(criterios.titulo.toLowerCase())) {
          return false;
        }
      } else if (criterio === 'autor') {
        if (!libro.autor.toLowerCase().includes(criterios.autor.toLowerCase())) {
          return false;
        }
      } else if (libro[criterio] !== criterios[criterio]) {
        return false;
      }
    }
    return true;
  });
}



// ALGUNOS CASOS DE PRUEBA
// Descomentar para probar tu implementación


console.log("Probando préstamo de libro:");
console.log(prestarLibro(1, 3, "2025-09-13"));

console.log("\nBuscando libros de programación disponibles:");
console.log(buscarLibros({categoria: "Programación", disponible: true}));



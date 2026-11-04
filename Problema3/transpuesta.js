const transponer = matriz => {
    if (!Array.isArray(matriz) || !matriz.every(fila => Array.isArray(fila))) {
        throw new Error("La matriz debe ser un arreglo de arreglos.");
    }

    if (matriz.length === 0) {
        return [];
    }

    if (!matriz.every(fila => fila.length === matriz[0].length)) {
        throw new Error("Todas las filas deben tener la misma longitud.");
    }

    // Cada columna de la entrada se convierte en una fila de la salida.
    return matriz[0].map((valor, columna) => matriz.map(fila => fila[columna]));
};

if (require.main === module) {
    const matriz = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

    console.log("Matriz original:");
    console.log(matriz);
    console.log("\nMatriz transpuesta:");
    console.log(transponer(matriz));

    const rectangular = [[1, 2, 3], [4, 5, 6]];
    console.log("\nCaso adicional: matriz rectangular:");
    console.log(rectangular);
    console.log("Transpuesta rectangular:");
    console.log(transponer(rectangular));
    console.log("Matriz vacía:", transponer([]));
}

module.exports = { transponer };

const eliminarElementos = (lista, elementos) =>
    lista.filter(elemento => !elementos.includes(elemento));

if (require.main === module) {
    const colores = [
        "rojo",
        "verde",
        "azul",
        "amarillo",
        "gris",
        "blanco",
        "negro"
    ];
    const eliminar = [
        "amarillo",
        "cafe",
        "blanco"
    ];

    console.log("Lista original:", colores);
    console.log("Elementos por eliminar:", eliminar);
    console.log("Resultado:", eliminarElementos(colores, eliminar));
    console.log("\nCaso adicional: elemento inexistente:");
    console.log(eliminarElementos(colores, ["cafe"]));
    console.log("Caso adicional: valores repetidos:");
    console.log(eliminarElementos(["rojo", "azul", "rojo"], ["rojo"]));
}

module.exports = { eliminarElementos };

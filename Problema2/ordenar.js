const ordenarPor = (lista, propiedad) => {
    if (!lista.every(elemento => Object.hasOwn(elemento, propiedad))) {
        throw new Error("La propiedad debe existir en todos los objetos.");
    }

    // sort modifica su arreglo; se ordena una copia para preservar la entrada.
    return [...lista].sort((primero, segundo) => {
        const valorPrimero = primero[propiedad];
        const valorSegundo = segundo[propiedad];

        if (typeof valorPrimero === "number" && typeof valorSegundo === "number") {
            return valorPrimero - valorSegundo;
        }

        return String(valorPrimero).localeCompare(String(valorSegundo), "es");
    });
};

if (require.main === module) {
    const telefonos = [
        { make: "Nokia", model: 216, color: "Black" },
        { make: "Mi Max", model: 2, color: "Gold" },
        { make: "Samsung", model: 7, color: "Blue" }
    ];
    const propiedad = process.argv[2] ?? "model";

    if (!["make", "model", "color"].includes(propiedad)) {
        console.error("Propiedad inválida. Utiliza make, model o color.");
        process.exitCode = 1;
    } else {
        console.log("Lista original:");
        console.log(telefonos);
        console.log(`\nLista ordenada por ${propiedad}:`);
        console.log(ordenarPor(telefonos, propiedad));
        console.log("\nCaso adicional: lista vacía:", ordenarPor([], propiedad));
    }
}

module.exports = { ordenarPor };

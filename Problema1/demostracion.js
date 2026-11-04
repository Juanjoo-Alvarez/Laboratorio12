const TRUE = x => y => x;
const FALSE = x => y => y;
const NOT = p => p(FALSE)(TRUE);
const aBooleano = booleanoChurch => booleanoChurch(true)(false);

const factorial = numero => {
    if (!Number.isInteger(numero) || numero < 0) {
        throw new Error("El factorial requiere un entero no negativo.");
    }

    // El caso base detiene las llamadas recursivas.
    return numero === 0 ? 1 : numero * factorial(numero - 1);
};

if (require.main === module) {
    console.log("Booleanos de Church:");
    console.log("NOT TRUE =", aBooleano(NOT(TRUE)));
    console.log("NOT FALSE =", aBooleano(NOT(FALSE)));

    console.log("\nRecursión:");
    console.log("factorial(0) =", factorial(0));
    console.log("factorial(5) =", factorial(5));

    const numeros = [1, 2, 3, 4, 5];
    const dobles = numeros.map(numero => numero * 2);
    const pares = numeros.filter(numero => numero % 2 === 0);
    const suma = numeros.reduce((acumulado, numero) => acumulado + numero, 0);

    console.log("\nFunciones de orden superior:");
    console.log("Original:", numeros);
    console.log("Dobles con map:", dobles);
    console.log("Pares con filter:", pares);
    console.log("Suma con reduce:", suma);
    console.log("Suma de una lista vacía:", [].reduce((total, numero) => total + numero, 0));
}

module.exports = { TRUE, FALSE, NOT, aBooleano, factorial };

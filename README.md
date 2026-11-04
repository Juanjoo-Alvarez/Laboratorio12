# Laboratorio 12: Programación funcional

**Curso:** Teoría de la Computación  
**Estudiante:** Juan Jose Rivas Alvarez  
**Carnet universitario:** 24856  
**Lenguaje:** JavaScript con Node.js

El objetivo es aplicar funciones lambda, recursión y funciones de orden superior para comprender los booleanos de Church, ordenar objetos, transponer matrices y eliminar elementos de listas. Se conservan los ejemplos del laboratorio y se incluyen casos adicionales.

## Requisitos

- Node.js 18 o posterior para ejecutar los programas.
- Un compilador LaTeX con los paquetes habituales de TeX Live o MiKTeX para generar el documento PDF.
- Git y una cuenta de GitHub para publicar el repositorio.

No se necesitan dependencias externas de JavaScript ni ejecutar `npm install`. Los programas utilizan funciones flecha, arreglos y módulos propios de Node.js.

## Estructura

```text
Laboratorio12/
├── README.md
├── .gitignore
├── Problema1/
│   ├── respuestas.tex
│   ├── respuestas.pdf
│   └── demostracion.js
├── Problema2/
│   └── ordenar.js
├── Problema3/
│   └── transpuesta.js
└── Problema4/
    └── eliminar.js
```

`Problema1/respuestas.pdf` contiene las respuestas teóricas y se entrega junto con su fuente LaTeX. Se compiló con Tectonic y se revisaron visualmente sus cinco páginas. El `.gitignore` conserva el PDF final y excluye los archivos auxiliares de compilación.

## Ejecución y resultados esperados

Ejecutar los siguientes comandos desde la carpeta raíz del proyecto.

### Problema 1: fundamentos de programación funcional (25 %)

`respuestas.tex` desarrolla la regla de reducción beta, las dos demostraciones de NOT con booleanos de Church, la recursión, el caso base, la representación de ciclos, las funciones de orden superior y las ventajas y limitaciones del enfoque funcional. Incluye ejemplos de uso adecuado y menos conveniente.

```sh
node Problema1/demostracion.js
```

Resultados principales:

```text
NOT TRUE = false
NOT FALSE = true
factorial(0) = 1
factorial(5) = 120
Dobles con map: [ 2, 4, 6, 8, 10 ]
Pares con filter: [ 2, 4 ]
Suma con reduce: 15
Suma de una lista vacía: 0
```

TRUE y FALSE son funciones de Church. La conversión a booleanos de JavaScript se realiza únicamente al imprimir los resultados. El factorial acepta enteros no negativos; se usa con valores pequeños porque la recursión está limitada por la pila y `Number` tiene precisión finita.

### Problema 2: ordenamiento de objetos (25 %)

Ordena una copia del arreglo de teléfonos con `sort()` y una función flecha. La propiedad se indica como argumento; si se omite se utiliza `model`. La comparación numérica usa una resta y la textual utiliza `localeCompare()` en español. Se espera una propiedad de tipo homogéneo, como ocurre con los datos del laboratorio.

```sh
node Problema2/ordenar.js
node Problema2/ordenar.js model
node Problema2/ordenar.js make
node Problema2/ordenar.js color
```

| Propiedad | Orden esperado |
| --- | --- |
| `model` | Mi Max (2), Samsung (7), Nokia (216) |
| `make` | Mi Max, Nokia, Samsung |
| `color` | Black (Nokia), Blue (Samsung), Gold (Mi Max) |

El programa muestra la lista original, la ordenada y el caso de una lista vacía. Una propiedad diferente de `make`, `model` o `color` produce un mensaje de error y un código de salida 1.

### Problema 3: matriz transpuesta (25 %)

Dos llamadas a `map()` convierten las columnas en filas, según la relación `transpuesta[j][i] = matriz[i][j]`. Se valida que la entrada sea un arreglo de arreglos y que todas sus filas tengan la misma longitud.

```sh
node Problema3/transpuesta.js
```

Ejemplo original:

```text
Entrada: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
Salida:  [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
```

Ejemplo rectangular adicional:

```text
Entrada: [[1, 2, 3], [4, 5, 6]]
Salida:  [[1, 4], [2, 5], [3, 6]]
```

Una matriz vacía devuelve `[]`. Por convención, una matriz con filas vacías, como `[[], []]`, también devuelve `[]`: un arreglo vacío no conserva información sobre dimensiones sin columnas. Una matriz irregular, como `[[1, 2], [3]]`, produce un error. La función no cambia la entrada.

### Problema 4: eliminación de elementos (25 %)

`filter()` conserva los elementos que no aparecen en la lista de eliminación, consultada con `includes()`. La comparación de cadenas es exacta; se mantiene el orden y no se modifican las entradas.

```sh
node Problema4/eliminar.js
```

```text
Original: ["rojo", "verde", "azul", "amarillo", "gris", "blanco", "negro"]
Eliminar: ["amarillo", "cafe", "blanco"]
Resultado: ["rojo", "verde", "azul", "gris", "negro"]
```

El elemento inexistente `cafe` se ignora. Los casos adicionales muestran que eliminar únicamente `cafe` conserva todos los colores y que eliminar `rojo` de `["rojo", "azul", "rojo"]` devuelve `["azul"]`.

## Compilar la documentación

Desde la raíz, con `pdflatex` instalado:

```sh
pdflatex -interaction=nonstopmode -halt-on-error -output-directory=Problema1 Problema1/respuestas.tex
```

El resultado se guardará como `Problema1/respuestas.pdf`, junto a su fuente. Abrirlo para comprobar fórmulas, márgenes, bloques de código y numeración antes de entregar. La portada no lleva número; la primera sección comienza en la página 1 con numeración arábiga. Por su extensión breve, el documento no utiliza índice.

## Verificación realizada

Se ejecutaron los cuatro programas con Node.js. Además de revisar las salidas de consola, se comprobaron los siguientes casos con aserciones del módulo integrado `node:assert/strict`:

| Problema | Casos verificados |
| --- | --- |
| 1 | NOT para ambos booleanos, doble negación, factorial de 0, 1 y 5; rechazo de entradas negativas y no enteras; resultados de `map`, `filter` y `reduce`. |
| 2 | Orden numérico y textual, lista vacía, valores iguales, propiedad inexistente y conservación de la entrada. |
| 3 | Matriz cuadrada, rectangular, una fila, una columna, entrada vacía, filas vacías, rechazo de filas desiguales y entradas inválidas; conservación de la entrada. |
| 4 | Ejemplo original, elementos inexistentes, listas vacías, valores repetidos y conservación de ambas entradas. |

Todas las comprobaciones de JavaScript fueron satisfactorias. El PDF se compiló con Tectonic 0.17.0 y se revisaron visualmente sus cinco páginas, incluyendo fórmulas, bloques de código, márgenes y numeración.

## Interpretación del enunciado

El Problema 1 del PDF es principalmente teórico, aunque las instrucciones generales solicitan mostrar la ejecución del ejercicio 1 en un video. Se proporciona `demostracion.js` para ilustrar sus conceptos, junto con las respuestas escritas.

El PDF escribe `café` y la solicitud de implementación escribe `cafe`. El programa utiliza `cafe`, tal como se solicitó. Ninguna de esas cadenas pertenece a la lista original, por lo que el resultado del ejemplo es el mismo.

## Video de demostración del Problema 1

[Enlace al video de YouTube pendiente]

Grabar un video de máximo 10 minutos explicando las reducciones de NOT, ejecutando `node Problema1/demostracion.js` y mostrando el factorial y las operaciones de listas. Subirlo a YouTube como video no listado y sustituir el marcador anterior por su enlace. No se ha generado ni subido un video automáticamente.

## Entrega en GitHub

Antes de publicar, grabar el video y actualizar su enlace. Si se modifica el fuente LaTeX, volver a compilar y revisar el PDF. Crear un repositorio vacío en GitHub y, desde esta carpeta, ejecutar:

```sh
git init
git add .
git commit -m "Completar Laboratorio 12 de Teoría de la Computación"
git branch -M main
git remote add origin URL_DEL_REPOSITORIO
git push -u origin main
```

Reemplazar `URL_DEL_REPOSITORIO` por la URL real del repositorio. No se ha creado ni publicado un repositorio remoto desde este entorno.

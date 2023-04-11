/**
 * Calcula el area de un círculo!
 * 
 * JavaScript nos ofrece módulos con herramientas matemáticas, como por ejemplo, el módulo Math. Entre sus propiedades, podemos acceder a una aprxoimación del valor PI: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math/PI
 * 
 * - Crea un script que, dado el radio de un círculo, cálcule su area y muestra el valor por pantalla. Recuerda que el valor del area de un círculo se calcula con la fórmula: Area	= π r2
 * 
 * 
 * - El radio debe almacenarse en una variable.
 * - Ejemplo: si la variable del radio vale 3, deberíamos ver un mensaje por pantalla que diga: "El area de un círculo de radio 3 es de 28.274333882308138 m2"
 * 
 * 
 */

// Variables
let radio = 3;
let numeroPi = Math.PI;

// Calcular el área del círculo
let area = numeroPi * Math.pow(radio, 2);

// Mostrar el área sin redondear
console.log(`El área de un círculo de radio ${radio} es de ${area} m2`);

// Bonus: Redondear el área a dos decimales
let areaRedondeada = area.toFixed(2);

// Mostrar el área redondeada
console.log(`El área de un círculo de radio ${radio} es de ${areaRedondeada} m2`);

//let radio = 3;: Se crea una variable llamada radio y se le asigna el valor 3.

//let numeroPi = Math.PI;: Se crea una variable llamada numeroPi y se le asigna el valor de PI (aproximadamente 3.14159) utilizando la propiedad Math.PI. let area = numeroPi * Math.pow(radio, 2);: Se crea una variable llamada area y se le asigna el resultado de multiplicar numeroPi por el radio al cuadrado. Para elevar el radio al cuadrado, se utiliza la función Math.pow(radio, 2), que eleva el radio a la potencia de 2. console.log(El área de un círculo de radio ${radio} es de ${area} m2);: Se imprime el área del círculo en la consola utilizando una plantilla de cadena (template string). La plantilla de cadena permite interpolar variables directamente dentro del texto delimitado por las comillas invertidas (backticks) usando la sintaxis ${variable}.let areaRedondeada = area.toFixed(2);: Se crea una variable llamada areaRedondeada y se le asigna el valor del área redondeada a dos decimales. Para redondear el área a dos decimales, se utiliza el método toFixed(2) aplicado a la variable area.console.log(El área de un círculo de radio ${radio} es de ${areaRedondeada} m2);: Se imprime el área redondeada del círculo en la consola, nuevamente utilizando una plantilla de cadena.

/**
 * BONUS: Muestra el mensaje de tal manera que el número devuelto esté redondeado a dos decimales. Es decir, para un radio de 3, el mensaje debería ser: ""El area de un círculo de radio 3 es de 28.27 m2"
 */
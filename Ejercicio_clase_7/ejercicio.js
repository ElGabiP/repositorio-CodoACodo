//funcion
//pedimos los datos a la persona.(nombre - edad)
// indicar si la persona es mayor de 18 puede pasar
// si la persona llego antes de las 2 no paga entrada
// si la persona llego despues de las 2 paga en pesos la suma de las letras de su nombre + su edad

let fechaActual = new Date();
let horaActual = (fechaActual.getHours());
let nombre = prompt("Decime tu nombre:");
let edad = Math.abs(Number(prompt("Decime tu edad:")));

/*
function esMayor (nombre, edad){
    if (edad>=18){
      let costo = nombre.length+edad;
        document.write (`${nombre}, sos mayor, tenés ${edad} años. Podés pasar.`);
        if (horaActual >= 2 && horaActual < 7){
          document.write (`<br>Tenés que pagar $${costo}.`);
        } else {
        document.write (`<br>Llegaste antes de las 2 de la mañana. No pagás los $${costo}.`);
      }
    } else {
        document.write (`Lo siento, ${nombre}, sos menor, tenés ${edad} años. No podés pasar.`);
    }
}
*/


// La función "esMayor" como arrow function. Declaro antes la variable costo y repito texto en las plantillas para simplificar el uso del operador ternario.

let costo = nombre.length + edad;

let esMayor = (nombre, edad) => edad >= 18 ? horaActual >= 2 && horaActual < 7 ? document.write(`${nombre}, sos mayor, tenés ${edad} años. Podés pasar.<br>Tenés que pagar $${costo}.`) : document.write(`${nombre}, sos mayor, tenés ${edad} años. Podés pasar.<br>Llegaste antes de las 2 de la mañana. No pagás los $${costo}.`) : document.write(`Lo siento, ${nombre}, sos menor, tenés ${edad} años. No podés pasar.`);

// reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Gabriel";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 43;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;

function devolverString(str) {
    // "Return" la string provista: str
    // Tu código:
    return str;
}

function suma(x, y) {
    // "x" e "y" son números
    // Suma "x" e "y" juntos y devuelve el valor
    // Tu código:
    //let resultado = y+x;
    return y + x;
}

function resta(x, y) {
    // Resta "x" de "y" y devuelve el valor
    // Tu código:
    //let resultado = y-x;
    return y - x;
}

function multiplica(x, y) {
    // Multiplica "x" por "y" y devuelve el valor
    // Tu código:
    //let resultado = y*x;
    return y * x;
}

function divide(x, y) {
    // Divide "x" entre "y" y devuelve el valor
    // Tu código:
    //let resultado = y/x;
    return y / x;
}

function sonIguales(x, y) {
    // Devuelve "true" si "x" e "y" son iguales
    // De lo contrario, devuelve "false"
    // Tu código:utilizar if y else
    if (x == y) {
        return true;
    } else {
        return false;
    }
}

function tienenMismaLongitud(str1, str2) {
    // Devuelve "true" si las dos strings tienen la misma longitud
    // De lo contrario, devuelve "false"
    // Tu código:
    if (str1.length == str2.length) {
        return true;
    } else {
        return false;
    }
}

function menosQueNoventa(num) {
    // Devuelve "true" si el argumento de la función "num" es menor que noventa
    // De lo contrario, devuelve "false"
    // Tu código:
    var compara = num < 90 ? true : false;
    return compara;
}

function mayorQueCincuenta(num) {
    // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
    // De lo contrario, devuelve "false"
    // Tu código:
    var compara = num > 50 ? true : false;
    return compara;
}

function obtenerResto(x, y) {
    // Obten el resto de la división de "x" entre "y"
    // Tu código:
    // let resto = x % y;
    return x % y;
}

function esPar(num) {
    // Devuelve "true" si "num" es par
    // De lo contrario, devuelve "false"
    // Tu código:
    var par = num % 2 == 0 ? true : false;
    return par;
}

function esImpar(num) {
    // Devuelve "true" si "num" es impar
    // De lo contrario, devuelve "false"
    // Tu código:
    var impar = num % 2 != 0 ? true : false;
    return impar;
}

function elevarAlCuadrado(num) {
    // Devuelve el valor de "num" elevado al cuadrado
    // ojo: No es raiz cuadrada!
    // Tu código:
    // let cuadrado = Math.pow(num, 2);
    return Math.pow(num, 2);
}

function elevarAlCubo(num) {
    // Devuelve el valor de "num" elevado al cubo
    // Tu código:
    // let cubo = Math.pow(num, 3);
    return Math.pow(num, 3);
}

function elevar(num, exponent) {
    // Devuelve el valor de "num" elevado al exponente dado en "exponent"
    // Tu código:
    // let potencia = Math.pow(num, exponent);
    return Math.pow(num, exponent);
}

function redondearNumero(num) {
    // Redondea "num" al entero más próximo y devuélvelo
    // Tu código:
    let redondeo = Math.round(num);
    return redondeo;
}

console.log(redondearNumero(3.52));
console.log(redondearNumero(3.499));

function redondearHaciaArriba(num) {
    // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
    // Tu código:
    let redondeo = Math.ceil(num);
    return redondeo;
}

function numeroRandom() {
    //Generar un número al azar entre 0 y 1 y devolverlo
    //Pista: investigá qué hace el método Math.random()
    // let azar = Math.random();
    return Math.random();
}

function esPositivo(numero) {
    //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
    //Si el número es positivo, devolver ---> "Es positivo"
    //Si el número es negativo, devolver ---> "Es negativo"
    //Si el número es 0, devuelve false
    var positivo = numero == 0 ? false : numero > 0 ? "Es positivo" : "Es negativo";
    return positivo;
}

console.log(esPositivo(3));
console.log(esPositivo(-3));
console.log(esPositivo(0));

function agregarSimboloExclamacion(str) {
    // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
    // Ejemplo: "hello world" pasaría a ser "hello world!"
    // Tu código:
    // let exclamacion=str+"!";
    return str + "!";
}

console.log(agregarSimboloExclamacion(nombre));

function combinarNombres(nombre, apellido) {
    // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
    // Ejemplo: "Soy", "Bruce Wayne" -> "Bruce Wayne"
    // Tu código:
    let nombreCompleto = nombre + " " + apellido;
    return nombreCompleto;
}

console.log(agregarSimboloExclamacion(combinarNombres(nombre, nuevaString)));

function obtenerSaludo(nombre) {
    // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
    // "Martin" -> "Hola Martin!"
    // Tu código:
    let saludo = "Hola " + nombre + "!";
    return saludo;
}

console.log(obtenerSaludo(agregarSimboloExclamacion(combinarNombres(nombre, nuevaString))));

function obtenerAreaRectangulo(alto, ancho) {
    // Retornar el area de un cuadrado teniendo su altura y ancho
    // Tu código:
    let area = alto * ancho;
    return area;
}

function retornarPerimetro(lado) {
    //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
    //Escribe tu código aquí
    // let perimetro=lado*4;
    return lado * 4;
}

console.log(retornarPerimetro(7));

function areaDelTriangulo(base, altura) {
    //Desarrolle una función que calcule el área de un triángulo.
    //Escribe tu código aquí
    let area = base * altura / 2;
    return area;
}

console.log(areaDelTriangulo(4, 5));

function deEuroAdolar(euro) {
    //Supongamos que 1 euro equivale a 1.20 dólares. 
    //Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
    //Escribe tu código aquí
    if (euro == undefined) {
        let euros = Number(prompt("Ingresa la cantidad de euros (Usa el punto como separador decimal):"));
        euro = euros
    };
    let dolares = euro * 1.2
    alert(`Tus € ${euro} equivalen a USD ${dolares.toFixed(2)}.`)
}

function esVocal(letra) {
    //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
    //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
    //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
    //si ingresa una consonante muestre en pantalla dato incorrecto
    //Escribe tu código aquí
    let vocales = ["a", "e", "i", "o", "u"];
    if (letra == undefined) {
        let ingreso = prompt("Escribe una sola letra:");
        letra = ingreso
    };
    letra = letra.toLowerCase();

    if (letra.length == 1) {
        for (i = 0; i < vocales.length; i++) {
            if (letra == vocales[i]) {
                alert("Es vocal.");
                return true;
            }
        }
    }
    alert("Dato incorrecto.");
    return false;
}

const boton1 = document.createElement("button");
let texto_boton1 = document.createTextNode("Cambia mis euros");
const boton2 = document.createElement("button");
let texto_boton2 = document.createTextNode("Te doy una letra");
let nroSuerte = redondearHaciaArriba(numeroRandom() * 10);

esMayor(nombre, edad);

if (tienenMismaLongitud(nuevaString, nombre) == true) {
    document.write(`<br><br>¡Qué casualidad, ${nombre}! Nuestros nombres tienen la misma cantidad de letras.`)
}

document.write(`<br><br>Me presento: Mi nombre es ${devolverString(nuevaString)}. Nuestras edades sumadas totalizan ${suma(nuevoNum, edad)} y multiplicadas entre sí llegan a ${multiplica(nuevoNum, edad)}. Tu edad elevada al cuadrado es de ${elevarAlCuadrado(edad)} y elevada al cubo llega a ${elevarAlCubo(edad)}.`);
if (mayorQueCincuenta(edad) == false) {
    document.write(`<br>¡Sos una persona joven, con menos de medio siglo de vida!`)
}
if (menosQueNoventa(edad) == false) {
    document.write(`<br>¡Sos una persona anciana, de más de noventa años!`)
}
if (sonIguales(edad, nuevoNum) == true) {
    document.write(`<br> ¡Increíble! ¡Tenemos la misa edad!`);
}
else if (nuevoNum > edad) {
    document.write(`<br> ¡Yo soy mayor que vos! La diferencia entre nuestras edades es de ${resta(edad, nuevoNum)} años, deberías multiplicar tu edad por ${Math.fround(divide(edad, nuevoNum)).toFixed(5)} para alcanzarme. Esto es así porque si dividimos ${nuevoNum} en ${edad} partes iguales, nos sobra ${obtenerResto(nuevoNum, edad)}.`);
}
else { document.write(`<br> Sos mayor a mí. La diferencia entre nuestras edades es de ${resta(nuevoNum, edad)} años, debería multiplicar mi edad por ${Math.fround(divide(nuevoNum, edad)).toFixed(5)} para alcanzarte. Esto es así porque si dividimos ${edad} en ${nuevoNum} partes iguales, nos sobra ${obtenerResto(edad, nuevoNum)}.`); }

document.write(`<br><br> Mi número de la suerte en este momento es el ${nroSuerte}. ${esPar(nroSuerte) == true ? "¡Es par! " : "¡Es impar! "} Tu edad elevada a este número es igual a ${elevar(edad, nroSuerte)}.<br><br>¿Querés más? Mirá: Una habitación con un ancho en metros igual a tu edad y un largo en metros igual a la mía tendría una superficie de  ${obtenerAreaRectangulo(edad, nuevoNum)}m².<br><br>Suponiendo que cada euro esté a USD 1,20 ¿Me dejás calcular cuántos dólares tendrías?  `);

boton1.appendChild(texto_boton1);
document.body.appendChild(boton1);
function convertirEuros() {
    deEuroAdolar();
}
boton1.addEventListener('click', convertirEuros);

document.write("<br><br>También aprendí a reconocer las vocales. ¿Probamos?  ");
boton2.appendChild(texto_boton2);
document.body.appendChild(boton2);
function controlarVocales() {
    esVocal();
}
boton2.addEventListener('click', controlarVocales);
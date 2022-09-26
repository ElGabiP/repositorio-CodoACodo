/* function obtenerMayor(x, y) {
  // "x" e "y" son números enteros .
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
return x>y?x:y;

}*/

const obtenerMayor = (x, y) => x > y ? x : y;


console.log(obtenerMayor(12, 16));
document.write(obtenerMayor(22, 16) + "<br>");

/* function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  return edad>=18?"Allowed":"Not allowed";
}*/

const mayoriaDeEdad = edad => edad >= 18 ? "Allowed" : "Not allowed";

console.warn(mayoriaDeEdad(11));
document.write(mayoriaDeEdad(22) + "<br>");

/* function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  
  return status===1?"Online":status===2?"Away":"Offline";

}*/

const conection = status => status === 1 ? "Online" : status === 2 ? "Away" : "Offline";

console.info(conection(2));
document.write(conection(1) + "<br>");

/* function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  
   return idioma==="aleman"?"Guten Tag!":idioma==="mandarin"?"Ni Hao!":idioma==="ingles"?"Hello!":"¡Hola!";
}*/

const saludo = idioma => idioma === "aleman" ? "Guten Tag!" : idioma === "mandarin" ? "Ni Hao!" : idioma === "ingles" ? "Hello!" : "¡Hola!";

console.log(saludo("aleman"));
document.write(saludo("ingles") + "<br>");

/*function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuelve --> "This is blue"
  //En caso que el color recibido sea "red", devuelve --> "This is red"
  //En caso que el color recibido sea "green", devuelve --> "This is green"
  //En caso que el color recibido sea "orange", devuelve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.

  switch (color) {
  case "blue":
    document.write("This is blue.");
    break;

  case "red":
    document.write("This is red.");
    break;
      
  case "green":
    document.write("This is green.");
    break;
      
  case "orange":
    document.write("This is orange.");
    break;

  default:
   document.write("Color not found");
}
document.write("<br>");

}*/

const colors = color => {
    switch (color) {
        case "blue":
            document.write("This is blue.");
            console.info("This is blue.");
            break;

        case "red":
            document.write("This is red.");
            console.info("This is red.");
            break;

        case "green":
            document.write("This is green.");
            console.info("This is green.");
            break;

        case "orange":
            document.write("This is orange.");
            console.info("This is orange.");
            break;

        default:
            document.write("Color not found");
            console.warn("Color not found");
    }
    document.write("<br>");
}

colors("blue");

/*function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  
  return numero===10||numero===5?true:false;
}*/

const esDiezOCinco = numero => numero === 10 || numero === 5 ? true : false;

console.log(`25 es cinco o diez: ${esDiezOCinco(25)}`);

document.write(`5 es cinco o diez: ${esDiezOCinco(50 / 10)}<br>`);

/*function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  
  return numero>20&&numero<50?true:false;
}*/

const estaEnRango = numero => numero > 20 && numero < 50 ? true : false;

console.log(`13 está en rango: ${estaEnRango(13)}`);

document.write(`33 está en rango: ${estaEnRango(33)}<br>`);

/*function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  
  return Math.floor(numero)!==numero?false:true;
}*/
const esEntero = numero => Math.floor(numero) !== numero ? false : true;

console.log(`4.2 es entero: ${esEntero(4.2)}`);
document.write(`-40 es entero: ${esEntero(-40)}<br>`);

/* function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero

  let retorno="";
  if (numero%3===0) {
    retorno+="fizz";
  }
  if (numero%5===0) {
    retorno+="buzz";
  }
  if (retorno==="") {
    retorno=numero;
  }
  return retorno;
}*/

const fizzBuzz = numero => {

    let retorno = "";
    if (numero % 3 === 0) {
        retorno += "fizz";
    }
    if (numero % 5 === 0) {
        retorno += "buzz";
    }
    if (retorno === "") {
        retorno = numero;
    }
    return retorno;
}

document.write(`Fizzbuzz del 1 al 50:<br>`);
for (let i = 1; i <= 50; i++) {
    document.write(fizzBuzz(i) + " - ");
}
document.write("<br>");
console.log(fizzBuzz(15));

/* function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
if (num1*num2*num3!==0) {
  if (num1<0||num2<0||num3<0) {
    return "Hay negativos.";
  }
    else if (num1>num2&&num1>num3){
    return "Número 1 es mayor y positivo.";
  }
    else if (num3>num2&&num3>num1){
    return ++num3;
  }
}
  else {
    return "Error.";
  }
  return false;
}*/


const operadoresLogicos = (num1, num2, num3) => {
    if (num1 * num2 * num3 !== 0) {
        if (num1 < 0 || num2 < 0 || num3 < 0) {
            return "Hay negativos.";
        }
        else if (num1 > num2 && num1 > num3) {
            return "Número 1 es mayor y positivo.";
        }
        else if (num3 > num2 && num3 > num1) {
            return ++num3;
        }
    }
    else {
        return "Error.";
    }
    return false;
}

console.log(`Operadores lógicos: ${operadoresLogicos(15, 1, -11)}`);
document.write(`Operadores lógicos: ${operadoresLogicos(15, 1, 11)}<br>`);


/*function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  if (numero>=2){
    for (let i = 2; i < numero; i++) {
    if (numero%i===0) {
      return false;
    }
      else{
        continue;}
}
     return true;
  }
  else {
    return false;}
}*/

const esPrimo = numero => {
    if (numero >= 2) {
        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) {
                return false;
            }
            else {
                continue;
            }
        }
        return true;
    }
    else {
        return false;
    }
}

document.write(`3475385758524527 es primo: ${esPrimo(347533)}<br>`);
console.log(`3475 es primo: ${esPrimo(3475)}`);

/*function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  return valor?"Soy verdadero":"Soy falso";

}*/

const esVerdadero = valor => valor ? "Soy verdadero" : "Soy falso";

document.write(`El valor null dice: ${esVerdadero(null)}<br>`);
console.log(`El número cero dice: ${esVerdadero(0)}`);


/*function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   
  let tabla = [];
  for (let i = 0; i <= 10; i++) {
    tabla.push(i*6);
  }
  return tabla;
}*/

const tablaDelSeis = () => {
    let tabla = [];
    for (let i = 0; i <= 10; i++) {
        tabla.push(i * 6);
    }
    return tabla;
}

document.write(`La tabla del seis: ${tablaDelSeis()}<br>`);
console.log(`La tabla del seis: ${tablaDelSeis()}`);


/*function tieneTresDigitos(numero){
  //Leer un número entero y determinar si tiene 3 dígitos.
  //Escribe tu código aquí
  
  return numero>=100&&numero<1000?"tiene tres dígitos":"no tiene tres dígitos";
}*/

const tieneTresDigitos = numero => numero >= 100 && numero < 1000 ? "tiene tres dígitos" : "no tiene tres dígitos";

document.write(`El número 99 ${tieneTresDigitos(99)}.<br>`);
console.log(`El número 399 ${tieneTresDigitos(399)}.`);

/*function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  let i = 8;
  do {
  numero+=5;
  i--;
} while (i>0);
  
return numero;
}*/

const doWhile = numero => {
    let i = 8;
    do {
        numero += 5;
        i--;
    } while (i > 0);
    return numero;
}

console.log(`Con Do... While sumé 5 al 4900 ocho veces hasta llegar a ${doWhile(49)}.`);
document.write(`Con Do... While sumé 5 al 9 ocho veces hasta llegar a ${doWhile(9)}.<br>`);


// No modificar nada debajo de esta línea
// --------------------------------

/* module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};*/
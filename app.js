/*
Ejercicio 1
Escribir una función que acepte un entero n y una cadena de texto s como parámetros, y que devuelva una cadena resultante de repetir s exactamente n veces.

Ejemplo (entrada -> salida):

(6, "I") debería devolver "IIIIII"
(5, "Hello") debería devolver "HelloHelloHelloHelloHello"
*/
function repeatString(n, s){
    return s.repeat(n)
}
console.log(repeatString(3,"holi"))

/*
Ejercicio 2
Un isograma es una palabra que no tiene letras repetidas, ya sean consecutivas o no consecutivas. Debes implementar una función que determine si una cadena de texto que contiene solo letras es un isograma. Se debe ignorar el caso de las letras. Asume que la cadena vacía es un isograma.

Ejemplo (entrada --> salida):

"Dermatoglyphics" --> true (no hay letras repetidas)
"aba" --> false (la letra a se repite)
"moOse" --> false (la letra o y e se repiten, ignorando el caso)
*/

function isIsogram(str){
    str = str.toLowerCase(); //convierto a minusculas para ignorar dif en letras
    const seenLetters = new Set(); //Crea conjunto para almacenar letras ya vistas
    //el set es util porque no permite duplicados
    for(let char of str){ //recorre cada letra de la cadena
        if (seenLetters.has(char)){ //verifica si la letra ya está en el conjunto
            return false;
        }
        seenLetters.add(char) //Agrega la letra char al conjunto
    }
    return true;
    //recorre y si encuentra letras sin duplicados devuelve true
}

/*
Ejercicio 3
Escribe una función que calcule el promedio de los números en una lista dada. Si la lista está vacía, la función debe devolver 0.

Ejemplo (entrada --> salida):

[1, 2, 3, 4, 5] --> 3 (promedio de los números)
[] --> 0 (lista vacía)
*/

function calcularPromedio(numeros){
    if (numeros.length === 0){
        return 0;
    }

    //Calcular la suma de todos los numeros de la lista
    const sum = numeros.reduce((acc,num) => acc + num, 0);
    //Calcular el promedio dividiendo la suma entre la cantidad de números
    const promedio = sum / numeros.length;

    return promedio;
}
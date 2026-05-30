//Ejercicio 1 – Números primos
for (let numero = 1; numero <= 50; numero++) {
    
    let divisores = 0; 

    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores++; 
        }
    }

    if (divisores === 2) {
        
        console.log("Número primo encontrado: " + numero);
        
        alert("Número primo encontrado: " + numero);
    }
}

//Ejercicio 2 – Tabla de multiplicar personalizada
let repetir;

do {
    let numero = parseInt(prompt("¿De qué número quieres ver la tabla de multiplicar?"));
    let resultado = "Tabla del " + numero + ":\n";

    for (let i = 1; i <= 12; i++) {
        let multiplicacion = numero * i;
        resultado += numero + " x " + i + " = " + multiplicacion + "\n";
    }

    alert(resultado);
    console.log(resultado);

    repetir = prompt("¿Deseas consultar otra tabla? (Escribe 'si' para continuar o 'no' para salir)").toLowerCase();

} while (repetir === "si");

alert("Gracias por usar la calculadora de tablas");


//Ejercicio 3 – Cajero automático
const SALDO_INICIAL = 500000; 
let saldoActual = SALDO_INICIAL;
let continuar = true;

alert("Bienvenido al Cajero Automático. Tu saldo inicial es: $" + saldoActual);

while (continuar && saldoActual > 0) {
    let retiro = parseFloat(prompt("Tu saldo es $" + saldoActual + ".\n¿Cuánto deseas retirar? (Escribe 0 para salir)"));

    if (retiro === 0) {
        continuar = false; 
    } else if (retiro > saldoActual) {
        alert("Error: Fondos insuficientes. Intenta retirar una cantidad menor.");
    } else if (retiro > 0) {
        saldoActual = saldoActual - retiro;
        alert("Retiro exitoso. Has retirado $" + retiro);
    } else {
        alert("Error: Ingresa un valor válido.");
    }
}

alert("Gracias por usar nuestro cajero. Tu saldo final es: $" + saldoActual);

//Ejercicio 4 – Promedio de notas
for (let estudiante = 1; estudiante <= 5; estudiante++) {
    alert("Ingresando datos del Estudiante #" + estudiante);
    
    let nota1 = parseFloat(prompt("Estudiante " + estudiante + " - Ingresa la nota 1 (0.0 a 5.0):"));
    let nota2 = parseFloat(prompt("Estudiante " + estudiante + " - Ingresa la nota 2 (0.0 a 5.0):"));
    let nota3 = parseFloat(prompt("Estudiante " + estudiante + " - Ingresa la nota 3 (0.0 a 5.0):"));

    let promedio = (nota1 + nota2 + nota3) / 3;

    if (promedio >= 3.0) {
        alert("Estudiante #" + estudiante + "\nPromedio: " + promedio.toFixed(1) + "\nEstado: APROBADO");
        console.log("Estudiante " + estudiante + ": Aprobado con " + promedio.toFixed(1));
    } else {
        alert("Estudiante #" + estudiante + "\nPromedio: " + promedio.toFixed(1) + "\nEstado: REPROBADO");
        console.log("Estudiante " + estudiante + ": Reprobado con " + promedio.toFixed(1));
    }
}

/*
Ejercicio 5 – Tienda de productos
Crea un programa que: simule la venta de productos. El usuario podrá registrar la compra
de varios artículos hasta que decida no comprar más. Se debe calcular el total de la
compra y aplicar un descuento del 10% si el valor supera los $100.000.
Ejercicio 6 – Juego del adivinador

Crea un programa que: genere un número aleatorio entre 1 y 20. El usuario intentará
adivinarlo y el ciclo repetirá los intentos hasta que lo logre. Cada vez que falle, el
programa debe indicar si el número buscado es mayor o menor que el ingresado.
Ejercicio 7 – Contador de pares e impares
Crea un programa que: permita al usuario ingresar 10 números. Al final, muestra cuántos
fueron pares y cuántos impares.
Ejercicio 8 – Control de acceso
Crea un programa que: solicite un usuario y contraseña. El programa debe permitir hasta
3 intentos; si el usuario falla en todos, mostrar un mensaje de “Acceso denegado”. Si
acierta, mostrar “Bienvenido”.*/

let totalCompra = 0
let decisiondecision
let  porcentajeDescuento= totalCompra * 0.10
while(decisiondecision != 2){
   decisiondecision  = parseInt(prompt("Ingrese #1 para registrar un producto comprado \n Ingrese #2 para salir"))
    if(decisiondecision == 1){
        let nombreProducto = prompt("Ingrese el nombre del producto")
let precioProducto = parseInt(prompt("Ingrese el precio del producto"))
totalCompra += precioProducto
    }
}
   console.log("Total de la compra " , totalCompra)
    if(totalCompra> 100000){
        porcentajeDescuento = totalCompra * 0.10
        totalCompra -= porcentajeDescuento
        console.log("El valor supera los $100.000, por ende obtiendes un decuento del 10%, valor total con descuento equivale a : ",totalCompra)
    }



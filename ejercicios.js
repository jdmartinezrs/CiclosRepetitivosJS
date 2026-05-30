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



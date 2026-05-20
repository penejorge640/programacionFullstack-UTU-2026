function ej1() {
  alert("Hola mundo");
  console.log("Hola mundo");
}
function ej2() {
  var nombre = prompt("¿Cómo te llamás?");
  alert("Hola " + nombre);
  console.log("Hola " + nombre);
}
function ej3() {
  var num1 = Number(prompt("Ingresá el primer número:"));
  var num2 = Number(prompt("Ingresá el segundo número:"));
  var suma = num1 + num2;
  alert("La suma es: " + suma);
  console.log("La suma es: " + suma);
}
function ej4() {
  var edad = Number(prompt("¿Cuántos años tenés?"));

  if (edad >= 18) {
    alert("Es mayor");
    console.log("Es mayor");
  } else {
    alert("Es menor");
    console.log("Es menor");
  }
}
function ej5() {
  var numero = Number(prompt("Ingresá un número:"));

  if (numero % 2 === 0) {
    alert(numero + " es par");
    console.log(numero + " es par");
  } else {
    alert(numero + " es impar");
    console.log(numero + " es impar");
  }
}
function ej6() {
  var a = Number(prompt("Ingresá el primer número:"));
  var b = Number(prompt("Ingresá el segundo número:"));
  var c = Number(prompt("Ingresá el tercer número:"));

  var mayor = a;

  if (b > mayor) {
    mayor = b;
  }

  if (c > mayor) {
    mayor = c;
  }

  alert("El número mayor es: " + mayor);
  console.log("El número mayor es: " + mayor);
}
function ej7() {
  var nota = Number(prompt("Ingresá una nota del 1 al 10:"));

  if (nota >= 1 && nota <= 4) {
    alert("Insuficiente");
    console.log("Insuficiente");
  } else if (nota >= 5 && nota <= 7) {
    alert("Aceptable");
    console.log("Aceptable");
  } else if (nota >= 8 && nota <= 10) {
    alert("Muy bien");
    console.log("Muy bien");
  } else {
    alert("La nota debe estar entre 1 y 10.");
    console.log("Nota fuera de rango.");
  }
}
function ej8() {
  var resultado = "";

  for (var i = 1; i <= 10; i++) {
    resultado = resultado + i + " ";
    console.log(i);
  }

  alert("Contador: " + resultado);
}
function ej9() {
  var pares = "";

  for (var i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      pares = pares + i + " ";
      console.log(i);
    }
  }

  alert("Números pares del 1 al 20: " + pares);
}
function ej10() {
  var contrasena = prompt("Ingresá la contraseña:");

  if (contrasena === "1234") {
    alert("Correcta");
    console.log("Contraseña correcta.");
  } else {
    alert("Incorrecta");
    console.log("Contraseña incorrecta.");
  }
}
function ej11() {
  var suma = 0;
  var numero = Number(prompt("Ingresá un número (0 para terminar):"));

  while (numero !== 0) {
    suma = suma + numero;
    numero = Number(prompt("Ingresá otro número (0 para terminar):"));
  }

  alert("La suma total es: " + suma);
  console.log("La suma total es: " + suma);
}
function ej12() {
  var num1 = Number(prompt("Ingresá el primer número:"));
  var num2 = Number(prompt("Ingresá el segundo número:"));
  var operacion = prompt("¿Qué operación querés hacer?\n+ suma\n- resta\n* multiplicación\n/ división");

  var resultado;

  if (operacion === "+") {
    resultado = num1 + num2;
    alert(num1 + " + " + num2 + " = " + resultado);

  } else if (operacion === "-") {
    resultado = num1 - num2;
    alert(num1 + " - " + num2 + " = " + resultado);

  } else if (operacion === "*") {
    resultado = num1 * num2;
    alert(num1 + " * " + num2 + " = " + resultado);

  } else if (operacion === "/") {
    if (num2 === 0) {
      alert("No se puede dividir por cero.");
      console.log("Error: división por cero.");
    } else {
      resultado = num1 / num2;
      alert(num1 + " / " + num2 + " = " + resultado);
    }

  } else {
    alert("Operación no reconocida. Usá +, -, * o /");
  }

  console.log("Resultado: " + resultado);
}

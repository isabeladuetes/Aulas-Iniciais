//1
let primeiroNumero = 36;
let segundoNumero = 6;
let operacao = '*';

switch (operacao) {
    case '+':
        console.log(`O resultado da soma é de ${primeiroNumero + segundoNumero}`);
        break;
    case '-':
        console.log(`O resultado da subtração é de ${primeiroNumero - segundoNumero}`);
        break;
    case '*':
        console.log(`O resultado da multiplicação é de ${primeiroNumero * segundoNumero}`);
        break;
    case '/':
        console.log(`O resultado da divisão é de ${primeiroNumero / segundoNumero}`);
        break;
    default:
        console.log("Operação invalida");
        break;
}


//2
let numero = 0;

if (numero > 0) {
    console.log("Esse número é positivo");
} else if (numero < 0) {
    console.log("Esse número é negativo");
} else {
    console.log("Esse número é igual a zero");
}


//3
let idade = 18;

if (idade >= 16) {
    console.log("Você pode votar!");
} else {
    console.log("Você ainda não tem idade prara votar");  
}


//4
let a = 10;
let b = 5;

if (a > 10) {
    console.log(`O número ${a} é maior que 10`);
}
if (a < 10) {
    console.log(`O número ${a} é menor que 10`);
}
if (b > 10) {
    console.log(`O número ${b} é maior que 10`);
}
if (b < 10) {
    console.log(`O número ${b} é menor que 10`);
}


//5
for (let i = 1; i <= 10; i++) {
    console.log(i);
    }


//6
let soma = 0;

for (let i = 1; i <= 5; i++) {
    soma += i;
    }
    console.log(`A soma dos números de 1 a 5 é: ${soma}`);


//7
for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`O número ${i} é par`);                
    }  
}

//8
let num = 8;

for (let i = 1; i <= 10; i++) {
let resultado = num * i;
console.log(`${num} x ${i} = ${resultado}`);
}


//9
for (let i = 0; i <= 20; i+= 2) {
    console.log(i);
}


//10
let i = 1;

while (i <= 5) {
console.log(i);
i++;
}


//11
let s = 1;

while (s<= 15) {
if (s % 2 !== 0) {
console.log(s);
}
s++;
}


//12
let number = 12;
let contagem = 0;

while (number <= 100) {
console.log(`Tentativa ${contagem + 1}: ${number}`);
number += 10;
contagem++;
}

console.log("Número maior que 100 digitado:", number);
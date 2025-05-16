let salario;

let aluguel;
let energia;
let supermercado;
let lazer;
let totalDespesas;
let saldo;

salario = 5000;
aluguel = 1200;
energia = 200;
supermercado = 1500;

totalDespesas = aluguel + energia + supermercado;

saldo = salario - totalDespesas;

if (saldo > 0) {
console.log("Você pode curtir a Festa da Uva em Vinhedo com este saldo: R$ " + saldo
    );
} else {
    console.log("I'm sorry! Sem grana!");
    
}
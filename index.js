// Exercício 1
console.log("Exercício 1");

let produto = "Arroz";
let quantidadeEstoque = 5;
let preco = 4.50;

console.log(`Na loja X, o ${produto} custa R$ ${preco.toFixed(2)}, aproveita que ainda temos ${quantidadeEstoque} unidades em estoque!`);

console.log("--------------------------------------------------");

// Exercício 2
console.log("Exercício 2");

let quantidadeProduto = 10;
if (quantidadeProduto > 0 ) {
    console.log("Produto disponível");
}else {
    console.log("Produto indisponível");
}

// Exercício 3
console.log("--------------------------------------------------");  
console.log("Exercício 3");

let idade = 18;
if (idade >= 18) {
    console.log("Cadastro aprovado");
}else if (idade >=13 && idade < 18) {
    console.log("Cadastro permitido com responsável");
}else {
    console.log("Cadastro não permitido");
}

// Exercício 4
console.log("--------------------------------------------------");  
console.log("Exercício 4");

let soma = 50 + 30 + 20;
let desconto = 10;

let resultado = soma - ( soma * (desconto / 100) );

console.log(`O valor com desconto é R$ ${resultado.toFixed(2)}`);

// Exercício 5
console.log("--------------------------------------------------");
console.log("Exercício 5");

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Exercício 6
console.log("--------------------------------------------------");
console.log("Exercício 6");

const produtos = ["camiseta", "notebook", "mouse", "cadeira"]
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Digite o nome do produto: ", (produto) => {
    if (produtos.includes(produto.toLowerCase())) {
        console.log("Produto encontrado")
    }else {
        console.log("Produto não encontrado")
    }
})

// Exercício 7
console.log("--------------------------------------------------");
console.log("Exercício 7");

const valores = [10, 50, 30, 80, 20];
const maior = Math.max(...valores);
console.log(`O maior valor do array é: ${maior}`);

// Exercício 8
console.log("--------------------------------------------------");
console.log("Exercício 8");
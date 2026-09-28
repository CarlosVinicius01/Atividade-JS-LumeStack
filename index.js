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

console.log("--------------------------------------------------");  
console.log("Exercício 4");
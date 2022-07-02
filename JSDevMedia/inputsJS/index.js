import entradaDados from 'readline-sync';

let nome = entradaDados.question('Digite seu nome: ');

console.log("Ola, " + nome);
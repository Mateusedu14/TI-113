/* 
Ex1: Crie uma função que lê um vetor de 5 números inteiros 
e mostre-os, considere que o usuário não pode informar letras,
palavras ou vazio. Alerte-o do erro e repita a leitura caso ocorra.
*/

function LerNumero() {

    let listaNumeros = [];

    for (let i = 0; i < 5; i++) {
        let numero = prompt("Informe um número:");
        while (isNaN(numero) || numero.trim() === "") {
            alert("O valor digitado não é um número, digite um número!");
            numero = prompt("Informe um número:");
        }
        listaNumeros.push(parseInt(numero));
    }
    return listaNumeros;
}

let lista = LerNumero();

alert(lista.join(","));
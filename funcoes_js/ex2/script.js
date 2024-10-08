/* 
Crie uma função que lê uma lista de 4 notas, mostre-as junto com a média no alerta,
considerando que o usuário não pode informar letras,
 palavras ou vazio. Alerte-o do erro e repita a leitura das notas caso ocorra.
 */

function LerNotas() {
    let = notas = [];
    let soma = 0;

    for (let i = 0; i < 4; i++) {
        let nota = prompt(`Informe a nota ${i+1}:`);

        while (isNaN(nota) || nota.trim() === "") {
            alert("Isso não é um número, informe um número.");
            nota = prompt(`Informe a nota ${i+1}:`);
        }

        nota = parseFloat(nota);
        notas.push(nota);
        soma += nota;
    }

    let media = soma / 4;
    alert(`Notas: ${notas.join(", ")} \nMédia: ${media.toFixed(2)}`);

}

LerNotas();
/* 
Ex1: Crie uma função que lê um vetor de 5 números inteiros 
e mostre-os, considere que o usuário não pode informar letras,
palavras ou vazio. Alerte-o do erro e repita a leitura caso ocorra.
*/

function VerificarNumero(val) {

    let certo = true;

    if (val.trim() == '') {
        alert("Não há nenhum número!");
        certo = false;

    } else if (isNaN(val)) {

        alert("Só é permitido números!");
        certo = false;
    }

    return certo;

}

function ExibirNumeros(listanum) {
    let mensagem = "";
    for (let i = 0; i < listanum.length; i++) {

        let ultimaPosicao = (listanum.length - 1); 
        
        if(i == ultimaPosicao)
            mensagem += listanum[i] + ".";
        else
            mensagem += listanum[i] + ", ";    
    }
    alert(mensagem);
}

function LerNumero() {

    let lista = [];
    let passou = true;
    do {
        for (let i = 0; i < 5; i++) {
            let valor = prompt("Informe um número: ");
            passou = VerificarNumero(valor);
            if (passou == false) {
                break;
            }

            lista.push(parseInt(valor));
        }
    } while (passou == false);

    ExibirNumeros(lista);

}


LerNumero(); 
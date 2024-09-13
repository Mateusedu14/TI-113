/*
Crie um algoritmo usando funções que faça uma leitura de 10 letras em um vetor
e após verificar quantas vogais foram lidas, mostre somente consoantes no alerta..
*/
// função para ler 10 letras do usuário

// Função para ler 10 letras do usuário
function lerLetras() {
    let letras = []; // Vetor para armazenar as letras
    for (let i = 0; i < 10; i++) {
        let letra = prompt("Digite uma letra:").toLowerCase(); // Lê a letra e converte para minúscula
        // Verifica se o input é uma única letra
        if (letra.length === 1 && /[a-zA-z]/.test(letra)) {
            letras.push(letra); // Adiciona a letra ao vetor
        } else {
            alert("Isso não é uma letra, digite uma letra.");
            i--; // Decrementa o índice para repetir a leitura
        }
    }
    return letras;
}

// Função para contar as vogais e exibir as consoantes
function processarLetras(letras) {
    const vogais = "aeiou"; // String contendo todas as vogais
    let consoantes = []; // Vetor para armazenar as consoantes
    let numeroDeVogais = 0; // Contador de vogais

    for (let i = 0; i < letras.length; i++) {
        let letra = letras[i];
        let eVogal = false;

        // Verifica se a letra é uma vogal
        for (let j = 0; j < vogais.length; j++) {
            if (letra === vogais[j]) {
                eVogal = true;
                break; // Sai do loop se encontrar uma vogal
            }
        }

        if (eVogal) {
            numeroDeVogais++; // Incrementa o contador de vogais
        } else {
            consoantes.push(letra); // Adiciona a consoante ao vetor
        }
    }

    alert("Número de vogais: " + numeroDeVogais); // Mostra o número de vogais
    alert("Consoantes: " + consoantes.join(", ")); // Mostra as consoantes
}

// Função principal
function main() {
    let letras = lerLetras(); // Lê as letras
    processarLetras(letras); // Processa as letras e exibe resultados
}

// Executa a função principal
main();

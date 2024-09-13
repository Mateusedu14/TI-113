/*
Crie um algoritmo usando funções que tenha um cadastro de nomes e
salários bruto de até 50 pessoas, há um menu de continuação ou
parada do cadastro e na parada final, mostre os nomes,
 salários brutos e os salários líquidos de todos que foram lidos,
considerando 10% de INSS a descontar.
*/

// Array para armazenar os dados
let cadastro = [];

// Função para adicionar uma pessoa ao cadastro
function adicionarPessoa(nome, salarioBruto) {
    if (cadastro.length < 50) {
        cadastro.push({ nome: nome, salarioBruto: salarioBruto });
    } else {
        console.log('Cadastro está cheio. Não é possível adicionar mais pessoas.');
    }
}

// Função para calcular o salário líquido
function calcularSalarioLiquido(salarioBruto) {
    const descontoINSS = 0.10;
    return salarioBruto - (salarioBruto * descontoINSS);
}

// Função para exibir todos os dados
function exibirDados() {
    console.log('Cadastro de Pessoas:');
    cadastro.forEach(pessoa => {
        const salarioLiquido = calcularSalarioLiquido(pessoa.salarioBruto);
        console.log(`Nome: ${pessoa.nome}, Salário Bruto: R$${pessoa.salarioBruto.toFixed(2)}, Salário Líquido: R$${salarioLiquido.toFixed(2)}`);
    });
}

// Função principal para o menu de cadastro
function menuCadastro() {
    let continuar = true;
    while (continuar && cadastro.length < 50) {
        // Solicitar o nome e o salário bruto da pessoa
        let nome = prompt('Digite o nome da pessoa:');
        let salarioBruto = parseFloat(prompt('Digite o salário bruto da pessoa:'));

        // Adicionar a pessoa ao cadastro
        adicionarPessoa(nome, salarioBruto);

        // Perguntar se deseja continuar
        continuar = confirm('Deseja cadastrar outra pessoa?');
    }

    // Exibir todos os dados
    exibirDados();
}

// Iniciar o menu de cadastro
menuCadastro();

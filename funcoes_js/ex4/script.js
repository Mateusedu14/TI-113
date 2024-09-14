/*
Crie um algoritmo usando funções que tenha um cadastro de nomes e
salários bruto de até 50 pessoas, há um menu de continuação ou
parada do cadastro e na parada final, mostre os nomes,
 salários brutos e os salários líquidos de todos que foram lidos,
considerando 10% de INSS a descontar.
*/

// Função para calcular o salário líquido após o desconto de INSS
function calcularSalarioLiquido(salarioBruto) {
    const descontoINSS = 0.10; // 10%
    return salarioBruto - (salarioBruto * descontoINSS);
}
 
// Função principal para o gerenciamento do cadastro
function gerenciarCadastro() {
    let cadastro = [];
    let continuarCadastro = true;
 
    while (continuarCadastro && cadastro.length < 50) {
        let nome = prompt("Digite o nome da pessoa:");
        let salarioBruto = parseFloat(prompt("Digite o salário bruto da pessoa:"));
 
        // Validar entrada
        if (nome.trim() === "" || isNaN(salarioBruto) || salarioBruto < 0) {
            alert("Entrada inválida. Por favor, insira um nome válido e um salário bruto não negativo.");
            continue;
        }
 
        // Adicionar ao cadastro
        cadastro.push({ nome, salarioBruto });
 
        // Verificar se o usuário deseja continuar
        continuarCadastro = confirm("Deseja cadastrar outra pessoa?");
    }
 
    // Mostrar os dados cadastrados em um alerta
    let resultado = "Cadastro Completo:\n";
    resultado += "Nome | Salário Bruto | Salário Líquido com desconto de 10% do INSS\n";
 
    cadastro.forEach(({ nome, salarioBruto }) => {
        let salarioLiquido = calcularSalarioLiquido(salarioBruto);
        resultado += `${nome} | ${salarioBruto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} | ${salarioLiquido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}\n`;
    });
 
    alert(resultado);
}
 
// Chamar a função principal para iniciar o cadastro
gerenciarCadastro();

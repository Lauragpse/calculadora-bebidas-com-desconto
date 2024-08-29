function calcularConta() {
    const valorAntesHappyHour = parseFloat(document.getElementById("antesHappyHour").value);
    const quantidadeAntes = parseInt(document.getElementById("quantidadeAntes").value);
    const quantidadeApos = parseInt(document.getElementById("quantidadeApos").value);

    // Verificar se os valores são válidos
    if (isNaN(valorAntesHappyHour) || isNaN(quantidadeAntes) || isNaN(quantidadeApos)) {
        document.getElementById("resultado").innerHTML = "<p>Por favor, insira valores válidos.</p>";
        return;
    }

    // Cálculos
    const totalAntes = valorAntesHappyHour * quantidadeAntes;
    const totalApos = valorAntesHappyHour * quantidadeApos; // Usando o mesmo valor antes do Happy Hour
    const subtotal = totalAntes + totalApos;

    // Aplicar 25% de desconto no subtotal
    const desconto = 0.25 * subtotal;
    const precoComDesconto = subtotal - desconto;

    // Calcular taxa de serviço de 10% do total com desconto
    const taxaDeServico = 0.10 * precoComDesconto;
    const valorTotal = precoComDesconto + taxaDeServico;

    const resultado = `
    <h2>Recibo</h2>
    <p class="subtotal">Subtotal: R$ ${subtotal.toFixed(2)}</p>
    <p class="desconto">Desconto (25%): R$ ${desconto.toFixed(2)}</p>
    <p class="preco-com-desconto">Preço com Desconto: R$ ${precoComDesconto.toFixed(2)}</p>
    <p class="taxa-de-servico">Taxa de Serviço (10%): R$ ${taxaDeServico.toFixed(2)}</p>
    <p class="valor-total">Valor Total: R$ ${valorTotal.toFixed(2)}</p>
`;
    document.getElementById("resultado").innerHTML = resultado;

}




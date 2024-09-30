document.getElementById('quinzenaForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let quinzenas = parseInt(document.getElementById('quinzenas').value);
    let percentual = parseFloat(document.getElementById('percentual').value) / 100;
    let valorBase = parseFloat(document.getElementById('valorBase').value);
    let saque = parseFloat(document.getElementById('saque').value) || 0; // Valor do saque, opcional

    // Definir a cotação fixa de R$ 5,13
    let cotacaoDolar = 5.13;

    let resultadoEmDolares = valorBase;
    
    // Calcula o valor com o percentual para cada quinzena e subtrai o saque (se houver)
    for (let i = 0; i < quinzenas; i++) {
        resultadoEmDolares += resultadoEmDolares * percentual;
        if (saque > 0) {
            resultadoEmDolares -= saque;
        }
        // Garante que o valor não seja negativo após subtrair o saque
        if (resultadoEmDolares < 0) {
            resultadoEmDolares = 0;
            break;
        }
    }

    // Converter o resultado final de dólares para reais
    let resultadoEmReais = resultadoEmDolares * cotacaoDolar;

    // Exibir os valores em dólares e reais
    document.getElementById('resultado').innerHTML = `
        Resultado Final em Dólares: $${resultadoEmDolares.toFixed(2)}<br>
        Resultado Final em Reais: R$${resultadoEmReais.toFixed(2)} (Cotação: R$${cotacaoDolar.toFixed(2)})
    `;
});

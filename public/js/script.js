document.getElementById('calculateButton').addEventListener('click', function() {
    const percentage = parseFloat(document.getElementById('percentage').value);
    const total = parseFloat(document.getElementById('total').value);
    const result = (percentage / 100) * total;
    
    if (!isNaN(result)) {
        const formattedResult = result % 1 === 0 ? result.toFixed(0) : result.toFixed(2);
        document.getElementById('result').textContent = "Resultado: " + formattedResult;
    } else {
        document.getElementById('result').textContent = ""; // Si no hay solución, mostrar nada
    }
});

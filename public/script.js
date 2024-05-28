document.getElementById('calculateButton').addEventListener('click', function() {
    const percentage = document.getElementById('percentage').value;
    const total = document.getElementById('total').value;
    const result = (percentage / 100) * total;
    document.getElementById('result').textContent = result;
});

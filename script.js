function toggleButton(button, valor) {
    var totalInput = document.getElementById('total');
    var totalValue = parseFloat(totalInput.value.replace('R$: ', '')) || 0;
    totalValue = button.classList.contains('disabled') ? totalValue - valor : totalValue + valor;
    totalInput.value = 'R$: ' + Math.max(0, totalValue).toFixed(0);
    button.classList.toggle('disabled');
}
function copyToClipboard() {
var selectedButtons = document.querySelectorAll('.button.disabled');
var buttonText = Array.from(selectedButtons).map(function(button) {
return button.innerText;
}).join('\n');

var cliente = window.prompt('Digite o nome do cliente:');
var mecanico = window.prompt('Digite o nome do mecânico:');
var idMecanico = window.prompt('Digite o ID do mecânico:');
var carro = window.prompt('Digite o nome do carro:');

var clipboardText = `\nNome do cliente: ${cliente}\nNome do mecânico: ${mecanico}\nID do mecânico: ${idMecanico}\nNome do carro: ${carro}\nItens:\n${buttonText}\n`;

navigator.clipboard.writeText(clipboardText)
.then(() => {
alert('Textos copiados para a Área de Transferência!');
})
.catch(err => {
console.error('Erro ao copiar para a área de transferência:', err);
});
}
window.onload = function () {
    showCalculator();
};
function toggleButton(button, valor) {
    var totalInput = document.getElementById('total');
    var totalValue = parseFloat(totalInput.value.replace('R$: ', '')) || 0;
    totalValue = button.classList.contains('disabled') ? totalValue - valor : totalValue + valor;
    totalInput.value = 'R$: ' + Math.max(0, totalValue).toFixed(0);
    button.classList.toggle('disabled');
}
window.onload = function () {
    showCalculator();
};
  function showCalculator() {
    document.getElementById('calculator-container').style.display = 'block';
}
function limparCampos() {
    document.getElementById('total').value = '';
    document.querySelectorAll('.button').forEach(function (button) {
        button.classList.remove('disabled');
    });
}
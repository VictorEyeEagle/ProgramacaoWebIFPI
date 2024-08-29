function calcularRaiz(valor) {
    var raiz = Math.sqrt(valor);
    alert("A raiz de " + valor + " é " + raiz);
}

function iniciarContagem() {
    var numero = parseInt(prompt("Digite um número para contar até ele:"));
    var resultadoDiv = document.getElementById("resultado");

    if (isNaN(numero) || numero <= 0) {
        alert("Por favor, digite um número válido.");
        return;
    }

    resultadoDiv.innerHTML = "";

    for (var i = 1; i <= numero; i++) {
        resultadoDiv.innerHTML += i + " ";
    }
}

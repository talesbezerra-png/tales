let total = parseFloat(localStorage.getItem("totalPedido"));
let totalComDesconto = total;

document.getElementById("totalPedido").textContent = total.toFixed(2);

function aplicarCupom() {
    let cupom = document.getElementById("cupom").value;

    if (cupom === "talin10") {
        totalComDesconto = total * 0.9; // 10% de desconto
        document.getElementById("totalPedido").textContent = totalComDesconto.toFixed(2);
        alert("Cupom aplicado! Você ganhou 10% de desconto.");
    } else {
        alert("Cupom inválido.");
    }
}

function confirmarPedido() {
    alert("Pedido confirmado!\nValor total: R$ " + totalComDesconto.toFixed(2));

    localStorage.clear();
    window.location.href = "index.html";
}
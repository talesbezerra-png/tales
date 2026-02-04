let total = 0;

const precos = {
    "Hambúrguer Artesanal": 20,
    "Hambúrguer Duplo": 28,
    "Hambúrguer Vegetariano": 22
};

function adicionarPedido(nome) {
    let lista = document.getElementById("listaPedidos");
    let itens = lista.getElementsByTagName("li");

    for (let i = 0; i < itens.length; i++) {
        if (itens[i].dataset.nome === nome) {
            let qtd = parseInt(itens[i].dataset.qtd);
            qtd++;

            itens[i].dataset.qtd = qtd;
            itens[i].querySelector(".texto").textContent = nome + " (" + qtd + "x)";

            total += precos[nome];
            atualizarTotal();
            return;
        }
    }

    let item = document.createElement("li");
    item.dataset.nome = nome;
    item.dataset.qtd = 1;

    item.innerHTML = `
        <span class="texto">${nome} (1x)</span>
        <button onclick="removerPedido('${nome}')">-</button>
    `;

    lista.appendChild(item);

    total += precos[nome];
    atualizarTotal();
}

function removerPedido(nome) {
    let lista = document.getElementById("listaPedidos");
    let itens = lista.getElementsByTagName("li");

    for (let i = 0; i < itens.length; i++) {
        if (itens[i].dataset.nome === nome) {
            let qtd = parseInt(itens[i].dataset.qtd);
            qtd--;

            total -= precos[nome];

            if (qtd <= 0) {
                lista.removeChild(itens[i]);
            } else {
                itens[i].dataset.qtd = qtd;
                itens[i].querySelector(".texto").textContent = nome + " (" + qtd + "x)";
            }

            atualizarTotal();
            return;
        }
    }
}

function atualizarTotal() {
    document.getElementById("total").textContent = total.toFixed(2);
}

function finalizarPedido() {
    if (total === 0) {
        alert("Você não adicionou nenhum pedido!");
        return;
    }

    localStorage.setItem("totalPedido", total.toFixed(2));
    window.location.href = "pagamento.html";
}
{
    alert("Pedido finalizado!\nTotal: R$ " + total.toFixed(2));

    document.getElementById("listaPedidos").innerHTML = "";
    total = 0;
    atualizarTotal();
}
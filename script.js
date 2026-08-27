let carrinho = [];

const botaoXSalada = document.getElementById("btn-xsalada");
const itensCarrinho = document.getElementById("itens-carrinho");
const totalCarrinho = document.getElementById("total-carrinho");

botaoXSalada.addEventListener("click", function () {

    carrinho.push({
        nome: "X-Salada",
        preco: 25.00
    });

    atualizarCarrinho();
});

function atualizarCarrinho() {

    itensCarrinho.innerHTML = "";

    let total = 0;

    carrinho.forEach(function (produto) {

        const item = document.createElement("p");

        item.textContent =
            produto.nome + " - R$ " + produto.preco.toFixed(2);

        itensCarrinho.appendChild(item);

        total = total + produto.preco;
    });

    totalCarrinho.textContent =
        "Total: R$ " + total.toFixed(2);
}
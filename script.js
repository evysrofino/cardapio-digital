let carrinho = [];

const botaoXSalada = document.getElementById("btn-xsalada");

botaoXSalada.addEventListener("click", function () {

    carrinho.push({
        nome: "X-Salada",
        preco: 25.00
    });

    console.log(carrinho);

    alert("X-Salada adicionado ao pedido!");
});
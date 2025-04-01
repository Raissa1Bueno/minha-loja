let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

function adicionarAoCarrinho(nomeProduto, precoProduto) {
    const produto = {
        nome: nomeProduto,
        preco: precoProduto
    };
    
    carrinho.push(produto);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    alert(`${nomeProduto} foi adicionado ao carrinho!`);
}

function mostrarCarrinho() {
    const carrinhoContainer = document.getElementById('carrinho');
    
    if (carrinho.length === 0) {
        carrinhoContainer.innerHTML = '<p>Seu carrinho está vazio.</p>';
    } else {
        carrinhoContainer.innerHTML = carrinho.map(item => {
            return `<p>${item.nome} - R$ ${item.preco.toFixed(2)}</p>`;
        }).join('');
        
        const total = carrinho.reduce((acc, item) => acc + item.preco, 0);
        carrinhoContainer.innerHTML += `<p>Total: R$ ${total.toFixed(2)}</p>`;
        
        document.getElementById('finalizar-compra').disabled = false;
    }
}

// Exibe o carrinho na página de carrinho ao carregar
if (document.getElementById('carrinho')) {
    mostrarCarrinho();
}

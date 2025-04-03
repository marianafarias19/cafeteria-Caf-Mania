// Seleciona os elementos do modal e da máscara de fundo
const modal = document.querySelector(".modal")
const mascara = document.querySelector(".mascara-modal")

// Função para exibir o modal
function mostrarModal(){
    modal.style.opacity = "1"; // Define a opacidade do modal para 1 (visível)
    modal.style.visibility = "visible"; // Torna o modal visível
    mascara.style.visibility = "visible"; // Torna a máscara visível
    mascara.style.opacity = "1"; // Define a opacidade da máscara para 1 (visível)
}

// Função para esconder o modal
function esconderModal() {
    modal.style.opacity = "0"; // Define a opacidade do modal para 0 (invisível)
    modal.style.visibility = "hidden"; // Torna o modal invisível
    mascara.style.visibility = "hidden"; // Torna a máscara invisível
    mascara.style.opacity = "0"; // Define a opacidade da máscara para 0 (invisível)
}

// Array que armazena os itens do carrinho
const carrinho = [];

// Função para adicionar um item ao carrinho
function adicionarAoCarrinho(produto, preco) {
    carrinho.push({produto, preco}); // Adiciona um objeto com nome e preço ao array
    atualizarCarrinho(); // Atualiza a interface do carrinho
}

// Função para atualizar a exibição do carrinho
function atualizarCarrinho() {
    const lista = document.getElementById('lista-carrinho'); // Seleciona a lista do carrinho
    const totalSpan = document.getElementById('total'); // Seleciona o elemento que exibe o total
    lista.innerHTML = ''; // Limpa a lista antes de atualizá-la
    let total = 0; // Variável para armazenar o total

    // Percorre os itens do carrinho e os exibe na lista
    carrinho.forEach((item, index) => {
        let li = document.createElement('li'); // Cria um novo item de lista
        li.textContent = `${item.produto} - R$ ${item.preco.toFixed(2)}`; // Define o texto do item

        let btnRemover = document.createElement('button'); // Cria um botão para remover o item
        btnRemover.textContent = 'Remover';
        btnRemover.onclick = () => removerDoCarrinho(index); // Define a função de remoção ao clicar

        li.appendChild(btnRemover); // Adiciona o botão ao item da lista
        lista.appendChild(li); // Adiciona o item à lista do carrinho
        total += item.preco; // Soma o preço do item ao total
    });

    totalSpan.textContent = total.toFixed(2); // Atualiza o valor total na interface
}

// Função para remover um item do carrinho
function removerDoCarrinho(index) {
    carrinho.splice(index, 1); // Remove o item pelo índice
    atualizarCarrinho(); // Atualiza a interface do carrinho
}

// Função para limpar todos os itens do carrinho
function limparCarrinho() {
    carrinho.length = 0; // Esvazia o array do carrinho
    atualizarCarrinho(); // Atualiza a interface do carrinho
}

let totalGeral = 0; 
function adicionar() {
    //pegar valores
    let produtos = document.getElementById('produto').value; 
    let nomeDoProduto = produtos.split('-')[0];
    let valorDoProduto = produtos.split('R$')[1];
    let quantidade = parseInt(document.getElementById('quantidade').value);

        // Verificar se o produto selecionado é válido
        if (!produtos || produtos.trim() === "") {
            alert("Selecione um produto válido.");
            return;
        }
    
    
        // Verificar se a quantidade inserida é válida
        if (isNaN(quantidade) || quantidade <= 0) {
            alert("Insira uma quantidade válida.");
            return;
        }
    //somar
    let preco = valorDoProduto * quantidade;
    //adicionar ao carrinho
    atualizarElemento('lista-produtos', `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeDoProduto} <span class="texto-azul">R$${preco}</span>
        </section>`, 'adicionar');
    //somar o total
    somaTotal(preco);
}

function somaTotal(preco) {
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total'); 
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = '';
}

function atualizarElemento(id, texto, operacao) {
    let elemento = document.getElementById(id);

    // Atualiza o conteúdo com base na operação
    if (operacao === 'adicionar') {
        elemento.innerHTML += texto; // Adiciona ao conteúdo existente
    } else if (operacao === 'substituir') {
        elemento.innerHTML = texto; // Substitui o conteúdo existente
    }
}

function limpar() {
    atualizarElemento('lista-produtos', '', 'substituir');
    atualizarElemento('valor-total', 0, 'substituir');
}

let numeros = ("4, 7 , 8 , 10, 25");
let numerosSeparados = numeros.split(',')[0-4];
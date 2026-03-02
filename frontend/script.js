const API_URL = 'http://localhost:3000';

// Função para enviar o pedido (equivalente ao adicionarPokemon)
async function fazerPedido() {
    const endereco = document.getElementById('endereco').value;
    const tipoPedido = document.getElementById('tipoPedido').value;

    if (!endereco) {
        alert("Por favor, digite seu endereço!");
        return;
    }

    try {
        const resposta = await fetch(`${API_URL}/pedido`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ endereco, tipoPedido })
        });

        const dados = await resposta.json();
        alert(dados.mensagem || "Pedido enviado com sucesso!");

    } catch (erro) {
        console.error("Erro ao fazer pedido:", erro);
        alert("Erro ao conectar com o servidor.");
    }
}

// Função para listar os pedidos (equivalente ao obterPokemon)
async function obterPedidos() {
    try {
        const resposta = await fetch(`${API_URL}/usuarios`); // Rota do seu professor
        const dados = await resposta.json();

        // Supondo que você tenha uma lista de pedidos no seu HTML
        const lista = document.getElementById('lista-pedidos');
        if (!lista) return; 

        lista.innerHTML = '';

        dados.forEach((usuario) => {
            const li = document.createElement('li');
            li.innerHTML = `
                Usuário: ${usuario.nome} - Email: ${usuario.email} 
                <button onclick="atualizarUsuario(${usuario.id})">Editar</button> 
                <button onclick="deletarUsuario(${usuario.id})">Remover</button>
            `;
            lista.appendChild(li);
        });

    } catch (erro) {
        console.log("Erro ao obter dados:", erro);
    }
}

// Função para deletar (equivalente ao deletarPokemons)
async function deletarUsuario(id) {
    try {
        const resposta = await fetch(`${API_URL}/usuarios/${id}`, { 
            method: 'DELETE' 
        });
        
        if (resposta.status === 204) {
            alert("Usuário deletado com sucesso!");
            obterPedidos(); // Recarrega a lista
        }
    } catch (erro) {
        alert("Erro ao deletar:", erro);
    }
}

// Função para atualizar (equivalente ao atualizarPokemon)
async function atualizarUsuario(id) {
    const novoNome = prompt("Digite o novo nome:");
    if (!novoNome) return;

    try {
        const resposta = await fetch(`${API_URL}/usuarios/${id}`, { 
            method: 'PUT', // Em APIs reais usamos PUT ou PATCH para atualizar
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome: novoNome })
        });
        
        const dados = await resposta.json();
        alert("Atualizado com sucesso!");
        obterPedidos();
    } catch (erro) {
        alert("Erro ao atualizar:", erro);
    }
}

// --- Lógica de Navegação (Menu Smooth Scroll) ---
document.querySelectorAll('.links-cabecalho a').forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
document.addEventListener("DOMContentLoaded", function() {
    
    window.fazerPedido = function() {
        const endereco = document.getElementById('search-location').value;
        const tipoPedido = document.getElementById('order-type').value;

        if (endereco.trim() === "") {
            alert("Por favor, digite seu endereço para continuar!");
            document.getElementById('search-location').focus();
            return;
        }

        const destino = document.getElementById('sessao-lanches');
        if (destino) {
            destino.scrollIntoView({ behavior: 'smooth' });
        }
    };
});
});
const produtos = [
    { id: 1, nome: "X-Burger", preco: 20 }
    
  ];
  
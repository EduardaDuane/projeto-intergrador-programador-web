const API_URL = 'http://localhost:3000/usuarios'; 

document.addEventListener('DOMContentLoaded', () => {
    fetchBurgers();
});

async function fetchBurgers() {
    try {
        const response = await fetch(API_URL);
        const burgers = await response.json();
        renderBurgers(burgers);
    } catch (error) {
        console.error('Erro ao buscar cardápio:', error);
        // Exemplo caso o servidor esteja desligado:
        renderBurgers([{nome: "Hambúrguer master", preco: "50,00", id: 0}]);
    }
}

function renderBurgers(burgers) {
    const burgerList = document.getElementById('burger-list');
    burgerList.innerHTML = '';

    burgers.forEach(item => {
        // Criamos a estrutura que o seu CSS horizontal espera
        const card = `
            <div class="burger-card" onclick="addToCart(${item.id})">
                <div class="burger-info">
                    <div>
                        <h3>${item.nome || 'Hambúrguer Gourmet'}</h3>
                        <p class="burger-description">
                            ${item.email || 'Delicioso hambúrguer artesanal preparado com ingredientes selecionados e muito sabor.'}
                        </p>
                    </div>
                    <span class="burger-price">A partir de R$ ${item.preco || '34,90'}</span>
                </div>
                <div class="burger-img-wrapper">
                    <img src="https://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG4133.png" alt="${item.nome}">
                </div>
            </div>
        `;
        burgerList.innerHTML += card;
    });
}

function addToCart(id) {
    if(id === 0) return;
    alert('Hambúrguer adicionado ao carrinho! ID: ' + id); 
}


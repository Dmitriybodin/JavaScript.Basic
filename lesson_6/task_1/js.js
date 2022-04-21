const cartItem = {
    render(good) {
        return `<div class="good">
                    <div><b>Наименование</b>: ${good.name}</div>
                    <div><b>Цена за шт.</b>: ${good.price}</div>
                    <div><b>Количество</b>: ${good.count}</div>
                    <div><b>Стоимость</b>: ${good.count * good.price}</div>
                </div>`;
    }
}
const catalogItem = {
    render(good) {
        return `<div class="good">
                    <div><b>Наименование</b>: ${good.name}</div>
                    <div><b>Цена за шт.</b>: ${good.price}</div>
                    <button class="add-good" data-id="${good.id}">Добавить в корзину</button>
                </div>`;
    }
}

const catalog = {
    catalogBlock: null,
    shoppingCart: null,
    catalogItem,
    goods: [
        {
            id: 1,
            name: 'Микрофон',
            price: 750,
        },
        {
            id: 2,
            name: 'Наушники',
            price: 500,
        },
        {
            id: 3,
            name: 'Колонки',
            price: 1000,
        },
    ],
    init() {
        this.catalogBlock = document.querySelector('.catalog');
        this.shoppingCart = shoppingCart;
        this.render();
        this.catalogBlock.addEventListener('click', event => this.addToBasket(event));
    },

    addToBasket(event) {
        if (!event.target.classList.contains('add-good')) return;
        const idGood = +event.target.dataset.id;
        const goodAdd = this.goods.find((product) => product.id === idGood);
        this.shoppingCart.addToBasket(goodAdd);
    },

    render() {
        this.goods.forEach(good => {
            this.catalogBlock.insertAdjacentHTML('beforeend', this.catalogItem.render(good));
        });
        },
};

const shoppingCart = {
    cartListBlock: null,
    cartButton: null,
    cartItem,
    goods: [
        {
            id: 1,
            name: 'Микрофон',
            price: 750,
            count: 2
        },
        {
            id: 2,
            name: 'Наушники',
            price: 500,
            count: 3,
        },

    ],
    init() {
        this.cartListBlock = document.querySelector('.cart-list');
        this.cartButton = document.querySelector('.cart-btn');
        this.cartButton.addEventListener('click', this.clearCart.bind(this));

        this.render();
    },
    render() {
        this.cartListBlock.innerHTML = '';
        if (this.goods.length) {
            this.goods.forEach(good => {
                this.cartListBlock.insertAdjacentHTML('beforeend', this.cartItem.render(good));
            });
            this.cartListBlock.insertAdjacentHTML('beforeend', `В корзине ${this.goods.length} 
            товара(-ов) на сумму ${this.getCartPrice()} рублей`);
        } else {
            this.cartListBlock.textContent = 'Корзина пуста';
        }
    },

    addToBasket(good) {
            const goodCheck = this.goods.find((product) => good.id === product.id);
            if (goodCheck) {
                goodCheck.count++;
            } else {
                this.goods.push({
                    id: good.id,
                    name: good.name,
                    price: good.price,
                    count: 1});
            }
            this.render();

    },
    getCartPrice() {
        return this.goods.reduce(function (price, good) {
            return price + good.price * good.count;
        }, 0);
    },
    clearCart() {
        this.goods = [];
        this.render();
    },
};
catalog.init();
shoppingCart.init();

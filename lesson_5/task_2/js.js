const cartItem = {
    render(good) {
        return `<div class="good">
                    <div><b>Наименование</b>: ${good.good}</div>
                    <div><b>Цена за шт.</b>: ${good.price}</div>
                    <div><b>Количество</b>: ${good.count}</div>
                    <div><b>Стоимость</b>: ${good.count * good.price}</div>
                </div>`;
    }
}

const shoppingCart = {
    cartListBlock: null,
    cartButton: null,
    cartItem,
    goods: [
        {
            good: 'Микрофон',
            price: 750,
            count: 2
        },
        {
            good: 'Наушники',
            price: 500,
            count: 3,
        },
        {
            good: 'Колонки',
            price: 1000,
            count: 5,
        },
    ],
    init() {
        this.cartListBlock = document.querySelector('.cart-list');
        this.cartButton = document.querySelector('.cart-btn');
        this.cartButton.addEventListener('click', this.clearCart.bind(this));

        this.render();
    },
    render() {
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

shoppingCart.init();

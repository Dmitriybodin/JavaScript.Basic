/*
Task 2
2.Продолжить работу с интернет-магазином:
2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
2.2. Реализуйте такие объекты.
2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.
 */

const shoppingCart = {
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
        }
    ],
    getTotalPrice() {
        return this.goods.reduce((total, cartItem) => total + cartItem.price * cartItem.count, 0);
    }
};

console.log(shoppingCart.getTotalPrice());

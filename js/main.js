var app = new Vue({
    el: "article",  
    data: {
        products: [
            { id: 1, title: 'Грейпфрут Стар Рубі', short_text: 'Червоний та солодкий', image: 'grape1.jpg', desc: 'Стар Рубі має насичений червоний колір м’якоті та тонку шкірку.' },
            { id: 2, title: 'Грейпфрут Марш', short_text: 'Класичний білий сорт', image: 'grape2.jpg', desc: 'Безкісточковий сорт із жовтою м’якоттю та приємною кислинкою.' },
            { id: 3, title: 'Грейпфрут Дункан', short_text: 'Дуже соковитий', image: 'grape3.jpg', desc: 'Один із найстаріших сортів, ідеальний для приготування соку.' },
            { id: 4, title: 'Грейпфрут Полум_я', short_text: 'Великий плід', image: 'grape4.jpg', desc: 'Відрізняється великим розміром та червоним відтінком.' },
            { id: 5, title: 'Грейпфрут Оро Бланко', short_text: 'Гібрид з помело', image: 'grape5.jpg', desc: 'Майже позбавлений гіркоти, дуже солодкий десертний сорт.' }
        ],
        product: [], 
        btnVisible: 0 
    },
    mounted: function() {
        this.getProduct();
        this.checkInCart();
        console.log(window.localStorage.getItem('prod')); // 
    },
    methods: {
        getProduct: function() {
            if(window.location.hash) {
                var id = window.location.hash.replace('#', '');
                if(this.products && this.products.length > 0) {
                    for(i in this.products) {
                        if(this.products[i] && this.products[i].id && id == this.products[i].id) {
                            this.product = this.products[i];
                        }
                    }
                }
            }
        },
        addToCart: function(id) {
            var cart = [];
            if(window.localStorage.getItem('cart')) {
                cart = window.localStorage.getItem('cart').split(',');
            }

            if(cart.indexOf(String(id)) == -1) {
                cart.push(id);
                window.localStorage.setItem('cart', cart.join());
                this.btnVisible = 1;
            }
        },
        checkInCart: function() {
            if(this.product && this.product.id && window.localStorage.getItem('cart').split(',').indexOf(String(this.product.id)) != -1) {
                this.btnVisible = 1;
            }
        }
    }
});
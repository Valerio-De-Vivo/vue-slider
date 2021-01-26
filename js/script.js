var app = new Vue ({
    el: '#slider-container',
    data: {
        counter: 0,
        img: [
            'background-image: url(css/img/1.jpg)',
            'background-image: url(css/img/2.jpg)',
            'background-image: url(css/img/3.jpg)',
            'background-image: url(css/img/4.jpg)'
        ],
    },
    methods: {
        next(){
            (this.counter == this.img.length - 1) ? this.counter = 0 : this.counter++;
        },

        prev(){
            (this.counter == 0) ? this.counter = (this.img.length - 1) : this.counter--;
        },

        trova(i){
            this.counter = i;
        }
    }
});
const app = Vue.createApp({
    data() {
        return {
            counter: 10,
            name: ''

        }
    },
    methods: {

        resetInput() {
            this.name = '';
        },

        setName(event,lastName) {
            this.name = event.target.value;

        },
        add(num) {
            this.counter = this.counter + num
        },

        reduce(num) {
            this.counter = this.counter - num
        }
    }
});

app.mount('#events')
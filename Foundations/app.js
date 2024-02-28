const app = Vue.createApp({
    data() {
        return {
            divASelected: false,
            divBSelected: false,
            divCSelected: false,
        }
    },
    methods: {
        divSelected(block) {
            if (block === 'A'){
                this.divASelected = true;
            } else if (block === 'B'){
                this.divBSelected = true;
            } else if (block === 'C'){
        }
    }
}
});

app.mount('#styling')
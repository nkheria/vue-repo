const app = Vue.createApp({
    data() {
        return {
            currentInput: '',
            message: 'Welcome to VueJS!'

        }
    },
    methods: {
        saveInput() {
            this.currentInput = this.target.Value;
        },
        setText() {
            this.message = this.currentInput;
        }
},

beforeCreate() {
    console.log('beforeCreate()');
},

created() {
    console.log('created()');
},

beforeMount() {
    console.log('beforeMount()');
},

mounted() {
    console.log('mounted()');
},
beforeUpdate() {
    console.log('beforeUpdate()');
},

updated() {
    console.log('updated()');
},

beforeUnmount() {
    console.log('beforeUnmount()');
},

unmounted() {
    console.log('unmounted()');
},

});

app.mount('#app')

setTimeout(function() {
    app.unmount()
},5000);
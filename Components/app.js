const app = Vue.createApp({
    data() {
        return {
            detailsAreVisible: false,
            friends: [
                {id : 'jane', name: 'Jane Doe', phone: '123-456-7890', email: 'jane@example.com'},
                {id : 'alex', name: 'Alex Parker', phone: '123-456-7890', email: 'alex@example.com'}
            ]

        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
}
});

app.component('friend-contact', {
    template: `
    <li v-for="friend in friends" :key="friend.id">
                <h2> {{friend.name}} </h2>
                <button @click="toggleDetails"> 
                    {{detailsAreVisible ? 'Hide' : 'Show'}} Details
                     </button>
                <ul v-if="detailsAreVisible">
                    <li><strong>Phone: </strong> {{friend.phone}}  </li>
                    <li><strong>Email: </strong> {{friend.email}}  </li>
                </ul>
            </li> 
    `,
    data() {
        return {
            detailsAreVisible: false,
            friends: [
                {id : 'jane', name: 'Jane Doe', phone: '123-456-7890', email: 'jane@example.com'},
                {id : 'alex', name: 'Alex Parker', phone: '123-456-7890', email: 'alex@example.com'}
            ],
        };
    }
});
app.mount('#app')
const app = Vue.createApp({
    data() {
        return {
            enteredGoals: '',
            goals: []
        }
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredGoals);
        },

        removeGoal(index) {
            this.goals.splice(index, 1);
        }
        
}
});

app.mount('#user-goals')
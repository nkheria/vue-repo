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
        }
        
}
});

app.mount('#user-goals')
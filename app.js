const app = Vue.createApp({
    data() {
        return {
            goalA: 'Finish the course and learn Vue!',
            goalB: 'Master VueJS and build apps!',
            vueLink: 'https://vuejs.org/'
        };
    },

    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.goalA;
            } else {
                return this.goalB;
        }
    }
    }
});

app.mount('#user-goal')
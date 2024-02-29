<template>
    <li>
        <h2>{{ name }}</h2>
        <button @click="toggleDetails"> Show Details </button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ phoneNumber }}</li>
            <li><strong>Email:</strong> {{ emailId }}</li>
        </ul>
        </li>
</template>

<script>
export default {

    props:[
        'name',
        'phoneNumber',
        'emailId'
    ],
    data() {
        return {
            detailsAreVisible: false,
            friend : {
                id: "manuel",
                name: "Manuel Lorenz",
                phone: "01234 5678 991",
                email: "mauel@example.com"
        },
    };
},
    methods: {
        toggleDetails() {
        this.detailsAreVisible = !this.detailsAreVisible;
        this.phoneNumber
    }
}
};
</script>

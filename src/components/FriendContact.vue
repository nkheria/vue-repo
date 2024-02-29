<template>
    <li>
        <h2>{{ name }}  {{friendisFaourite == '1'  ? '(Favoruite)': ''}} </h2>
        <button @click="toggleFavouite"> Toggle Favourite </button>
        <button @click="toggleDetails"> {{ detailsAreVisible ? 'Hide' : 'Show' }} Details </button>
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
        'emailId',
        'isFavourite'
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
        friendisFaourite: this.isFavourite
    };
},
    methods: {
        toggleDetails() {
        this.detailsAreVisible = !this.detailsAreVisible;
        this.phoneNumber
    },

    toggleFavourite() {
        if (this.friendisFaourite == '1') {
            this.friendisFaourite = '0';
        } else {
            this.friendisFaourite = '1';
        }
    }
}
};
</script>

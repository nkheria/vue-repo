<template>
    <div>
        <input type="radio" v-model="selectedOption" value="option1"> Option 1  
        <input type="radio" v-model="selectedOption" value="option2"> Option 2 
        <input type="radio" v-model="selectedOption" value="option3"> Option 3  

    </div>
    <p v-if="!selectedOptionValid"> Please select an option! </p>

    <button @click="submitForm">Submit</button>
</template>


<script>
export default{
    data() {
        return {
            selectedOption: '',
            selectedOptionValid: true
        }
    },  
    methods: {
        submitForm() {
            if (this.selectedOption === '') {
                this.selectedOptionValid = false;
            } else {
                this.selectedOptionValid = true;
                // Do something with the selected option
        }
    }
    }
}
</script>
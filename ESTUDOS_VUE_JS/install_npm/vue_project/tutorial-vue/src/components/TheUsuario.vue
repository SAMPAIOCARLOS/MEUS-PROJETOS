<script setup>

import { onMounted, ref } from 'vue';

const person = ref({
    // avatar: "",
    // email: "",
    // firstName: "",
    // lastName: ""
})


onMounted(async ()=> {
    // person.avatar = "../../public/favicon.ico"
    // person.email = "carlos@gmail.com"
    // person.firstName = "Carlos"
    // person.lastName = "Sampaio"

    person.value = await GetInformation()
})

const GetInformation = async ()=> {
    const response = await fetch("https://reqres.in/api/users/1")
    const json = await response.json()

    return json.data
}

</script>

<template>

    <div>
        <input type="text">
        <button>buscar</button>
    </div>

    <div id="container_card">
        <img v-bind:src="person.avatar" alt="img_logo">

        <h1>{{ person.first_name }}</h1>

        <h2>{{ person.last_name }}</h2>

        <br>

        <p>{{ person.email }}</p>
    </div>
</template>

<style>
    #container_card {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
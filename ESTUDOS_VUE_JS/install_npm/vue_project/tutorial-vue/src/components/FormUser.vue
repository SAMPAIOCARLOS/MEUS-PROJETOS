<script setup>
import { reactive } from "vue"
// const nome = ref("user")

// const sobrenome = ref("user")

const person = reactive({
    nome: "user",
    sobrenome: "user",
    age: 0,
    age_future: 0,
    data_nasc: 0
})

function calc_age() {
    person.age = 2024 - person.data_nasc
}

function calc_age_future(entry) {
    person.age_future = person.age + entry
}
</script>


<template>
    <div>
        <div id="form">
            <section class="section_form">
                <label for="nome">Nome:</label>
                <input type="text" name="nome" id="nome" v-model="person.nome">
            </section>

            <section class="section_form">
                <label for="sobrenome">Sobrenome:</label>
                <input type="text" name="sobrenome" id="sobrenome" v-model="person.sobrenome">
            </section>

            <!-- <section class="section_form">
                <label for="age">Idade:</label>
                <input type="number" name="age" id="age" v-model="person.age">
            </section> -->

            <section class="section_form">
                <label for="nasc">Data nascimento:</label>
                <input type="number" name="nasc" id="nasc" v-model="person.data_nasc">
            </section>

            <button v-on:click="calc_age()">
                click
            </button>

            <button v-on:click="calc_age_future(2)">
                mais dois
            </button>

        </div>
    </div>


    <h2>Seu Nome é {{ person.nome }}</h2>
    <br>
    <h2>Seu Sobrenome é {{ person.sobrenome }}</h2>
    <br>
    <h2>Você tem: {{ person.age }}</h2>
    <br>
    <h2>Sua idade + dois: {{ person.age_future }}</h2>
</template>


<style>

#form {
    width: 30vw;
    display: flex;
    flex-direction: column;
    gap: 50px;
    margin: auto;

}

.section_form {
    display: flex;
    flex-direction: column;
}

</style>
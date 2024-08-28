<script setup>
import { reactive } from "vue"
// const nome = ref("user")

// const sobrenome = ref("user")

const person = reactive({
    nome: "user",
    sobrenome: "user"
})

</script>



<template>
    <div>
        <form id="form">
            <section class="section_form">
                <label for="nome">Nome:</label>
                <input type="text" name="nome" id="nome" v-model="person.nome">
            </section>

            <section class="section_form">
                <label for="sobrenome">Sobrenome:</label>
                <input type="text" name="sobrenome" id="sobrenome" v-model="person.sobrenome">
            </section>

        </form>
    </div>


    <h2>Seu Nome é {{ person.nome }}</h2>
    <br>
    <h2>Seu Sobrenome é {{ person.sobrenome }}</h2>
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
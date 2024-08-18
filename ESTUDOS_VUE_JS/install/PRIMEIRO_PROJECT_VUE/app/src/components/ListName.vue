<template>
    <details>
        <summary>Lista de nomes</summary>

        <ul class="list_name">
            <li v-for="(nomes, i) in nomes" :key="i">
                {{ nomes }}
            </li>
        </ul>
    </details>
</template>

<script>

export default {
    name: "ListName",
    data () {
        return {
            nomes: ['Carlos','Fabio','Joao','Johao', 'Calvo']
        }
    }
}
</script>

<style>
    .list_name {
        border: 1px solid red;
        list-style: none;
        width: 20vw;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        gap: 10px;
        
    }

    .list_name > li {
        border-bottom: 2px solid transparent;
        transition: all 1s;
        padding: 0 10px 0 10px;
    }

    .list_name > li:hover {
        border-bottom: 2px solid gray;
        cursor: pointer;
    }
</style>

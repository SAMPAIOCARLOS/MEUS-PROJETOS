<template>
    <details>
        <summary>Lista de {{username}}</summary>

        <ul class="list_name">
            <li v-for="(nomes, i) in nomes" :key="i.id">
                {{ nomes }}
            </li>
        </ul>
    </details>
</template>

<script>

export default {
    name: "ListName",
    props:{
        name:String,
        list:Array,
    },
    data () {
        return {
            nomes: ['Carlos','Fabio','Joao','Johao', 'Calvo'],
            username: "Nomes"
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

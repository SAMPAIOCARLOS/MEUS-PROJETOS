<script>
   import { reactive } from 'vue';

    export default {
        setup() {

            const listNav = reactive([
                {
                    titulo: "SOBRE"
                },
                {
                    titulo: "HABILIDADES"
                },
                {
                    titulo: "PROJETOS",
                    teste: ["teste1", "teste2", "teste3"]
                }
            ])


            return {
                listNav
            }
        }
    }


   

    
</script>

<template>
    <nav>
        <button>Button</button>

        <ul class="list_nav">

            <li v-for="(obj, index) in listNav" :key="index"> {{obj.titulo}}</li>

        </ul>

        <button>
            Contato
        </button>
    </nav>

</template>

<style>
    nav {
        width: 100vw;
        height: 15vh;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: rgb(36, 36, 36);
        color: #fff;
    }

    button {
        width: 20vw;
        height: 5vh;
        border-radius: 12px;
        background-color: rgb(0, 110, 255);
        color: #ffffff;
        font-weight: bold;
        padding: 10px;
        border: none;
        outline: none;
        display: flex;
        justify-content: space-around;
        align-items: center;
        transition: all 0.5s;
    }

    button:hover {
        transform: scale(1.1);
    }

    .list_nav {
        list-style: none;
        display: flex;
        gap: 20px;
    }

    .List_nav_item {
        border-bottom: 2px solid transparent;
        transition: all 0.5s;
        padding: 0 10px 0 10px;
    }
    .List_nav_item:hover {
        border-bottom: 2px solid gray;
    }
</style>

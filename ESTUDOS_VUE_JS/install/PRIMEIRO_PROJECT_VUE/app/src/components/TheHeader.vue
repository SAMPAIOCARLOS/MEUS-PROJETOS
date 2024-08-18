<template>
    <header>
        <ul id="list_nav_header">
            
            <li v-for="obj in user" v-bind:key="obj.id" class="itens_header"> {{obj.id}} </li>

        </ul>
    </header>
</template>


<script>

    export default {
        name: 'TheHeader',
        data() {
            return {
                user: [
                        {
                            "userId": 1,
                            "id": 1,
                            "title": "delectus aut autem",
                            "completed": false
                        },
                        {
                            "userId": 1,
                            "id": 2,
                            "title": "quis ut nam facilis et officia qui",
                            "completed": false
                        },
                        {
                            "userId": 1,
                            "id": 3,
                            "title": "fugiat veniam minus",
                            "completed": false
                        },
                        {
                            "userId": 1,
                            "id": 4,
                            "title": "et porro tempora",
                            "completed": true
                        },
                        {
                            "userId": 1,
                            "id": 5,
                            "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
                            "completed": false
                        }
                      ]
            }
        }
    }


</script>


<style>

    header {
        border: 1px solid red;
        font-size: 2vw;
        background: #000000;
    }

    #list_nav_header {
        display: flex;
        justify-content: space-around;
        list-style: none;
    }

    .itens_header {
        border-bottom: 2px solid transparent;
        transition: all 0.5s;
        padding: 0px 10px 0px 10px;
        color: #ffffff;
    }

    .itens_header:hover {
        border-bottom: 2px solid gray;
        color: blue;
    }

</style>

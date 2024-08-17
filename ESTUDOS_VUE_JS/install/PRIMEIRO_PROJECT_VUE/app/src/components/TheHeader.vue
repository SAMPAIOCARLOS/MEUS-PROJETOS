<template>
    <header>
        <ul id="list_nav_header">
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </header>
</template>


<script>

    export default {
        name: 'TheHeader'
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

    li {
        border-bottom: 2px solid transparent;
        transition: all 0.5s;
        padding: 0px 10px 0px 10px;
        color: #ffffff;
    }

    li:hover {
        border-bottom: 2px solid gray;
        color: blue;
    }

</style>

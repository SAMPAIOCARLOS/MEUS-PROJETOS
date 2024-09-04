<script setup>

import NavBar from './components/NavBar.vue'
import TheHeader from './components/TheHeader.vue'
import FormUser from './components/FormUser.vue'
import TheUsuario from './components/TheUsuario.vue'

</script>

<template>

  <nav>
    <NavBar/>
  </nav>


  <header>
    <TheHeader/>
  </header>

  <main>
    <FormUser/>

    <TheUsuario/>
  </main>
</template>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}
header {
  line-height: 1.5;
}

</style>

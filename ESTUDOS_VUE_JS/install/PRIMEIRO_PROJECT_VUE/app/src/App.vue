<template>

  <TheHeader/>


  <!-- 
  <img alt="Vue logo" src="./assets/logo.png"> 
  Tornei isso um componente 
  -->
  <imgLogo/>

  <HelloWorld msg="Bem vindo a sua primeira aplição com vue.js"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import TheHeader from './components/TheHeader.vue';
import imgLogo from './components/imgLogo.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    TheHeader,
    imgLogo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin: 0;
  padding: 0;
  box-sizing: border-box; */
}
</style>

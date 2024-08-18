<template>

  <TheHeader v-if="ShowHeader"/>

  <h2 v-show="showName">
    Olá: {{ firstName }}

    <br>

    O seu sobrenome é: <span id="span_lastname">{{ lastName }}</span>
  </h2>

  <!-- <div v-if="accessLevel === 'Admin'">Admin</div>
  <div v-else-if="accessLevel === 'Marketing'">Marketing</div>
  <div v-else>User</div> -->

  <h1 id="Title_cargo">
    Seu cargo é: 

    <span v-if="accessLevel === 'Admin'">Admin</span>
    <span v-else-if="accessLevel === 'Marketing'" class="cargo_blue">Marketing</span>
    <span v-else>User</span>
    
  </h1>


  <!-- 
  <img alt="Vue logo" src="./assets/logo.png"> 
  Tornei isso um componente 
  -->
  <imgLogo/>


  <!-- <details>
    <summary>Lista de nomes</summary>
    <ul>
      <li v-for="(array, i) in array" :key="i">
        {{ array }}
      </li>
    </ul>
  </details> 
  
  ISSO VIROU UM COMPONENTE

  -->

  <ListName/>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import imgLogo from './components/imgLogo.vue';
import ListName from './components/ListName.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    imgLogo,
    ListName
  },
  data() {
    return {
      ShowHeader: true,
      firstName: "Carlos Eduardo",
      lastName: "Sampaio",
      showName: true,
      accessLevel: "Marketing",
    }
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

#span_lastname {
  color: #eb0303;
  /* border: 1px solid red;
  background: #2c3150; */
  font-weight: 100;
  transition: all 1s;
}
#span_lastname:hover {
  color: black;
}

#Title_cargo > span {
  color: blue;
}
</style>

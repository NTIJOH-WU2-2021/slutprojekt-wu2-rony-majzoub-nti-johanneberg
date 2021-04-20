<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <IngredientSearch/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import IngredientSearch from './components/IngredientSearch.vue'

export default {
  name: 'App',
  components: { HelloWorld, IngredientSearch }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
#app {
  font-family: 'Inter', 'Lato', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgba(0, 0, 0, 0.87);
  background-color: #F2F2F7;
}
body {
  background-color: #F2F2F7;
}
</style>

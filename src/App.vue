<template>
  <header>
    <nav>
      <router-link class="header-item" to="/">Recipes</router-link>
      <router-link class="header-item" to="/favorites">Favorites</router-link>
      <router-link class="header-item" to="/tips">Tips</router-link>
    </nav>
  </header>
  <main>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in" appear>
        <component :key="$route.fullPath" :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
#app {
  font-family: 'Inter', 'Lato', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgba(0, 0, 0, 0.87);
  background-color: #F2F2F7;
}
body {
  background-color: #F2F2F7;
}

h1 {
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 58px;
  color: rgba(0, 0, 0, 0.87);
}

main {
  padding: 0 10rem 0 10rem;
  margin-top: 12vh;
  max-width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  
}
header {
  background-color: #F2F2F7;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 8vh;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
  z-index: 1;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.45, 0.1, 0.25, 1);
  padding: 0 5rem 0 4.5rem;
}
.header-item {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;
  opacity: 0.87;
  font-family: 'Inter', 'Lato', Avenir, Helvetica, Arial, sans-serif;
  font-weight: 700;
  text-decoration: none;
  padding: 0 1rem 0 0.5rem;
  height: 90%;
  transition-duration: 100ms;
  transition-timing-function: cubic-bezier(0.45, 0.1, 0.25, 1);
  font-size: 1.5rem;
  cursor: pointer;
}

.header-item:hover {
  background-color: rgba(0, 0, 0, 0.12);
  transition-duration: 100ms;
  transition-timing-function: cubic-bezier(0.45, 0.1, 0.25, 1);
  border-radius: 2px;
}
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8vh;
}

.fade-enter-active {
  transition:opacity 0.4s cubic-bezier(0.19, 1, 0.22, 1),transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);  
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(-50px);
}
.fade-enter-to {
  opacity: 1;
  transform: translateY(0px);
}
.fade-leave-active {
  transition:opacity 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19),transform 0.225s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.fade-leave-from {
  opacity: 1;
  transform: translateY(0px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(50px);
}

</style>

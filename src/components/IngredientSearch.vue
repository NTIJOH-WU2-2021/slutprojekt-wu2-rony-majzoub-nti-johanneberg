<template>
  <div class="flex">  
    <input
      data-cy="city"
      class="input"
      type="search"
      placeholder="Add your ingredients."
      @keyup.enter="onSearchClick"
      
    />
    <button @click="onSearchClick" class="search">
      <img src="..\assets\search-24px.svg" alt="">
    </button>
  </div>
</template>

<script>
// import config from '@/appConfig.js';
export default {
  name: "IngredientSearch",
  props: {
    placeholder: String,
  },
};
</script>

<style>
.flex {
  display: flex;
  max-width: 400px;
  justify-content: center;
  align-items: center;
  margin-bottom: 1em;
  gap: 0.5rem;
  float: right;
}

.input {
  width: 100%;
  padding: 8px 10px;
  border: none;
  flex: 1;
  background-color: #F6F6F6;
  border-radius: 100px;
  font-family: 'Inter', 'Lato', Avenir, Helvetica, Arial, sans-serif;
  color: rgba(0, 0, 0, 0.60);
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  height: 48px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2);
}

.search {
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 48px;
  width: 48px;
}
img {
  height: 36px;
  color: #666666;
}
</style>
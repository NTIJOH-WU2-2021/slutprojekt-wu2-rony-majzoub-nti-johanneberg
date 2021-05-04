<template>
  <div class="flex">  
    <input
      class="input"
      type="search"
      placeholder="Add your ingredients."
      @keyup.enter="onIngredientSearchClick"
      v-model="search"
    />
    <button @click="onIngredientSearchClick" class="search">
      <img src="..\assets\search-24px.svg" alt="">
    </button>
  </div>
</template>

<script>

export default {
  name: "IngredientSearch",
  data() {
    return {
      search: ""
    }
  },
  methods: {
    onIngredientSearchClick() {
      this.$bus.emit('searchIngredient', this.search);
    },
    // onRecipeSearchClick() {
    //   const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${this.ingredients}&apiKey=${config.apiKey}`;
    //   fetch(url).then((response) => {
    //     if (!response.ok) {
    //       // Ifall vi inte fick en 2xx response, avbryt kedjan här (reject)
    //       throw new Error("No matching location.");
    //     } else {
    //       // Annars konverterar vi svaret till ett JS objekt
    //       return response.json();
    //     }        
    //   }).then((cityInfo) => {
    //     console.log(cityInfo);
    //     this.$bus.emit('searchCity', { city:`${cityInfo.name}, ${cityInfo.sys.country}`, temp:`${(cityInfo.main.temp - 273.15).toFixed(1)}`, humidity:`${cityInfo.main.humidity}`, pressure:`${cityInfo.main.pressure}`, feels_like:`${(cityInfo.main.feels_like - 273.15).toFixed(1)}`, temp_max:`${(cityInfo.main.temp_max - 273.15).toFixed(1)}`, temp_min:`${(cityInfo.main.temp_min - 273.15).toFixed(1)}`, weather:`${cityInfo.weather[0].main}`, description:`${cityInfo.weather[0].description}`, wind_speed:`${(cityInfo.wind.speed).toFixed(1)}` });
    //   }).catch((reason) => {
    //     alert(reason);
    //   })
    // }
  }
}
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
  flex-direction: row-reverse;
  background-color: #F6F6F6;
  border-radius: 100px;
  border: 1px solid #E8E8E8;
  box-sizing: border-box;
}

.input {
  width: 100%;
  padding: 8px 10px;
  border: none;
  flex: 1;
  font-family: 'Inter', 'Lato', Avenir, Helvetica, Arial, sans-serif;
  color: rgba(0, 0, 0, 0.60);
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  height: 48px;
  background-color: transparent;
  border-radius: 100px;
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
.search img {
  height: 36px;
  color: #666666;
}
</style>
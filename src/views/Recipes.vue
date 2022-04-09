<template>
    <div>
      <transition name="fade" mode="out-in" appear>
        <div @goBack="hideIngredients" v-show="showIngredients">
            <div class="top-row">
                <h1>Found what you need?</h1>
                <IngredientSearch />
            </div>
            <h2 v-if="Ingredients.totalResults == 0">We couldn't find any results. Try searching for another ingredient.</h2>
            <ingredient-result
            v-for="ingredient in Ingredients.results" 
            :key="ingredient.id" 
            :ingredient="ingredient"
            ></ingredient-result> 
        </div>
      </transition>
        <div v-show="!showIngredients">
            <div class="top-row">
                <h1>Welcome to your Recipes.</h1>
                <IngredientSearch />
            </div>
            <recipe-card
            v-for="recipe in Recipes" 
            :key="recipe.id" 
            :recipe="recipe"
            ></recipe-card> 
        </div>
    </div>
</template>

<script>
import IngredientSearch from "@/components/IngredientSearch.vue";
import RecipeCard from "@/components/RecipeCard.vue";
import IngredientResult from "@/components/IngredientResult.vue";
import config from '@/appConfig.js';


export default {
  name: 'Recipes',
  components: {
      IngredientSearch,
      RecipeCard,
      IngredientResult,
  },
  data() {
    return {
      showIngredients: false,
      Ingredients: {
        results: []
      },
      Recipes: {}
    }
  },
  methods: {
    hideIngredients() {
      this.showIngredients = false;
    }
  },
  created() {
    this.$bus.on('searchIngredient', (search) => {
      const url = `https://api.spoonacular.com/food/ingredients/search?query=${search}&apiKey=${config.apiKey}&metaInformation=true`;
      fetch(url).then((response) => {
        if (!response.ok) {
          // Ifall vi inte fick en 2xx response, avbryt kedjan här (reject)
          throw new Error("No matching ingredient.");
        } else {
          // Annars konverterar vi svaret till ett JS objekt
          return response.json();
        }        
      }).then((IngredientInfo) => {
        console.log(IngredientInfo);
        this.Ingredients = IngredientInfo;
        this.showIngredients = true;
        var mapped = IngredientInfo.results.map(item => ({ [item.id]: item }) );
        var newObj = Object.assign({}, ...mapped );
        console.log(newObj);
        localStorage.setItem("searchResult", JSON.stringify(newObj))
        console.log(newObj);
        let searchResult = JSON.parse(localStorage.getItem("searchResult") || "[]");
        console.log(searchResult[9003])

      }).catch((reason) => {
        alert(reason);
      })
    })
    let fridge = JSON.parse(localStorage.getItem("fridge") || "[]");
    console.log(fridge)
    const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${fridge.name}&apiKey=${config.apiKey}`
    fetch(url).then((response) => {
      if (!response.ok) {
        // Ifall vi inte fick en 2xx response, avbryt kedjan här (reject)
        console.log("no recipes found")
      } else {
        // Annars konverterar vi svaret till ett JS objekt
        return response.json();
      } 
    }).then((RecipeInfo) => {
      console.log(RecipeInfo)
      this.Recipes = RecipeInfo;
      let mapped = RecipeInfo.map(item => ({ [item.id]: item }) );
      console.log(mapped)
      let newObj = Object.assign({}, ...mapped );
      console.log(newObj)
      localStorage.setItem("recipes", JSON.stringify(newObj))
      let recipeResult = JSON.parse(localStorage.getItem("recipes") || "[]");
      console.log(recipeResult)

    }).catch((reason) => {
      alert(reason);
    })
  }
}
</script>

<style scoped>
.top-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
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

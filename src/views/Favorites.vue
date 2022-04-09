<template>
  <div>
    <h1>Welcome to your Favorites.</h1>
    <recipe-card
    v-for="recipe in Recipes" 
    :key="recipe.id" 
    :recipe="recipe"
    ></recipe-card> 
  </div>
</template>

<script>
import RecipeCard from "@/components/RecipeCard.vue";

export default {
  name: 'Favorites',
  components: {
      RecipeCard,
  },
  data() {
    return {
      Recipes: {}
    }
  },
  created() {
    let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    this.Recipes = favorites
  }
}
</script>
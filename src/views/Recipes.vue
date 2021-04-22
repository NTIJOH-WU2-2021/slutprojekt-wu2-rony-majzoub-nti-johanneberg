<template>
    <div>
        <div class="top-row">
            <h1>Welcome to your Recipes.</h1>
            <IngredientSearch />
        </div>
        <RecipeCard />
        <RecipeCard />
    </div>
</template>

<script>
import IngredientSearch from "@/components/IngredientSearch.vue";
import RecipeCard from "@/components/RecipeCard.vue";

export default {
  name: 'Recipes',
  components: {
      IngredientSearch,
      RecipeCard,
  },
}
</script>

<style scoped>
.top-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>

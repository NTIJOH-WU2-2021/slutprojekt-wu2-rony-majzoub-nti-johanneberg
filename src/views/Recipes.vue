<template>
    <div>
        <div @goBack="hideIngredients" v-show="showIngredients">
            <div class="top-row">
                <h1>Found what you need?</h1>
                <IngredientSearch />
            </div>
            <!-- använd v:for för att ta results och skapa en ny för varje objekt -->
            <ingredient-card
            ></ingredient-card> 
        </div>
        <div v-show="!showIngredients">
            <div class="top-row">
                <h1>Welcome to your Recipes.</h1>
                <IngredientSearch />
            </div>
            <RecipeCard />
            <RecipeCard />
        </div>
    </div>
</template>

<script>
import IngredientSearch from "@/components/IngredientSearch.vue";
import RecipeCard from "@/components/RecipeCard.vue";
import IngredientCard from "@/components/IngredientCard.vue";

export default {
  name: 'Recipes',
  components: {
      IngredientSearch,
      RecipeCard,
      IngredientCard,
  },
  data() {
    //   spara results här, kanske som en variabel, så du kan iterera arrayen i din v:for där uppe!
    return {
      showIngredients: false
    }
  },
  methods: {
    hideIngredients() {
      this.showIngredients = false;
    }
  },
  created() {
    this.$bus.on('searchIngredient', () => {
      this.showIngredients = true;
    })
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

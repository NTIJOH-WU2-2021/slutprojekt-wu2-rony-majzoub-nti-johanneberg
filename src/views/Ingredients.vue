<template>
    <div>
        <div class="top-row">
            <h1>{{name}}</h1>
            <IngredientSearch />
        </div>
        <IngredientCard />
    </div>
</template>

<script>
import IngredientSearch from "@/components/IngredientSearch.vue";
import IngredientCard from "@/components/IngredientCard.vue";

export default {
  name: 'Ingredients',
  components: {
      IngredientSearch,
      IngredientCard,
  },
  props: {
    name: String,
    image: String,
    id: String,
  },
  methods: {
    addIngredient(ingredient) {
      let ingredients = JSON.parse(localStorage.getItem("ingredients") || "[]");
      ingredients.push(ingredient);
      this.ingredients = ingredients;
      localStorage.setItem("ingredients", JSON.stringify(ingredients));
    },
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

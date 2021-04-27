<template>
    <div>
        <div class="top-row">
            <h1>Found what you need?</h1>
            <IngredientSearch />
        </div>
        <IngredientCard />
        <IngredientCard />
    </div>
</template>

<script>
import IngredientSearch from "@/components/IngredientSearch.vue";
import IngredientCard from "@/components/IngredientCard.vue";

export default {
  name: 'Recipes',
  components: {
      IngredientSearch,
      IngredientCard,
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

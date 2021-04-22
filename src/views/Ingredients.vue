<template>
    <div>
        <div class="top-row">
            <h1>Fancy Recipe</h1>
            <img src="../assets/star_outline.svg" alt="">
        </div>
        <IngredientCard />
    </div>
</template>

<script>
import IngredientCard from "@/components/IngredientCard.vue";

export default {
  name: 'Ingredients',
  components: {
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
img {
    color: #212121;
    width: 48px;
    height: 48px;
}
</style>
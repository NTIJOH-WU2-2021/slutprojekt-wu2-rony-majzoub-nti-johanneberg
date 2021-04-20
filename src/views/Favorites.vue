<template>
    <h1>Welcome to your Favorites.</h1>
    <RecipeCard />
</template>

<script>
import RecipeCard from "@/components/RecipeCard.vue";

export default {
  name: 'Favorites',
  components: {
      RecipeCard,
  },
}
</script>
<template>
  <div>
    <h1>Welcome to your Favorites.</h1>
    <RecipeCard />
  </div>
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
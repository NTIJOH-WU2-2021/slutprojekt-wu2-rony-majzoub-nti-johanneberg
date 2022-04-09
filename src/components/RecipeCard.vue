<template>
    <router-link class="parent-group" :to="`/instructions/${recipe.id}`">
        <img :src="`https://spoonacular.com/recipeImages/${recipe.id}-480x360.${recipe.imageType}`" alt="">
        <div class="text-group">
            <h2>{{recipe.title}}</h2>
        </div>
    </router-link>
</template>

<script>
export default {
  name: "RecipeCard",
  props: {
    recipe: Object,
    title: String,
    imageType: String,
    id: Number,
  }
}
</script>

<style scoped>
.parent-group {
    display: flex;
    flex-direction: row;
    background: #F2F2F7;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04);
    border-radius: 8px;
    margin-bottom: 24px;
    text-decoration: none;
}
.parent-group img {
    align-self: center;
    width: 144px;
    height: 100%;
    object-fit: cover;
}
.text-group {
    display: flex;
    flex-direction: column;
    padding: 0px 32px;
}

h2 {
    font-family: 'Inter', 'Lato', Avenir, Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: rgba(0, 0, 0, 0.87);
}

h3 {
    font-family: 'Lato', 'Inter', Avenir, Helvetica, Arial, sans-serif;
    font-size: 18px;
    line-height: 22px;
    color: rgba(0, 0, 0, 0.6);
    font-style: normal;
    font-weight: normal;
}
</style>
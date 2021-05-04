<template>
    <div class="parent-group">
        <img :src="`https://spoonacular.com/cdn/ingredients_250x250/${ ingredient.image }`" alt="">
        <div class="text-group">
            <h2>{{ ingredient.name }}</h2>
        </div>
    </div>
</template>

<script>
export default {
  name: "IngredientCard",
  props: [
    "ingredient"
  ],
  data() {
    return {
      name: "",
      image: ""
    }
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
    height: 10vh;
}
.parent-group img {
    align-self: center;
    width: 144px;
    height: 100%;
    object-fit: cover;
    border-radius: 8px 0px 0px 8px;
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
    text-transform: capitalize;
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
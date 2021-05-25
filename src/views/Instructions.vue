<template>
    <div>
        <div class="top-row">
            <h1>Fancy Recipe</h1>
            <button @click="addRecipe" class="add-button">
                <img src="../assets/star_outline.svg" alt="">
            </button>
            
        </div>
        <instruction-card 
        :recipe="recipe"
        />
    </div>
</template>

<script>
import InstructionCard from "@/components/InstructionCard.vue";
import config from '@/appConfig.js';

export default {
  name: 'Instructions',
  components: {
      InstructionCard,
  },
  data() {
    return {
      recipe: {
        title: "Title",
        imageType: "ImageType",
        id: "Id",
      }
    }
  },
  methods: {
    addRecipe() {
      let RecipeInfo = JSON.parse(localStorage.getItem("recipeCache") || "[]");
      console.log(RecipeInfo)
      let savedRecipe = RecipeInfo;
      let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
      favorites.push(savedRecipe)
      localStorage.setItem("favorites", JSON.stringify(favorites))
      console.log(savedRecipe);
      let test = JSON.parse(localStorage.getItem("favorites") || "[]");
      console.log(test)
    }
  },
  created() {
    const url = `https://api.spoonacular.com/recipes/${this.$route.params.id}/information?apiKey=${config.apiKey}`
    fetch(url).then((response) => {
        if (!response.ok) {
            // Ifall vi inte fick en 2xx response, avbryt kedjan här (reject)
        console.log("no recipes found")
      } else {
          // Annars konverterar vi svaret till ett JS objekt
        return response.json();
      } 
    }).then((RecipeInfo) => {
        console.log(RecipeInfo)
        this.recipe = RecipeInfo;
        localStorage.setItem("recipeCache", JSON.stringify(RecipeInfo))
        console.log(RecipeInfo.title)

    }).catch((reason) => {
      alert(reason);
    })
  }
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
.add-button {
    cursor: pointer;
    background-color: transparent;
    border: none;
}
</style>
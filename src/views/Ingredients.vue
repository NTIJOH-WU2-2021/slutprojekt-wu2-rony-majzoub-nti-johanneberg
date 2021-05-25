<template>
  <div>
    <router-link :to="`/`">back</router-link>
    <ingredient-card
    :ingredient="ingredient" 
    @add-ingredient="onAddIngredient"
    />
  </div>
</template>

<script>
import IngredientCard from "@/components/IngredientCard.vue";

export default {
  name: 'Ingredients',
  components: {
      IngredientCard,
  },
  data() {
    return {
      ingredient: {
        name: "Name",
        image: "Image",
        id: "Id",
        possibleUnits: "Units"
      }
    }
  },
  created() {
    let IngredientInfo = JSON.parse(localStorage.getItem("searchResult") || "[]");
    console.log(IngredientInfo[this.$route.params.id].name)
    this.ingredient = IngredientInfo[this.$route.params.id];
  },
  methods: {
    onAddIngredient() {
      let IngredientInfo = JSON.parse(localStorage.getItem("searchResult") || "[]");
      console.log(IngredientInfo[this.$route.params.id])
      let Ingredient = IngredientInfo[this.$route.params.id];
      let fridge = JSON.parse(localStorage.getItem("fridge") || "[]");
      let fridgeArray = Array.from(fridge)
      console.log(fridgeArray)
      fridgeArray.push(Ingredient)
      console.log(fridgeArray)
      let newObj = Object.assign({}, ...fridgeArray );
      localStorage.setItem("fridge", JSON.stringify(newObj))
      console.log(Ingredient);
      let test = JSON.parse(localStorage.getItem("fridge") || "[]");
      console.log(test)
      // let IngredientInfo = JSON.parse(localStorage.getItem("searchResult") || "[]");
      // console.log(IngredientInfo[this.$route.params.id])
      // let Ingredient = IngredientInfo[this.$route.params.id];
      // let fridge = JSON.parse(localStorage.getItem("fridge") || "[]");
      // fridge.push(Ingredient)
      // localStorage.setItem("fridge", JSON.stringify(fridge))
      // console.log(Ingredient);
      // let test = JSON.parse(localStorage.getItem("fridge") || "[]");
      // console.log(test)
    }
  }
}
</script>

<style scoped>
.top-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
h1 {
  text-transform: capitalize;
}
</style>

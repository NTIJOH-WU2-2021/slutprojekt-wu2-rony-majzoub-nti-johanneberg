<template>
    <div class="parent-group">
      <div class="top-row">
          <h1>{{ingredient.name}}</h1>
          <img :src="`https://spoonacular.com/cdn/ingredients_250x250/${ ingredient.image }`" alt="">
        </div>
        <div class="input-group">
          <input type="number" id="amount" placeholder="0" v-model="amount">
          <select id="unit" name="unit" v-model="unit">
            <option  
            v-for="unit in ingredient.possibleUnits" 
            :key="unit.id"
            >{{unit}}</option>
          </select>
        </div>
        <button @click="$emit('add-ingredient')" class="add-button">Add ingredient</button>
    </div>
</template>

<script>
export default {
  name: "IngredientCard",
  props: {
    ingredient: Object,
    name: String,
    image: String,
    id: Number,
    possibleUnits: Array,
  },
  data() {
    return {
      amount: "Amount",
      unit: "Unit"
    }
  }
}
</script>

<style scoped>
.parent-group {
    display: flex;
    flex-direction: column;
    background: #F2F2F7;
    /* box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04); */
    border-radius: 8px;
    margin-bottom: 24px;
    text-decoration: none;
    height: 50vh;
    padding: 0 5rem;
}
.parent-group img {
    height: 100%;
    object-fit: contain;
    border-radius: 8px 0px 0px 8px;
    background-color: #FFFFFF;
}
.input-group {
    display: flex;
    flex-direction: row;
    padding: 48px 0px;
    justify-content: space-between;
}
.input-group input {
  background-color: transparent;
  border: none;
  appearance: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.87);
  font-family: 'Inter', 'Lato', Avenir, Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.87);
  width: 64px;
}
.input-group select {
  background-color: transparent;
  border: none;
  appearance: none;
  background-image: url(../assets/arrow_drop_down.svg);
  background-position: center right;
  background-repeat: no-repeat;
  border-bottom: 1px solid rgba(0, 0, 0, 0.87);
  font-family: 'Inter', 'Lato', Avenir, Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  text-align: right;
  width: 360px;
  color: rgba(0, 0, 0, 0.87);
  padding-right: 32px;
}
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}
input[type=number]{
    -moz-appearance: textfield;
}
.add-button {
  /* Auto Layout */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  align-self: flex-end;
  padding: 16px 32px;
  width: 179px;
  height: 51px;
  background: #5DB075;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 3px 3px rgba(0, 0, 0, 0.12), 0px 1px 8px rgba(0, 0, 0, 0.2);
  border-radius: 64px;
  border: none;
  font-family: 'Inter', 'Lato', Avenir, Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #FFFFFF;
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  }
.top-row {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}
h1 {
  text-transform: capitalize;
  margin: 0;
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
<template>
    <div class="parent-group">
        <img :src="`https://spoonacular.com/recipeImages/${recipe.id}-480x360.${recipe.imageType}`" alt="">
        <div class="text-group">
            <h2>{{recipe.title}}</h2>
            <h3>{{recipe.instructions}}</h3>
            <div class="pill-info">
                <div class="pill-subinfo">
                    <img src="../assets/schedule.svg" alt="">
                    <h4>{{recipe.readyInMinutes}} min</h4>
                </div>
                <div class="pill-subinfo">
                    <img src="../assets/local_dining.svg" alt="">
                    <h4>x ingredients</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "InstructionCard",
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
    min-height: 50vh;
    padding-right: 5rem;
}
.parent-group img {
    align-self: flex-start;
    width: 90%;
    height: 100%;
    object-fit: cover;
}
.text-group {
    display: flex;
    flex-direction: column;
    padding-left: 128px;
}

h2 {
    font-family: 'Inter', 'Lato', Avenir, Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 29px;
    color: rgba(0, 0, 0, 0.87);
}

h3 {
    font-family: 'Lato', 'Inter', Avenir, Helvetica, Arial, sans-serif;
    font-size: 18px;
    line-height: 32px;
    color: rgba(0, 0, 0, 0.6);
    font-style: normal;
    font-weight: normal;
}
.pill-info {
    background: #E8E8E8;
    border-radius: 48px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 50%;
    height: 17.5%;
}
.pill-info img {
    width: 24px;
    height: 24px;
    align-self: center;
}
.pill-subinfo {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 4px;
}
.pill-subinfo h4 {
    margin: 0;
    padding: 0;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 133%;
    text-align: center;
    letter-spacing: 1.5px;
    text-transform: uppercase;
}
</style>
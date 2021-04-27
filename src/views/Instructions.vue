<template>
    <div>
        <div class="top-row">
            <h1>Fancy Recipe</h1>
            <img src="../assets/star_outline.svg" alt="">
        </div>
        <InstructionCard />
    </div>
</template>

<script>
import InstructionCard from "@/components/InstructionCard.vue";

export default {
  name: 'Instructions',
  components: {
      InstructionCard,
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
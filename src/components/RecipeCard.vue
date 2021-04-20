<template>
    <div class="parent-group">
        <img src="../assets/logo.png" alt="">
        <div class="text-group">
            <h2>Fancy Recipe</h2>
            <h3>Smaller instructions here.....</h3>
        </div>
    </div>
</template>

<style scoped>
.parent-group {
    display: flex;
    flex-direction: row;
    background: #F2F2F7;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04);
    border-radius: 8px;
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
</style>
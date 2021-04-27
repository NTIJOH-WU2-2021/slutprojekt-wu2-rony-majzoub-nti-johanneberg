<template>
    <div class="parent-group">
        <img src="../assets/logo.png" alt="">
        <div class="text-group">
            <h2>Fancy Recipe</h2>
            <h3>Smaller instructions here.....</h3>
            <div class="pill-info">
                <div class="pill-subinfo">
                    <img src="../assets/schedule.svg" alt="">
                    <h4>35 min</h4>
                </div>
                <div class="pill-subinfo">
                    <img src="../assets/local_dining.svg" alt="">
                    <h4>7 ingredients</h4>
                </div>
            </div>
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
    margin-bottom: 24px;
    text-decoration: none;
}
.parent-group img {
    align-self: center;
    width: 40%;
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
.pill-info {
    background: #E8E8E8;
    border-radius: 48px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 150%;
    height: 17.5%;
}
.pill-info img {
    width: 24px;
    height: 24px;
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
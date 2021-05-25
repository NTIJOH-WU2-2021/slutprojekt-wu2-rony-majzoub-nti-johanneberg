import { createRouter, createWebHistory } from "vue-router";
import Recipes from "../views/Recipes.vue";
import Favorites from "../views/Favorites.vue";
import Fridge from "../views/Fridge.vue";
import Instructions from "../views/Instructions.vue"
import Ingredients from "../views/Ingredients.vue";


const routes = [
  {
    path: "/",
    name: "Recipes",
    component: Recipes,
  },
  {
    path: "/favorites",
    name: "Favorites",
    component: Favorites,
  },
  {
    path: "/fridge",
    name: "Fridge",
    component: Fridge,
  },
  {
    path: "/instructions/:id",
    name: "Instructions",
    component: Instructions,
    props: true,
  },
  {
    path: "/:id",
    name: "Ingredients",
    component: Ingredients,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
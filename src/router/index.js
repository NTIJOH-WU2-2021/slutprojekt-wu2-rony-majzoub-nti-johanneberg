import { createRouter, createWebHistory } from "vue-router";
import Recipes from "../views/Recipes.vue";
import Favorites from "../views/Favorites.vue";
import Tips from "../views/Tips.vue";
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
    path: "/tips",
    name: "Tips",
    component: Tips,
  },
  {
    path: "/ingredients",
    name: "Ingredients",
    component: Ingredients,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
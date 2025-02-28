import { createStore } from "vuex";
import type State from "@/interfaces/State";
import type ICategory from "./interfaces/ICategory";
import { getCategories, getRecipes } from "./http";
import type { Page } from "./interfaces/Page";
import type IRecipe from "./interfaces/IRecipe";

export default createStore<State>({
    state() {
        return {
            ingredients: [] as string[],
            categories: [] as ICategory[],
            content: "SelectIngredients",
            recipes: [] as IRecipe[]
        };
    },
    actions: {
        async loadCategories(state, language) {
            let categories: ICategory[] = await getCategories(language);
            state.commit('loadCategories', categories);
        },
        async loadRecipes(state, language) {
            let recipes: IRecipe[] = await getRecipes(language);
            state.commit('loadRecipes', recipes);
        }
    },
    mutations: {
        addIngredient(state, ingredient: string) {
            console.log("[addIngredient] adding ingredient:", ingredient);
            state.ingredients.push(ingredient);
        },
        removeIngredient(state, ingredient: string) {
            console.log("[removeIngredient] removing ingredient:", ingredient);
            state.ingredients = state.ingredients.filter((i) => i !== ingredient);
        },
        loadCategories(state, categories: ICategory[]) {
            console.log("[loadCategories] loading categories:", categories);
            state.categories = categories;
        },
        loadRecipes(state, recipes: IRecipe[]) {
            console.log("[loadRecipes] loading recipes:", recipes);
            state.recipes = recipes;
        },
        changeContent(state, content: Page) {
            console.log("[changeContent] changing content:", content);
            state.content = content;
        },
        clearIngredients(state) {
            console.log("[clearIngredients] clearing ingredients");
            state.ingredients = [];
        }
    }
});

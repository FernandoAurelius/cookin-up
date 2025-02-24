import { createStore } from "vuex";
import type State from "@/interfaces/State";
import type ICategory from "./interfaces/ICategory";
import { getCategories } from "./http";
import type { Page } from "./interfaces/Page";

export default createStore<State>({
    state() {
        return {
            ingredients: [] as string[],
            categories: [] as ICategory[],
            content: "SelectIngredients",
        };
    },
    actions: {
        async loadCategories(state) {
            let categories: ICategory[] = await getCategories();
            state.commit('loadCategories', categories);
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
        changeContent(state, content: Page) {
            console.log("[changeContent] changing content:", content);
            state.content = content;
        }
    }
});

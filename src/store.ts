import { createStore } from "vuex";
import type State from "@/interfaces/State";
import type ICategory from "./interfaces/ICategory";
import { getCategories } from "./http";

export default createStore<State>({
    state() {
        return {
            ingredients: [] as string[],
            categories: [] as ICategory[],
        };
    },
    actions: {
        async loadCategories(state) {
            await new Promise((resolver) => {
                setTimeout(resolver, 3000);
            })

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
        }
    }
});

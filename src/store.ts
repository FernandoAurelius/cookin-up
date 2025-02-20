import { createStore } from "vuex";
import type State from "@/interfaces/State";

export default createStore<State>({
    state() {
        return {
            ingredients: [] as string[]
        };
    },
    mutations: {
        addIngredient(state, ingredient: string) {
            state.ingredients.push(ingredient);
        },
        removeIngredient(state, ingredient: string) {
            state.ingredients = state.ingredients.filter((i) => i !== ingredient);
        }
    }
});

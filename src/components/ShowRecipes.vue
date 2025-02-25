<script lang="ts">
import type IRecipe from '@/interfaces/IRecipe';
import RecipeCard from './RecipeCard.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: "ShowRecipes",
    data() {
        return {
            recipes: [] as IRecipe[],
            ingredients: this.$store.state.ingredients as string[]
        }
    },
    methods: {
        compareRecipes(recipeIngredients: string[], userIngredients: string[]) {
            return recipeIngredients.every((ingredient: string) => {
                return userIngredients.includes(ingredient);
            });
        }
    },
    created() {
        this.$store.dispatch("loadRecipes");
        this.recipes = this.$store.state.recipes.filter((recipe: IRecipe) => {
            return this.compareRecipes(recipe.ingredients, this.ingredients);
        });
    },
    components: { RecipeCard }
})
</script>

<template>
    <section class="show-recipes">
        <h1 class="header recipes-title">Recipes</h1>
        <p class="paragraph-lg results-text">Results found: {{ recipes.length }}</p>
        <div v-if="recipes.length > 0">
            <p class="paragraph-lg options-text">See the options for recipes we found with the ingredients you have!</p>
            <ul class="recipes">
                <li v-for="recipe in recipes" :key="recipe.name">
                    <RecipeCard :recipe="recipe" />
                </li>
            </ul>
        </div>
        <div v-else>
            <p class="paragraph-lg">Ops! We couldn't find any results to your combination 😿. Maybe trying
                again?</p>
            <img src="/src/assets/images/no-recipes.png" alt=" Broken egg icon in a cartoon-style." class="no-recipes">
        </div>
    </section>
</template>

<style scoped>
.show-recipes {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
    gap: 0.5rem;
}

.recipes-title {
    color: var(--medium-green);
    margin-bottom: 2rem;
}

.results-text {
    color: var(--medium-green);
    margin-bottom: 1rem;
}

.recipes {
    margin-bottom: 1rem;
    display: flex;
    text-align: center;
    gap: 1.5rem;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
}

.options-text {
    margin-bottom: 1rem;
}

.no-recipes {
    width: 20rem;
    height: 20rem;
}
</style>
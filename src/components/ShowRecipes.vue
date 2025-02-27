<script lang="ts">
import type IRecipe from '@/interfaces/IRecipe';
import RecipeCard from './RecipeCard.vue';
import { defineComponent } from 'vue';
import.meta.env.VITE_BEBUG;

export default defineComponent({
    name: "ShowRecipes",
    data() {
        return {
            DEBUG: import.meta.env.VITE_DEBUG === 'true',
            recipes: [] as IRecipe[],
            ingredients: this.$store.state.ingredients as string[]
        }
    },
    methods: {
        compareRecipes(recipeIngredients: string[], userIngredients: string[]) {
            if (this.DEBUG) console.log('Comparing recipes:', { recipeIngredients, userIngredients });
            const result = recipeIngredients.every((ingredient: string) => {
                if (this.DEBUG) console.log(`Checking if ${ingredient} is in user ingredients:`, userIngredients.includes(ingredient));
                return userIngredients.includes(ingredient);
            });
            if (this.DEBUG) console.log('Recipe match result:', result);
            return result;
        }
    },
    created() {
        if (this.DEBUG) console.log('ShowRecipes component created');
        if (this.DEBUG) console.log('Dispatching loadRecipes action');
        this.$store.dispatch("loadRecipes", this.$i18n.locale);
        if (this.DEBUG) console.log('Store recipes:', this.$store.state.recipes);
        if (this.DEBUG) console.log('User ingredients:', this.ingredients);
    },
    watch: {
        "$store.state.recipes": {
            handler(newRecipes: IRecipe[]) {
                if (this.DEBUG) console.log('Recipes updated in store:', newRecipes);
                if (this.DEBUG) console.log('User ingredients:', this.ingredients);
                this.recipes = newRecipes.filter((recipe: IRecipe) => {
                    if (this.DEBUG) console.log(`Checking recipe ${recipe.name} with ingredients:`, recipe.ingredients);
                    return this.compareRecipes(recipe.ingredients, this.ingredients);
                });
                if (this.DEBUG) console.log('Filtered recipes:', this.recipes);
            },
            deep: true
        }
    },
    components: { RecipeCard }
})
</script>

<template>
    <section class="show-recipes">
        <h1 class="header recipes-title">{{ $t('showRecipesTitle') }}</h1>
        <p class="paragraph-lg results-text">{{ $t('showRecipesResultsText') }} {{ recipes.length }}</p>
        <div v-if="recipes.length > 0">
            <p class="paragraph-lg options-text">{{ $t('showRecipesOptionsText') }}</p>
            <ul class="recipes">
                <li v-for="recipe in recipes" :key="recipe.name">
                    <RecipeCard :recipe="recipe" />
                </li>
            </ul>
        </div>
        <div v-else>
            <p class="paragraph-lg">{{ $t('showRecipesNotFound') }}</p>
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
<script lang="ts">
import type IRecipe from '@/interfaces/IRecipe';
import { defineComponent, type PropType } from 'vue';

export default defineComponent({
    name: "RecipeCard",
    props: {
        recipe: { type: Object as PropType<IRecipe>, required: true }
    }
})
</script>

<template>
    <article class="recipe">
        <img class="recipe__header" :src="`/images/recipes/${recipe.image}`" :alt="recipe.name">
        <div class="recipe__body">
            {{ recipe.name }}
        </div>
    </article>
</template>

<style scoped>
.recipe {
    width: 17.5rem;
    border-radius: 1rem;
    background: var(--white);
    box-shadow: 4px 4px 10px 0px rgba(68, 68, 68, 0.2);
    height: 17.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.recipe__header {
    width: 100%;
    height: 100%;
    border-radius: 1rem 1rem 0 0;
}

.recipe__body {
    height: 50%;
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    font-weight: bolder;
    margin-top: 2rem;
}
</style>

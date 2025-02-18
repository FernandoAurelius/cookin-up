<script lang="ts">
import SelectIngredients from './SelectIngredients.vue';
import YourList from './YourList.vue';

export default {
    data() {
        return {
            ingredients: [] as string[]
        }
    },
    methods: {
        addIngredient(ingredient: string) {
            this.ingredients.push(ingredient);
        },
        removeIngredient(ingredient: string) {
            this.ingredients = this.ingredients.filter(i => i !== ingredient);
        }
    },
    components: { SelectIngredients, YourList }
}
</script>

<template>
    <main class="main-content">
        <YourList :ingredients="ingredients" />
        <SelectIngredients  
            @add-ingredient="addIngredient($event)"
            @remove-ingredient="removeIngredient($event)"
        />
    </main>
</template>

<style scoped>
.main-content {
    padding: 6.5rem 7.5rem;
    border-radius: 3.75rem 3.75rem 0rem 0rem;
    background: var(--cream, #FFFAF3);
    color: var(--gray, #444);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
}

@media only screen and (max-width: 1300px) {
    .main-content {
        padding: 5rem 3.75rem;
        gap: 3.5rem;
    }
}

@media only screen and (max-width: 767px) {
    .main-content {
        padding: 4rem 1.5rem;
        gap: 4rem;
    }
}
</style>

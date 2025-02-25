<script lang="ts">
import SelectIngredients from './SelectIngredients.vue';
import YourList from './YourList.vue';
import MainButton from './MainButton.vue';
import ShowRecipes from './ShowRecipes.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components: { SelectIngredients, YourList, MainButton, ShowRecipes }
})
</script>

<template>
    <main class="main-content">
        <YourList :ingredients="$store.state.ingredients" />
        <KeepAlive include="SelectIngredients">
            <SelectIngredients v-if="$store.state.content === 'SelectIngredients'" />
            <ShowRecipes v-else-if="$store.state.content === 'ShowRecipes'" />
        </KeepAlive>
        <MainButton />
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
    gap: 2.5rem;
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

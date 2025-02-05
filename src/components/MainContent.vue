<template>
    <main class="main-content">
        <section>
            <span class="subtitle-lg your-list-text">
                Your list:
            </span>

            <ul v-if="ingredients.length" class="ingredients-your-list">
                <li v-for="ingredient in ingredients" :key="ingredient" class="ingredient">
                    {{ ingredient }}
                </li>
            </ul>

            <p v-else class="paragraph empty-list">
                <img src="../assets/images/icons/empty-list.svg" alt="Search icon (magnifying glass)">
                Your list is empty, select ingredients to start.
            </p>
        </section>

        <SelectIngredients />
    </main>
</template>

<script lang="ts">
    import SelectIngredients from './SelectIngredients.vue';

    export default {
        data() {
            return {
                ingredients: ['Garlic', 'Butter', 'Oregano']
            }
        },
        components: { SelectIngredients }
    }
</script>

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

    .your-list-text {
        color: var(--coral, #F0633C);
        display: block;
        text-align: center;
        margin-bottom: 1.5rem;
    }

    .ingredients-your-list {
        display: flex;
        justify-content: center;
        gap: 1rem 1.5rem;
        flex-wrap: wrap;
    }

    .ingredient {
        display: inline-block;
        border-radius: 0.5rem;
        min-width: 4.25rem;
        padding: 0.5rem;
        text-align: center;
        transition: 0.2s;
        color: var(--cream, #FFFAF3);
        background: var(--coral, #F0633C);
        font-weight: 700;
    }

    .empty-list {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 0.25rem;

        color: var(--coral, #F0633C);
        text-align: center;
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

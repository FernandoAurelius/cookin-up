<script lang="ts">
import type ICategory from '@/interfaces/ICategory';
import CategoryCard from './CategoryCard.vue';
import { mapActions } from 'vuex';
import { defineComponent } from 'vue';


export default defineComponent({
    name: 'SelectIngredients',
    async created() {
        this.loadCategories(this.$i18n.locale);
    },
    methods: {
        ...mapActions(['loadCategories'])
    },
    components: { CategoryCard }
})
</script>

<template>
    <section class="select-ingredients">
        <h1 class="header ingredients-title">{{ $t('selectIngredientsTitle') }}</h1>
        <p class="paragraph-lg select-text">
            {{ $t('selectIngredientsText') }}
        </p>

        <ul class="categories">
            <li v-for="category in $store.state.categories" :key="category.name">
                <CategoryCard :category="category" />
            </li>
        </ul>

        <p class="paragraph tip">
            {{ $t('selectIngredientsTip') }}
        </p>
    </section>
</template>

<style scoped>
.select-ingredients {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.ingredients-title {
    color: var(--medium-green, #3D6D4A);
    display: block;
    margin-bottom: 1.5rem;
}

.instructions {
    margin-bottom: 2rem;
}

.categories {
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
}

.tip {
    align-self: flex-start;
    margin-bottom: 3.5rem;
}

@media only screen and (max-width: 767px) {
    .tip {
        margin-bottom: 2.5rem;
    }
}

.select-text {
    margin-bottom: 1.5rem;
}
</style>

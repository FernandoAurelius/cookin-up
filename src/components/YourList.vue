<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import Tag from './Tag.vue';

export default defineComponent({
    name: 'YourList',
    props: {
        ingredients: { type: Array as PropType<string[]>, required: true }
    },
    components: { Tag }
})
</script>

<template>
    <section>
        <span class="subtitle-lg your-list-text">
            {{ $t('yourListText') }}
        </span>

        <ul v-if="ingredients.length" class="ingredients-your-list">
            <li v-for="ingredient in ingredients" :key="ingredient">
                <Tag :text="ingredient" active />
            </li>
        </ul>

        <p v-else class="paragraph empty-list">
            <img src="../assets/images/icons/empty-list.svg" alt="Search icon (magnifying glass)">
            {{ $t('emptyYourList') }}
        </p>
    </section>
</template>

<style scoped>
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

.empty-list {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.25rem;

    color: var(--coral, #F0633C);
    text-align: center;
}
</style>

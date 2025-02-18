<script lang="ts">
import type ICategory from '@/interfaces/ICategory';
import type { PropType } from 'vue';
import Tag from './Tag.vue';
import SelectableIngredient from './SelectableIngredient.vue';

export default {
    props: {
        category: { type: Object as PropType<ICategory>, required: true }
    },
    emits:['addIngredient', 'removeIngredient'],
    components: { Tag, SelectableIngredient }
}
</script>

<template>
    <article class="category">
        <header class="category__header">
            <img :src="`/images/icons/category_ingredients/${category.image}`" class="category__image">
            <h2 class="paragraph-lg category__name">{{ category.name }}</h2>
        </header>
        <ul class="category__ingredients">
            <li v-for="ingredient in category.ingredients" :key="ingredient">
                <SelectableIngredient 
                  :ingredient="ingredient" 
                  @add-ingredient="$emit('addIngredient', $event)"
                  @remove-ingredient="$emit('removeIngredient', $event)"
                />
            </li>
        </ul>
    </article>
</template>

<style scoped>
.category {
  width: 19.5rem;
  padding: 1rem;
  border-radius: 1rem;
  background: var(--branco, #FFF);
  box-shadow: 4px 4px 10px 0px rgba(68, 68, 68, 0.05);
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.category__header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}
    
.category__image {
  width: 3.5rem;
}

.category__name {
  text-align: center;
  color: var(--verde-medio, #3D6D4A);
  font-weight: 700;
}

.category__ingredients {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}
</style>
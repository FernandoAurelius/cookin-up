<script lang="ts">
import Tag from './Tag.vue';

export default {
    name: "SelectableIngredient",
    props: {
        ingredient: { type: String, required: true }
    },
    data() {
        return {
            selected: false
        }
    },
    methods: {
        toggleSelected() {
            this.selected = !this.selected;

            if (this.selected) {
                this.$emit('addIngredient', this.ingredient);
                return;
            }
            this.$emit('removeIngredient', this.ingredient);
        }
    },
    emits: ['addIngredient', 'removeIngredient'],
    components: { Tag }
}
</script>

<template>
    <button 
        class="ingredient"
        @click="toggleSelected()"
    >
        <Tag :text="ingredient" :active="selected" />
    </button>
</template>

<style scoped>
.ingredient {
    cursor: pointer;
}
</style>
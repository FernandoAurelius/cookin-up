<script lang="ts">
import { mapMutations } from 'vuex';
import Tag from './Tag.vue';
import { defineComponent } from 'vue';

export default defineComponent({
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
        ...mapMutations(['addIngredient', 'removeIngredient']),
        toggleSelected() {
            this.selected = !this.selected;

            if (this.selected) {
                this.addIngredient(this.ingredient);
                return;
            }
            this.removeIngredient(this.ingredient);
        }
    },
    components: { Tag }
})
</script>

<template>
    <button class="ingredient" @click="toggleSelected()">
        <Tag :text="ingredient" :active="selected" />
    </button>
</template>

<style scoped>
.ingredient {
    cursor: pointer;
}
</style>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "MainButton",
    computed: {
        buttonText() {
            switch (this.$store.state.content) {
                case "SelectIngredients":
                    return this.$t('mainButtonSearchRecipes');
                case "ShowRecipes":
                    return this.$t('mainButtonEditList');
                default:
                    console.error("Unknown content! Please contact the admin.");
            }
        }
    },
    methods: {
        changeContent() {
            switch (this.$store.state.content) {
                case "SelectIngredients":
                    this.$store.commit("changeContent", "ShowRecipes");
                    break;
                case "ShowRecipes":
                    this.$store.commit("changeContent", "SelectIngredients");
                    break;
                default:
                    console.error("Unknown content! Please contact the admin.");
            }
        }
    }
})
</script>

<template>
    <button type="button" class="main-button" @click="changeContent()">
        {{ buttonText }}
    </button>
</template>

<style scoped>
.main-button {
    padding: 1em 7rem;
    background-color: var(--ochre);
    color: var(--white);
    font-size: large;
    font-weight: bold;
    border-radius: 5rem;
    cursor: pointer;
}
</style>
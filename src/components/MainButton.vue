<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "MainButton",
    data() {
        return {
            placeholder: ""
        }
    },
    created() {
        this.placeholder = "Search recipes!"
    },
    methods: {
        changeContent() {
            switch (this.placeholder) {
                case "Search recipes!":
                    this.placeholder = "Edit list";
                    this.$store.commit("changeContent", "ShowRecipes");
                    break;
                case "Edit list":
                    this.placeholder = "Search recipes!";
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
        {{ placeholder }}
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
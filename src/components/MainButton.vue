<script lang="ts">
    export default {
        name: "MainButton"
    }
</script>

<template>
    <button type="button" class="main-button">
        Search recipes!
    </button>
</template>

<style scoped>
    .main-button {
        padding: 1em 5em;
        background-color: var(--ochre);
        color: var(--white);
        font-size: large;
        font-weight: bold;
        border-radius: 5rem;
    }
</style>
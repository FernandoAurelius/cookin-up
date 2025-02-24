<script lang="ts">
export default {
    name: "Footer",
    data() {
        return {
            year: new Date().getFullYear()
        }
    }
}
</script>

<template>
<footer>
    Developed by @FernandoAurelius | @{{ year }}
</footer>
</template>

<style scoped>
footer {
    text-align: center;
    padding: 2rem;
    background-color: var(--dark-green);
    font-size: large;
    font-weight: bold;
}
</style>
<template>
    <button @click="toggleLanguage" class="language-toggle">
        <span v-if="currentLanguage === 'en'" class="flag-emoji">🇺🇸</span>
        <span v-else class="flag-emoji">🇧🇷</span>
    </button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: "LanguageButton",
    computed: {
        currentLanguage() {
            return this.$i18n.locale;
        },
    },
    methods: {
        toggleLanguage() {
            this.$i18n.locale = this.currentLanguage === 'en' ? 'pt' : 'en';
            this.$store.dispatch('loadCategories', this.$i18n.locale);
            this.$store.dispatch('loadRecipes', this.$i18n.locale);
        },
    },
});
</script>

<style scoped>
.language-toggle {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: black;
    border: none;
    cursor: pointer;
}
</style>
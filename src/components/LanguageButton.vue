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
            this.$store.commit('clearIngredients');
        },
    },
});
</script>

<template>
    <button @click="toggleLanguage" class="language-toggle">
        <div class="language-content">
            <div class="flag-container">
                <img v-if="$i18n.locale === 'pt'" width="24" height="24" src="https://img.icons8.com/emoji/32/brazil-emoji.png" alt="brazil-emoji"/>
                <img v-else width="24" height="24" src="https://img.icons8.com/emoji/32/united-states-emoji.png" alt="united-states-emoji"/> 
            </div>
            <span class="language-code">{{ $i18n.locale === 'en' ? 'EN' : 'PT' }}</span>
        </div>
    </button>
</template>

<style scoped>
.language-toggle {
    position: fixed;
    bottom: 30px;
    right: 30px;
    padding: 10px 16px;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 30px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3), 0 0 15px rgba(255, 255, 255, 0.1);
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(5px);
    z-index: 1000;
}

.language-toggle:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.4), 0 0 20px rgba(255, 255, 255, 0.15);
    background: rgba(0, 0, 0, 0.9);
}

.language-content {
    display: flex;
    align-items: center;
    gap: 8px;
}

.flag-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.language-code {
    color: white;
    font-weight: bold;
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
}

/* Responsive styles for mobile devices */
@media screen and (max-width: 768px) {
    .language-toggle {
        bottom: 20px;
        right: 20px;
        padding: 8px 12px;
    }
    
    .language-code {
        font-size: 12px;
    }
}

/* For very small screens */
@media screen and (max-width: 480px) {
    .language-toggle {
        bottom: 15px;
        right: 15px;
        padding: 6px 10px;
    }
    
    .flag-container img {
        width: 20px;
        height: 20px;
    }
}
</style>

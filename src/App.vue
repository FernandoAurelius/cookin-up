<script lang="ts">
import Banner from './components/Banner.vue';
import MainContent from './components/MainContent.vue';
import Footer from './components/Footer.vue';
import { defineComponent } from 'vue';
import LanguageButton from './components/LanguageButton.vue';

export default defineComponent({
  components: { Banner, MainContent, Footer, LanguageButton }
})
</script>

<template>
  <Banner />
  <MainContent />
  <Footer />
  <LanguageButton />
</template>
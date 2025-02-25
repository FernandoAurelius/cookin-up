<script lang="ts">
import Banner from './components/Banner.vue';
import MainContent from './components/MainContent.vue';
import Footer from './components/Footer.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { Banner, MainContent, Footer }
})
</script>

<template>
  <Banner />
  <MainContent />
  <Footer />
</template>
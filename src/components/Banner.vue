<template>
  <header class="banner">
    <div class="presentation">
      <img src="../assets/images/logo.svg" alt="Cookin'Up Logo" class="logo">

      <p class="header-lg header-phrase">
        <span class="green-text">
          {{ $t('headerPhrase1') }}
        </span>
        {{ $t('headerPhrase2') }}
      </p>

      <p class="subtitle-lg">
        {{ $t('headerSubtitle') }}
      </p>
    </div>

    <img src="../assets/images/banner-photo.png" alt="
    Photo of a woman cooking with a glass bowl in her hands. She
    is smiling and holding a phone between her face and shoulder.
    " class="banner-photo">
  </header>
</template>

<style scoped>
  .banner {
  padding: 4rem 7.5rem;
  color: var(--cream);

  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 3.25rem;
}

.logo {
  height: 4.5rem;
  margin-bottom: 3rem;
}

.header-phrase {
  margin-bottom: 2rem;
}

.green-text {
  color: var(--medium-green, #3D6D4A);
}

.banner-photo {
  width: 35rem;
}

@media only screen and (max-width: 1300px) {
  .banner {
    padding: 4rem 3.75rem;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .logo {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}

@media only screen and (max-width: 767px) {
  .banner {
    padding: 4rem 1.5rem;
  }

  .banner-photo {
    width: min(100%, 21.25rem);
  }
}
</style>

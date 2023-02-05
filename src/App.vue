<script setup lang="ts">
import SiteBackground from "./components/BackgroundComponent.vue";
import Header from "./components/HeaderComponent.vue";
import HomeComponent from "./components/HomeComponent.vue";
import SkillsComponent from "./components/SkillsComponent.vue";
import AboutComponent from "./components/AboutComponent.vue";
import ContactComponent from "./components/ContactComponent.vue";
</script>

<template>
  <Header />

  <main>
    <SiteBackground />
    <HomeComponent />
    <hr class="hr" />
    <SkillsComponent />
    <hr class="hr" />
    <AboutComponent />
    <hr class="hr" />
    <ContactComponent />
  </main>
</template>

<style scoped></style>

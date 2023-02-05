<script setup lang="ts">
import SiteBackground from "./components/BackgroundComponent.vue";
import Header from "./components/HeaderComponent.vue";
import HomeComponent from "./components/HomeComponent.vue";
import SkillsComponent from "./components/SkillsComponent.vue";
import AboutComponent from "./components/AboutComponent.vue";
</script>

<template>
  <Header />

  <main>
    <SiteBackground />
    <HomeComponent />
    <SkillsComponent />
    <AboutComponent />
  </main>
</template>

<style scoped></style>

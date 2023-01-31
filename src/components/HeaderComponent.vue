<script lang="ts">
// Please just use `@` to refer to the root "src" directory of the project
const logo = new URL("@/assets/images/logo.svg", import.meta.url).href;
const menuButton = new URL("@/assets/images/menu.svg", import.meta.url).href;

export default {
  name: "HeaderComponent",
  setup() {
    return {
      logo: logo,
      menu: menuButton,
    };
  },
};
</script>

<template>
  <div>
    <h1>Tom'space</h1>
    <img :src="logo" alt="my-logo" :on-click="" />
    <img :src="menu" alt="" />
  </div>
</template>

<style scoped>
header {
  font-size: large;
  font-family: $font-family-title;
}

h1 {
  color: white;
  letter-spacing: 0.8rem;
}
</style>

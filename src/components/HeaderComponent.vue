<script lang="ts">
// Please just use `@` to refer to the root "src" directory of the project
const logo = new URL("@/assets/images/logo.svg", import.meta.url).href;
const menuButton = new URL("@/assets/images/menu.svg", import.meta.url).href;

export default {
  name: "HeaderComponent",
  data() {
    return {
      showMenu: false,
    };
  },
  setup() {
    return {
      logo: logo,
      menu: menuButton,
    };
  },
  methods: {
    toggleNav: function () {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<template>
  <header class="header-container flex flex-row justify-around">
    <img :src="logo" class="header__logo" alt="logo" />
    <h1 class="header__title">TOM'SPACE</h1>
    <img
      :src="menu"
      class="header__menu-btn"
      alt="menu button"
      @click="toggleNav"
    />
  </header>
</template>

<style scoped>
.header-container {
  font-size: large;
  font-family: $font-family-title;
  position: relative;
  align-items: center;
}

.header__title {
  color: white;
  letter-spacing: 0.6rem;
  padding: 0;
  z-index: 100;
  margin: 0;
}

.header__logo {
  width: 10%;
  z-index: 200;
  position: absolute;
  order: -1;
  top: 9px;
  left: 35px;
}

.header__menu-btn {
  margin: 0.5rem 0 0 0;
}
</style>

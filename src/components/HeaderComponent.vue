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
  <header class="header-container">
    <img :src="logo" class="header__logo" alt="logo" />
    <h1 class="header__title"><span>T M'</span>SPACE</h1>
    <img
      :src="menu"
      class="header__menu-btn"
      alt="menu button"
      @click="toggleNav"
    />
  </header>
</template>

<style lang="scss">
.header-container {
  display: flex;
  font-size: large;
  font-family: $font-family-title;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding-left: 0.8rem;
}

.header__title {
  color: $secondary-accent;
  padding: 0;
  z-index: 100;
  margin: 0;
  font-size: xxx-large;
  font-style: italic;
  font-weight: normal;
}

.header__title span {
  font-style: normal;
  color: $secondary;
  letter-spacing: 0.6rem;
  font-weight: bolder;
}

.header__logo {
  z-index: 200;
  position: absolute;
  order: -1;
  top: 1rem;
  left: 2.2rem;
  width: 2.5rem;
}

.header__menu-btn {
  margin: 0.5rem 0 0 0;
  width: 10%;
}

.header {
  display: flex;
  flex-direction: row;

  &:first-child {
    z-index: -100;
  }
}

.header__logo-text {
  color: map-get($colors, "secondary", "base");
  font-family: "Roboto";
  font-weight: bolder;
  font-size: 3rem;
  letter-spacing: 5px;
  position: relative;
}

@media (min-width: $medium) {
  .header__logo {
    width: 3%;
    left: 2.3rem;
  }

  .header__menu-btn {
    width: 5%;
  }

  // .home_intro-text {
  //   width: 30rem;
  // }
}

@media (min-width: $large) {
  .header__logo {
    width: 2%;
    left: 2.3rem;
  }

  // .home_intro-text {
  //   width: 30rem;
  // }

  // .header__menu-btn {
  //   width: 5%;
  // }
}
</style>

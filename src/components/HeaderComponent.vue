<script lang="ts">
// Please just use `@` to refer to the root "src" directory of the project
const logo = new URL("@/assets/images/logo.svg", import.meta.url).href;
const openMenuButton = new URL("@/assets/images/openMenu.svg", import.meta.url)
  .href;
const closeMenuButton = new URL(
  "@/assets/images/closeMenu.svg",
  import.meta.url
).href;

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
      openMenuButton: openMenuButton,
      closeMenuButton: closeMenuButton,
    };
  },
  methods: {
    toggleNav: function () {
      this.showMenu = !this.showMenu;
    },
    scrollTo(refName: string) {
      this.toggleNav();
      const element = document.querySelector(refName)! as HTMLElement;
      const top = element?.offsetTop;

      window.scrollTo({
        top: top,
        left: 0,
        behavior: "smooth",
      });
    },
    handleScroll(event) {
      const header = document.querySelector(".header")! as HTMLElement;
      if (window.scrollY >= window.innerHeight) {
        header?.classList.add("header--isFixed");
      } else {
        header?.classList.remove("header--isFixed");
      }
    },
  },
};
</script>

<template>
  <header class="header-container">
    <img :src="logo" class="header__logo" alt="logo" />
    <h1 class="header__title"><span>T M'</span>SPACE</h1>
    <img
      :src="openMenuButton"
      class="header__menu-btn"
      alt="menu button"
      @click="toggleNav()"
    />
  </header>
  <Transition name="slide-fade">
    <menu class="menu" v-show="showMenu">
      <img
        @click="toggleNav()"
        :src="closeMenuButton"
        class="header__close-menu-btn filter-yellow"
      />
      <nav class="menu__nav">
        <li class="menu__nav-item">
          <a href="#" @click="scrollTo('.home')">Home</a>
        </li>
        <li class="menu__nav-item">
          <a href="#" @click="scrollTo('.about')">About</a>
        </li>
        <li class="menu__nav-item">
          <a href="#" @click="scrollTo('.skills')">Skills</a>
        </li>
        <li class="menu__nav-item">
          <a href="#content__contact" @click="scrollTo('.contact')">Contact</a>
        </li>
      </nav>
    </menu>
  </Transition>
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
    width: 4%;
  }
}

@media (min-width: $large) {
  .header__logo {
    width: 2%;
    left: 2.3rem;
  }
}

.menu {
  padding: 2rem;
  position: fixed;
  z-index: 2000;
  background-color: $primary;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  font-family: $font-family-title;
  font-size: xx-large;
  margin: 0;
  list-style-type: none;
}

.menu__nav-item {
  margin-bottom: 3rem;
}

.menu__external-links {
  display: flex;
  width: 10rem;
}

.menu__external-links--picture {
  width: 50%;
  margin: 0;
  padding: 0;
}

.header__close-menu-btn {
  width: 15%;
  margin-bottom: 3rem;
  margin-left: 16rem;
}

@media (min-width: 514px) {
  .header__close-menu-btn {
    width: 3%;
    margin-left: 26rem;
  }
}

.header__close-menu-btn,
.header__menu-btn {
  cursor: pointer;
}

.header__close-menu-btn {
  width: 15%;
  margin-bottom: 3rem;
  margin-left: 16rem;
}

@media (min-width: 514px) {
  .header__close-menu-btn {
    width: 3%;
    margin-left: 26rem;
  }
}

.header__close-menu-btn,
.header__menu-btn {
  cursor: pointer;
}
</style>

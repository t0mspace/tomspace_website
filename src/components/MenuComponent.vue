<script lang="ts">
const closeMenuButton = new URL(
  "@/assets/images/close-menu.svg",
  import.meta.url
).href;

export default {
  name: "MenuComponent",
  data() {
    return {
      showMenu: false,
    };
  },
  setup() {
    return {
      logo: logo,
      close_menu: closeMenuButton,
    };
  },
  methods: {
    scrollTo(refName: string) {
      this.toggleNav();
      const element = document.getElementById(refName)! as HTMLElement;
      const top = element.offsetTop;

      window.scrollTo({
        top: top,
        left: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<template>
  <Transition name="slide-fade">
    <menu class="menu-container" v-show="showMenu">
      <img
        @click="toggleNav"
        src="assets/images/close-menu.svg"
        class="header__close-menu-btn"
      />
      <nav class="menu__nav">
        <li class="menu__nav-item">
          <a href="#" @click="scrollTo('section-home')">Home</a>
        </li>
        <li class="menu__nav-item">
          <a href="#" @click="scrollTo('section-about')">About</a>
        </li>
        <li class="menu__nav-item">
          <a href="#" @click="scrollTo('section-skills')">Skills</a>
        </li>
        <li class="menu__nav-item">
          <a href="#content__contact" @click="scrollTo('section-contact')"
            >Contact</a
          >
        </li>
      </nav>
      <ul class="menu__external-links">
        <li class="menu__external-links--item">
          <a href="//github.com/t0mspace">
            <img
              class="menu__external-links--picture"
              src="assets/logos/github.svg"
              alt="link to my github repository"
            />
          </a>
        </li>
        <li class="menu__external-links--item">
          <a href="//codepen.io/t0mspace">
            <img
              class="menu__external-links--picture"
              src="assets/logos/codepen.svg"
              alt="link to my codepen repository"
            />
          </a>
        </li>
      </ul>
    </menu>
  </Transition>
</template>

<style scoped></style>

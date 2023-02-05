<script lang="ts">
import type { ImgHTMLAttributes } from "vue";
const astronaut: string = new URL(
  "@/assets/images/astronaut.svg",
  import.meta.url
) as unknown as ImgHTMLAttributes["src"] as string;
const earth: string = new URL(
  "@/assets/images/earth.svg",
  import.meta.url
) as unknown as ImgHTMLAttributes["src"] as string;

export default {
  name: "HomeComponent",
  setup() {
    return {
      astronaut: astronaut,
      earth: earth,
    };
  },
};
</script>

<template>
  <section class="home">
    <div class="home-container">
      <div class="home_intro-text">
        <blockquote class="home_intro">
          <span class="home_intro-hello"> Hi ! </span> <br />
          <br />
          My name's <strong>Thomas</strong><br />
          I'm a creative <strong>developer</strong><br /><br />
          Have a nice visit !
        </blockquote>
        <div class="home_intro-triangle"></div>
      </div>
      <img :src="astronaut" class="home_intro-astronaut" alt="astronaut" />
    </div>
    <img :src="earth" class="home_intro-earth" alt="earth" />
  </section>
</template>

<style lang="scss">
.home_intro-astronaut {
  width: 50%;
  margin-top: 22rem;
  z-index: zIndex("astronaut");
  position: absolute;
  transform: translatey(0px);
  animation: float 6s ease-in-out infinite;
}

.home_intro-earth {
  position: relative;
  left: 3rem;
  top: 9rem;
}

.home_intro {
  color: black;
  font-family: $font-family-text;
  font-size: larger;
}

.home_intro-text {
  background-color: white;
  border: 2px solid gray;
  border-radius: 6px;
  z-index: zIndex("phylacter");
}

.home_intro-triangle {
  position: relative;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 50px 50px 0 0;
  border-color: white transparent transparent transparent;
  top: 3rem;
  left: 12rem;
}

.home-container {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
}

.home_intro-hello {
  font-size: 4.3rem;
  font-weight: bold;
}
</style>

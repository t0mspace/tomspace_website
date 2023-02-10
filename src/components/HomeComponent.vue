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
  <section class="section-container home">
    <div class="home-container">
      <div class="home_intro-text">
        <blockquote class="home_intro">
          <span class="home_intro-hello"> Hi ! </span> <br />
          <br />
          My name's <strong>Thomas</strong><br />
          I'm a creative developer<br /><br />
          Have a nice visit !
        </blockquote>
        <div class="home_intro-triangle flip-y"></div>
      </div>
      <img :src="astronaut" class="home_intro-astronaut" alt="astronaut" />
    </div>
    <img :src="earth" class="home_intro-earth" alt="earth" />
  </section>
</template>

<style lang="scss">
.home {
  margin-bottom: 80rem;
}

.home_intro-astronaut {
  width: 30%;
  margin-top: 22rem;
  z-index: zIndex("astronaut");
  position: absolute;

  animation: float 6s ease-in-out infinite;
}

.home_intro-earth {
  position: absolute;
  left: 0;
  width: 30%;
  z-index: 50;
}

.home_intro {
  color: black;
  font-family: $font-family-text;
  font-size: x-large;
}

.home_intro-text {
  background-color: white;
  border: 2px solid gray;
  border-radius: 6px;
  z-index: zIndex("phylacter");
  width: 20rem;
  position: absolute;
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
  z-index: zIndex(home);
}

.home_intro-hello {
  font-size: 4.3rem;
  font-weight: bold;
}

@media (max-width: $small) {
  .home_intro-earth {
    left: 0rem;
    width: 100%;
    top: 40rem;
  }
}

@media (min-width: $small) and (max-width: $medium) {
  .home_intro-astronaut {
    left: 45rem;
    width: 15%;
  }
}

@media (min-width: $medium) and (max-width: $large) {
  .home_intro-astronaut {
    left: 60rem;
    width: 15%;
  }
}

@media (min-width: $large) {
  .home_intro-astronaut {
    left: 75rem;
    width: 15%;
  }
}

@media (min-width: $small) and (max-width: 1399px) {
  .home_intro-text {
    width: 30rem;
    left: 35rem;
  }

  .home_intro-earth {
    width: 80%;
    left: -10rem;
    top: 40rem;
  }

  .home_intro-triangle {
    left: 22rem;
  }
}

@media (min-width: $large) {
  .home_intro-text {
    width: 30rem;
    left: 50rem;
  }

  .home_intro-triangle {
    left: 23rem;
  }

  .home_intro-earth {
    width: 40%;
    top: 40rem;
  }
}
</style>

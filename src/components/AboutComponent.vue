<script lang="ts">
export default {
  name: "AboutComponent",
  setup() {
    return {};
  },
};
</script>

<template>
  <section>
    <div class="section-container">
      <h2 class="section_title">About</h2>
      <p>
        I've created this website first of all to learn
        <i
          ><a class="hover-underline-animation" href="//vuejs.org/">Vue.js</a>
        </i>
        and express my creativity.
      </p>
      <p>Technologies used</p>
      <ul>
        <li>HTML 5</li>
        <li>Sass</li>
        <li>Vuejs 3</li>
        <li>Vite</li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss"></style>

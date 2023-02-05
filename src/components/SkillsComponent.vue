<script lang="ts">
import type { ImgHTMLAttributes } from "vue";
const html5 = new URL("@/assets/images/skills/html.svg", import.meta.url).href;

const css: string = new URL(
  "@/assets/images/skills/css.svg",
  import.meta.url
) as unknown as ImgHTMLAttributes["src"] as string;

const sass: string = new URL(
  "@/assets/images/skills/sass.svg",
  import.meta.url
) as unknown as ImgHTMLAttributes["src"] as string;

const js: string = new URL(
  "@/assets/images/skills/javascript.svg",
  import.meta.url
) as unknown as ImgHTMLAttributes["src"] as string;

const php: string = new URL(
  "@/assets/images/skills/php.svg",
  import.meta.url
) as unknown as ImgHTMLAttributes["src"] as string;

const python: string = new URL(
  "@/assets/images/skills/python.svg",
  import.meta.url
) as unknown as ImgHTMLAttributes["src"] as string;

const mariadb: string = new URL(
  "@/assets/images/skills/mariadb.svg",
  import.meta.url
) as unknown as ImgHTMLAttributes["src"] as string;

const sql: string = new URL(
  "@/assets/images/skills/sql.svg",
  import.meta.url
) as unknown as ImgHTMLAttributes["src"] as string;

const symfony: string = new URL(
  "@/assets/images/skills/symfony_white.svg",
  import.meta.url
) as unknown as ImgHTMLAttributes["src"] as string;

const vue: string = new URL(
  "@/assets/images/skills/vue.svg",
  import.meta.url
) as unknown as ImgHTMLAttributes["src"] as string;

const ts: string = new URL(
  "@/assets/images/skills/typescript.svg",
  import.meta.url
) as unknown as ImgHTMLAttributes["src"] as string;

const ubuntu: string = new URL(
  "@/assets/images/skills/ubuntu.svg",
  import.meta.url
) as unknown as ImgHTMLAttributes["src"] as string;

const git: string = new URL(
  "@/assets/images/skills/git.svg",
  import.meta.url
) as unknown as ImgHTMLAttributes["src"] as string;

export default {
  name: "SkillsComponent",
  setup() {
    return {
      html5: html5,
      css: css,
      sass: sass,
      js: js,
      php: php,
      python: python,
      vue: vue,
      ts: ts,
      symfony: symfony,
      ubuntu: ubuntu,
      git: git,
    };
  },
};
</script>

<template>
  <section class="skills">
    <div class="section-container gap-1">
      <h2 class="section_title">My Skills</h2>
      <div class="skills_grid grid justify-center">
        <img :src="html5" class="skills_item filter-yellow" />
        <img :src="css" alt="" class="skills_item" />
        <img :src="sass" alt="" class="skills_item" />
        <img :src="js" alt="" class="skills_item" />
        <img :src="php" alt="" class="skills_item" />
        <img :src="python" alt="" class="skills_item" />
        <img :src="ts" alt="" class="skills_item" />
        <img :src="symfony" alt="" class="skills_item" />
        <img :src="vue" alt="" class="skills_item" />
        <img :src="ubuntu" alt="" class="skills_item" />
        <img :src="git" alt="" class="skills_item" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.skills_item {
  width: 8rem;
  margin: 0 2rem 2rem 2rem;
}
</style>

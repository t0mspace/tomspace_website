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
  <section class="section-container skills">
    <h2 class="section_title">My Skills</h2>
    <div class="skills_grid">
      <div>
        <img :src="html5" class="skills_item filter-yellow" />
      </div>
      <div>
        <img :src="css" alt="" class="skills_item" />
      </div>
      <div>
        <img :src="sass" alt="" class="skills_item" />
      </div>
      <div>
        <img :src="js" alt="" class="skills_item" />
      </div>
      <div>
        <img :src="php" alt="" class="skills_item" />
      </div>
      <div>
        <img :src="python" alt="" class="skills_item" />
      </div>
      <div>
        <img :src="ts" alt="" class="skills_item" />
      </div>
      <div>
        <img :src="symfony" alt="" class="skills_item" />
      </div>
      <div>
        <img :src="vue" alt="" class="skills_item" />
      </div>
      <div>
        <img :src="ubuntu" alt="" class="skills_item" />
      </div>
      <div>
        <img :src="git" alt="" class="skills_item" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
// .skills_item {
//   width: 8rem;
//   margin: 0 2rem 2rem 2rem;
// }

.skills {
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
}

.skills_grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 1rem;
  margin-top: 4rem;
}

.skills_grid > div {
  background: getColor(skills, light);
  padding: 1rem;
  display: inline-block;
  text-align: center;
  //grid-column: span 2;
}

// .skills_grid > div::before {
//   content: "";
//   padding-bottom: 100%;
//   display: block;
// }

.skills_grid > div::before,
.skills_grid > div > img {
  grid-area: 1 / 1 / 2 / 2;
}

.skills_grid > div > img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>

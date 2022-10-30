import { createApp } from 'vue/dist/vue.esm-bundler'
import './index.scss'

const app = createApp({
  data() {
    return {
      name: 'Thomas',
      showMenu: false
    }
  },
  methods: {
    toggleNav: function () {
      this.showMenu = !this.showMenu
    },
    scrollTo(refName: string) {
      this.toggleNav()
      const element = document.getElementById(refName)
      const top = element.offsetTop

      window.scrollTo({
        top: top,
        left: 0,
        behavior: 'smooth'
      })
    }
  }
})
app.mount('#app')

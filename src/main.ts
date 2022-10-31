import { createApp } from 'vue/dist/vue.esm-bundler'
import './index.scss'

const app = createApp({
    data() {
        return {
            name: 'Thomas',
            showMenu: false,
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll)
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll)
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
                behavior: 'smooth',
            })
        },
        handleScroll(event) {
            const header = document.querySelector('.header')
            if (window.scrollY >= window.innerHeight) {
                header?.classList.add('header--isFixed')
            } else {
                header?.classList.remove('header--isFixed')
            }
        },
    },
})
app.mount('#app')

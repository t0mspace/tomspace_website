import { createApp } from 'vue/dist/vue.esm-bundler'
import useValidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import './index.scss'

const app = createApp({
    data() {
        return {
            v$: useValidate(),
            name: 'Thomas',
            showMenu: false,
            email: '',
            message: '',
            formSubmit: false,
            formMessage: {
                success: {
                    message: 'Message successfully sent !',
                    color: 'green',
                },
                error: {
                    message: 'Please correct the errors in the form.',
                    color: 'red',
                },
            },
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll)
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll)
    },
    validations() {
        return {
            email: { required, email },
            message: { required },
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
        submitForm() {
            let formAlert = document.querySelector('.form-alert__wrapper')
            this.formSubmit = true
            this.v$.$validate()
            if (this.v$.$error) {
                formAlert?.classList.add('form--error')
            } else {
                formAlert?.classList.add('form--success')
            }
        },
        isFormSubmitted() {
            return this.formSubmit
        },
    },
})
app.mount('#app')

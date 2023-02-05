<script lang="ts">
import useValidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

export default {
  name: "ContactComponent",
  data() {
    return {
      v$: useValidate(),
      name: "Thomas",
      showMenu: false,
      email: "",
      message: "",
      formSubmit: false,
      formMessage: {
        success: {
          message: "Message successfully sent !",
          color: "green",
        },
        error: {
          message: "Please correct the errors in the form.",
          color: "red",
        },
      },
    };
  },
  validations() {
    return {
      email: { required, email },
      message: { required },
    };
  },
  methods: {
    submitForm() {
      let formAlert = document.querySelector(".form-alert__wrapper");
      this.formSubmit = true;
      this.v$.$validate();
      if (this.v$.$error) {
        formAlert?.classList.add("form--error");
      } else {
        formAlert?.classList.add("form--success");
      }
    },
    isFormSubmitted() {
      return this.formSubmit;
    },
  },
};
</script>

<template>
  <section class="section-container">
    <h2 class="section_title">Contact me</h2>
    <!-- <div bind:class="" id="form-alert" role="alert" class="form-alert">
      <div class="form-alert__wrapper">
        <span v-if="v$.$error">{{ formMessage.error.message }}</span>
        <span v-else-if="!v$.$error">{{ formMessage.success.message }}</span>
      </div>
    </div> -->

    <form
      action="https://formspree.io/f/xlevpylw"
      method="POST"
      @submit.prevent="submitForm"
      class="contact_form"
      novalidate
    >
      <div class="contact_input-container">
        <label class="contact_label inline-block"> Your email: </label>
        <input
          type="email"
          v-model="email"
          name="email"
          class="contact_input-email"
          required
        />
        <p v-if="v$.email.$error" class="">
          Please enter a valid email address
        </p>
      </div>
      <div class="contact_input-container">
        <label class="contact_label inline-block"> Your message: </label>
        <textarea
          name="message"
          v-model="message"
          rows="4"
          required
          class="contact_input-message"
        ></textarea>
        <p v-if="v$.message.$error" class="">
          Please enter a valid email address
        </p>
      </div>

      <button type="submit" class="btn">Send</button>
    </form>
  </section>
</template>

<style lang="scss"></style>

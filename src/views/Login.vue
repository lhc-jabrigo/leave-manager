<template lang="">
  <div class="c-form">
    <h1 class="c-form__ttl u-font-rancho">Leave Manager</h1>
    <div class="c-form__inner">
      <input
        type="email"
        v-model="userInfo.email"
        placeholder="Enter Email"
        class="c-form__inner__input"
      />
      <input
        type="password"
        v-model="userInfo.password"
        placeholder="Enter Password"
        class="c-form__inner__input"
      />
      <label for="role" class="c-form__inner__check-label">
        <input
          type="checkbox"
          name="role"
          class="c-form__inner__check-label__check"
          value="admin"
          v-model="userInfo.role"
        />
        Admin
      </label>
      <p class="c-form__inner__error">{{ error.length > 0 ? error : "" }}</p>
      <button type="button" class="c-btn is-full" @click.prevent="login">
        Login
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "SignIn",
  data() {
    return {
      userInfo: {
        email: "",
        password: "",
        role: false,
      },
      error: "",
    };
  },
  methods: {
    login() {
      if (!this.userInfo.email && !this.userInfo.password) {
        this.error = "Fields must not be empty.";
      } else if (!this.userInfo.password) {
        this.error = "Incorrect password.";
      } else if (!this.userInfo.email) {
        this.error = "Enter valid email.";
      } else if (this.userInfo.email && this.userInfo.password) {
        this.$store.dispatch("loggedAsAdmin", this.userInfo);
        this.$router.push("/");
      }
    },
  },
  mounted() {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      this.$router.push("/");
    }
  },
};
</script>
<style lang="scss" scoped>
.c-form {
  height: calc(100vh - 10rem);
}
.logo-head {
  width: 10rem;
}
</style>

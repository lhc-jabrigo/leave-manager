<template lang="">
  <div class="c-form">
    <h1 class="c-form__ttl u-font-rancho">Leave Manager</h1>
    <div class="c-form__inner">
      <input
        type="text"
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
      <button type="button" class="c-btn" @click.prevent="login">Login</button>
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
      },
    };
  },
  methods: {
    login() {
      localStorage.setItem("user", JSON.stringify(this.userInfo));
      console.log(this.userInfo);
    },
  },
  mounted() {
    let user = localStorage.getItem("user");
    if (user) {
      this.$router.push("/");
    }
  },
};
</script>
<style lang="scss" scoped>
.logo-head {
  width: 10rem;
}
.c-form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50rem;
  height: 100%;
  margin: auto;

  &__ttl {
    margin-bottom: 5rem;
  }

  &__inner {
    width: 100%;
    padding: 0 10rem;

    &__input {
      display: block;
      width: 100%;
      padding: 0.8rem;
      border-radius: 0.5rem;
      border: 1px solid $gray;
      margin: auto;
      margin-bottom: 1.5rem;
    }
  }
}

.c-btn {
  width: 100%;
}
</style>

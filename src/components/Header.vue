<template>
  <div class="u-layout">
    <div class="c-header">
      <div class="c-header__right">
        <h1 class="c-header__right__logo">
          <img
            src="../assets/img/logo-head.png"
            alt=""
            class="c-header__right__logo__img"
          />
        </h1>
        <Navbar />
      </div>
      <div class="c-header__user">
        <span class="c-header__user__name u-font-rancho">Hi, Admin</span>
        <button
          @click.prevent="logout"
          type="button"
          class="c-header__user__logout c-btn"
        >
          Logout
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";

export default {
  name: "Header",
  components: {
    Navbar,
  },
  methods: {
    logout() {
      localStorage.removeItem("user");
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss">
.c-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  &__right {
    display: flex;
    align-items: center;

    &__logo {
      width: 5rem;
      margin-right: 3rem;

      &__img {
        width: 100%;
      }
    }
  }

  &__user {
    &__name {
      margin-right: 2rem;
      font-size: 2rem;
    }
  }
}
</style>

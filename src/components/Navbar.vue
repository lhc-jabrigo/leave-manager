<template lang="">
  <div class="c-navbar">
    <router-link to="/" active-class="is-active" class="c-navbar__link"
      >Home</router-link
    >
    <router-link
      v-if="user.role"
      to="/employees"
      active-class="is-active"
      class="c-navbar__link"
      >Employees</router-link
    >
    <router-link
      to="/leave-manager"
      active-class="is-active"
      class="c-navbar__link"
      >Leave Manager</router-link
    >
  </div>
</template>
<script>
export default {
  name: "Navbar",
  props: ["user"],
};
</script>
<style lang="scss" scoped>
.c-navbar {
  &__link {
    text-decoration: none;
    color: inherit;

    &:not(:last-child) {
      margin-right: 2rem;
    }

    &.is-active {
      font-weight: bold;
    }
  }
}
</style>

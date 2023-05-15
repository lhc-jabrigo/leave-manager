<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
#app {
  background: url("@/assets/img/bg-yellow.jpg") no-repeat center center/cover;
  height: 100vh;
  position: relative;

  &::after {
    position: absolute;
    content: "";
    height: 10rem;
    width: 10rem;
    background: url("./assets/img/logo.png") no-repeat center center/contain;
    bottom: 2rem;
    right: 2rem;
  }
}
</style>

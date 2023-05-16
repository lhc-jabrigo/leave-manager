<template lang="">
  <Header />
  <router-view></router-view>
</template>
<script>
import Header from "../components/Header.vue";

export default {
  name: "Employees",
  components: {
    Header,
  },
};
</script>
<style lang="scss" scoped></style>

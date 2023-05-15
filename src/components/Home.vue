<template lang="">
  <Header />
  <div class="main">
    <div class="u-layout">home</div>
  </div>
</template>
<script>
import Header from "./Header.vue";

export default {
  name: "Home",
  components: {
    Header,
  },
  mounted() {
    let user = localStorage.getItem("user");
    if (!user) {
      this.$router.push("/login");
    }
  },
};
</script>
<style lang=""></style>

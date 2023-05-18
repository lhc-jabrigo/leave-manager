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
  mounted() {
    let user = JSON.parse(localStorage.getItem("user"));
    if (!user || !user.role) {
      this.$router.push("/login");
    }
  },
};
</script>
<style lang="scss" scoped></style>

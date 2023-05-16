<template lang="">
  <Header />
  <div>
    <div class="u-layout">Leaves</div>
  </div>
</template>
<script>
import Header from "../components/Header.vue";

export default {
  name: "LeaveManager",
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

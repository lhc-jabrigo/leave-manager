<template lang="">
  <Header />
  <div class="main">
    <div class="u-layout" v-if="user.role">home</div>
    <div class="u-layout" v-if="!user.role">
      <!-- <EmployeeCard /> -->
      <!-- {{ employee }} -->
    </div>
  </div>
</template>
<script>
import Header from "../components/Header.vue";
// import EmployeeCard from "@/components/EmployeeCard.vue";

export default {
  name: "Home",
  components: {
    Header,
    // EmployeeCard,
  },
  data() {
    return {
      user: {},
      employee: {},
    };
  },
  async mounted() {
    let user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      this.$router.push("/login");
    }

    this.user = user ? user : null;

    // let employee = await this.$store.dispatch("getEmployee", 2);
    // // this.employee = employee;
    // console.log(employee);
  },
};
</script>
<style lang=""></style>

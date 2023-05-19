<template lang="">
  <Header />
  <div class="main">
    <div class="u-layout" v-if="user.role">Page is under construction...</div>
    <div class="u-layout" v-if="!user.role">
      <h3 class="c-heading">
        Your record as of <span class="today">{{ today }}</span>
      </h3>
      <EmployeeCard :employee="employee" />
    </div>
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import EmployeeCard from "@/components/EmployeeCard.vue";

export default {
  name: "Home",
  components: {
    Header,
    EmployeeCard,
  },
  inject: ["$employees", "$leaves"],
  data() {
    return {
      user: {},
      employee: [],
      leaves: [],
      today: new Date().toLocaleString("en-PH"),
    };
  },
  async mounted() {
    let user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      this.$router.push("/login");
    }

    this.user = user ? user : null;

    if (!user.role) {
      let currentLogged = await this.$employees.getEmployeeByEmail(
        this.user.email
      );
      this.employee = currentLogged[0];
    }
  },
};
</script>
<style lang="scss" scoped>
.main {
  text-align: center;
}
.c-card {
  display: inline-block;
}
.c-heading {
  font-size: 2.5rem;

  .today {
    font-size: 2rem;
    color: $blue;
    letter-spacing: 3px;
    margin-left: 1rem;
  }
}
</style>

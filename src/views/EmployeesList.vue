<template lang="">
  <div>
    <div class="u-layout">
      <h2 class="c-heading">List of Employees</h2>

      <router-link to="/employees/add" class="c-btn is-reverse"
        >Add New Employee</router-link
      >

      <div class="employees">
        <EmployeeCard
          v-for="employee in employees"
          :key="employee.id"
          :employee="employee"
        />
      </div>
    </div>
  </div>
</template>
<script>
import EmployeeCard from "@/components/EmployeeCard.vue";

export default {
  name: "Employees",
  components: {
    EmployeeCard,
  },
  data() {
    return {
      employees: [],
    };
  },
  async mounted() {
    let user = JSON.parse(localStorage.getItem("user"));
    if (!user || !user.role) {
      this.$router.push("/login");
    }

    this.$store.dispatch("getEmployees");
    this.employees = await JSON.parse(this.$store.state.employees);
  },
};
</script>
<style lang="scss" scoped>
.c-btn {
  margin-bottom: 2rem;
  display: inline-block;
}
.employees {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5rem;
}
</style>

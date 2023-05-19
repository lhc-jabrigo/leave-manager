<template lang="">
  <div>
    <div class="u-layout">
      <h2 class="c-heading">List of Employees</h2>

      <router-link to="/employees/add" class="c-btn is-reverse"
        >Add New Employee</router-link
      >

      <h3 v-if="employees.length === 0">No registered employees.</h3>

      <div class="employees" v-if="employees.length !== 0">
        <EmployeeCard
          v-for="employee in employees"
          :key="employee.id"
          :employee="employee"
          @employee-deleted="reloadData"
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
  inject: ["$employees"],
  data() {
    return {
      employees: [],
    };
  },
  methods: {
    async reloadData() {
      let employees = await this.$employees.getAllEmployees();
      this.employees = employees;
    },
  },
  async mounted() {
    let user = JSON.parse(localStorage.getItem("user"));
    if (!user || !user.role) {
      this.$router.push("/login");
    }

    let employees = await this.$employees.getAllEmployees();
    this.employees = employees;
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

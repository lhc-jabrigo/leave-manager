<template lang="">
  <div class="u-layout">
    <div class="c-form">
      <h1 class="c-form__ttl u-font-rancho">Enter New Employee Info</h1>
      <div class="c-form__inner">
        <input
          type="text"
          v-model="employeeInfo.name"
          placeholder="Enter Employee Name"
          class="c-form__inner__input"
        />
        <select class="c-form__inner__input" v-model="employeeInfo.position">
          <option value="" selected disabled hidden>Select position</option>
          <option value="Web Developer">Web Developer</option>
          <option value="Web Designer">Web Designer</option>
        </select>
        <input
          type="number"
          min="0"
          v-model="employeeInfo.leaveCount.starting"
          placeholder="Enter Starting Leaves"
          class="c-form__inner__input"
        />
        <input
          type="number"
          min="0"
          v-model="employeeInfo.leaveCount.used"
          placeholder="Enter Used Leaves"
          class="c-form__inner__input"
        />
        <p class="c-form__inner__error" v-if="error">{{ error }}</p>
        <button
          type="button"
          class="c-btn is-full"
          @click.prevent="updateEmployee"
        >
          Update
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "UpdateEmployee",
  data() {
    return {
      employeeInfo: {
        name: "",
        position: "",
        leaveCount: {
          starting: "",
          used: "",
        },
      },
      error: null,
    };
  },
  methods: {
    updateEmployee() {
      if (
        !this.employeeInfo.name ||
        !this.employeeInfo.position ||
        !this.employeeInfo.leaveCount.starting ||
        !this.employeeInfo.leaveCount.used
      ) {
        this.error = "Check empty field!";
      } else {
        this.$store.dispatch("updateEmployee", this.employeeInfo);
        this.$router.push("/employees");
      }
    },
  },
  async mounted() {
    let user = JSON.parse(localStorage.getItem("user"));
    if (!user || !user.role) {
      this.$router.push("/login");
    }

    this.employeeInfo = localStorage.getItem("currentEmployee");
  },
};
</script>
<style lang="scss" scoped></style>

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
          <option value="" selected disabled>Select position</option>
          <option value="Web Developer">Web Developer</option>
          <option value="Web Designer">Web Designer</option>
        </select>
        <input
          type="number"
          min="0"
          v-model="employeeInfo.vlCount.starting"
          placeholder="Enter Starting Vacation Leaves"
          class="c-form__inner__input"
        />
        <input
          type="number"
          min="0"
          v-model="employeeInfo.vlCount.used"
          placeholder="Enter Used Vacation Leaves"
          class="c-form__inner__input"
        />
        <input
          type="number"
          min="0"
          v-model="employeeInfo.slCount.starting"
          placeholder="Enter Starting Sick Leaves"
          class="c-form__inner__input"
        />
        <input
          type="number"
          min="0"
          v-model="employeeInfo.slCount.used"
          placeholder="Enter Used Sick Leaves"
          class="c-form__inner__input"
        />
        <p class="c-form__inner__error" v-if="error">{{ error }}</p>
        <button
          type="button"
          class="c-btn is-full"
          @click.prevent="addEmployee"
        >
          Add
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddEmployee",
  data() {
    return {
      employeeInfo: {
        name: "",
        position: "",
        vlCount: {
          starting: "",
          used: 0,
        },
        slCount: {
          starting: "",
          used: 0,
        },
      },
      error: null,
    };
  },
  methods: {
    addEmployee() {
      if (
        !this.employeeInfo.name ||
        !this.employeeInfo.position ||
        !this.employeeInfo.vlCount.starting ||
        !this.employeeInfo.slCount.starting
      ) {
        this.error = "Check empty field!";
      } else {
        this.$store.dispatch("addEmployee", this.employeeInfo);
        this.$router.push("/employees");
      }
    },
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

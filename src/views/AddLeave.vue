<template lang="">
  <Header />
  <div class="u-layout">
    <div class="c-form">
      <h1 class="c-form__ttl u-font-rancho">Enter Leave Details</h1>
      <div class="c-form__inner">
        <select class="c-form__inner__input" v-model="leaveInfo.leaveType">
          <option value="" selected disabled>Select leaveType</option>
          <option value="SL">SL</option>
          <option value="VL">VL</option>
        </select>
        <label for="startDate">
          Start date:
          <input
            type="datetime-local"
            name="startDate"
            v-model="leaveInfo.startDate"
            placeholder="Enter start date"
            class="c-form__inner__input is-datetime"
          />
        </label>
        <label for="startDate">
          End date:
          <input
            type="datetime-local"
            name="endDate"
            v-model="leaveInfo.endDate"
            placeholder="Enter end date"
            class="c-form__inner__input is-datetime"
          />
        </label>
        <select
          class="c-form__inner__input is-short"
          v-model="leaveInfo.leaveDuration"
        >
          <option value="" selected disabled>Duration</option>
          <option value="0.5">0.5</option>
          <option value="1">1</option>
        </select>
        <textarea
          class="c-form__inner__input"
          cols="30"
          rows="10"
          v-model="leaveInfo.reason"
          placeholder="Provide reason for leave."
        >
        </textarea>
        <p class="c-form__inner__error" v-if="error">{{ error }}</p>
        <button type="button" class="c-btn" @click.prevent="addLeave">
          File leave
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";

export default {
  name: "AddLeave",
  components: {
    Header,
  },
  inject: ["$leaves"],
  data() {
    return {
      leaveInfo: {
        filedBy: "",
        leaveType: "",
        startDate: "",
        endDate: "",
        leaveDuration: "",
        reason: "",
        status: "pending",
      },
      error: "",
    };
  },
  methods: {
    addLeave() {
      if (
        !this.leaveInfo.filedBy ||
        !this.leaveInfo.leaveType ||
        !this.leaveInfo.startDate ||
        !this.leaveInfo.endDate ||
        !this.leaveInfo.leaveDuration ||
        !this.leaveInfo.reason
      ) {
        this.error = "Check empty field!";
      } else {
        this.$leaves.addLeave(this.leaveInfo);
        this.$router.push("/leave-manager");
      }
    },
  },
  mounted() {
    let user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      this.$router.push("/login");
    }

    this.leaveInfo.filedBy = user.email;
  },
};
</script>
<style lang="scss" scoped>
.c-form {
  &__inner {
    padding: 0;
  }
}

.c-btn {
  margin: auto;
  display: block;
}
</style>

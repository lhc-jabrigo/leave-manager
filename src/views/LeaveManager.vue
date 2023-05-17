<template lang="">
  <Header />
  <div class="u-layout">
    <table class="c-table">
      <thead class="c-table__thead">
        <tr class="c-table__row">
          <td class="c-table__row__data">Filer</td>
          <td class="c-table__row__data">Leave Type</td>
          <td class="c-table__row__data">Start date</td>
          <td class="c-table__row__data">End Date</td>
          <td class="c-table__row__data">Leave Duration</td>
          <td class="c-table__row__data">Reason</td>
          <td class="c-table__row__data">Status</td>
          <td class="c-table__row__data is-action"></td>
        </tr>
      </thead>
      <tbody class="c-table__tbody">
        <tr class="c-table__row" v-for="leave in leave" :key="leave.id">
          <td class="c-table__row__data">{{ leave.filedBy }}</td>
          <td class="c-table__row__data">{{ leave.leaveType }}</td>
          <td class="c-table__row__data">{{ leave.startDate }}</td>
          <td class="c-table__row__data">{{ leave.endDate }}</td>
          <td class="c-table__row__data">{{ leave.leaveDuration }}</td>
          <td class="c-table__row__data">{{ leave.reason }}</td>
          <td class="c-table__row__data">{{ leave.status }}</td>
          <td class="c-table__row__data is-action">
            <button class="c-btn is-green">Approve</button>
            <button class="c-btn is-red">Reject</button>
            <button
              class="c-btn is-blue"
              @click.prevent="updateLeave(leave.id)"
            >
              Edit
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import Header from "../components/Header.vue";

export default {
  name: "LeaveManager",
  inject: ["$leaves"],
  components: {
    Header,
  },
  data() {
    return {
      leave: {
        filedBy: "",
        leaveType: "",
        startDate: "",
        endDate: "",
        leaveDuration: "",
        reason: "",
        status: "",
      },
    };
  },
  methods: {
    updateLeave(id) {
      this.$router.push(`leave/edit/${id}`);
    },
  },
  async mounted() {
    let user = localStorage.getItem("user");
    if (!user) {
      this.$router.push("/login");
    }

    let leaves = await this.$leaves.getAllLeaves();
    this.leave = leaves;
  },
};
</script>
<style lang="scss"></style>

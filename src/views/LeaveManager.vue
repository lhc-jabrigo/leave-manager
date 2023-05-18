<template lang="">
  <Header />
  <div class="u-layout">
    <h2 class="c-heading">Filed Leaves</h2>

    <router-link
      to="/leave/add"
      v-if="!user.role"
      class="c-heading-btn c-btn is-reverse"
      >File New Leave</router-link
    >

    <h3 v-if="leave.length === 0">No leave filed</h3>

    <table v-if="leave.length !== 0" class="c-table">
      <thead class="c-table__thead">
        <tr class="c-table__row">
          <td class="c-table__row__data">Filer</td>
          <td class="c-table__row__data">Leave Type</td>
          <td class="c-table__row__data">Start date</td>
          <td class="c-table__row__data">End Date</td>
          <td class="c-table__row__data">Leave Duration</td>
          <td class="c-table__row__data is-reason">Reason</td>
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
          <td class="c-table__row__data is-reason">
            <p
              :title="leave.reason"
              :class="{ isClamped: isClamped }"
              @click.prevent="toggleClamp"
            >
              {{ leave.reason }}
            </p>
          </td>

          <td
            class="c-table__row__data is-status"
            :style="
              leave.status === `approved`
                ? `color: green`
                : leave.status === `rejected`
                ? `color: red`
                : ``
            "
          >
            {{ leave.status }}
          </td>
          <td class="c-table__row__data is-action">
            <div v-if="user.role && leave.status === `pending`">
              <button
                class="c-btn is-green"
                @click.prevent="approveLeave(leave.id)"
              >
                Approve
              </button>
              <button
                class="c-btn is-red"
                @click.prevent="rejectLeave(leave.id)"
              >
                Reject
              </button>
            </div>
            <div v-if="!user.role && leave.status === `pending`">
              <button
                class="c-btn is-blue"
                @click.prevent="updateLeave(leave.id)"
              >
                Edit
              </button>
              <button
                class="c-btn is-red"
                @click.prevent="deleteLeave(leave.id)"
              >
                Cancel
              </button>
            </div>
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
      user: {},
      leave: {
        filedBy: "",
        leaveType: "",
        startDate: "",
        endDate: "",
        leaveDuration: "",
        reason: "",
        status: "",
      },
      isClamped: true,
      isApproved: true,
    };
  },
  methods: {
    updateLeave(id) {
      this.$router.push(`leave/edit/${id}`);
    },
    deleteLeave(id) {
      this.$leaves.deleteLeave(id);
      this.loadData();
    },
    async approveLeave(id) {
      let leave = await this.$leaves.getLeave(id);
      leave.status = "approved";
      this.$leaves.updateLeave(leave);
      this.$router.push("/leave-manager");
      this.loadData();
    },
    async rejectLeave(id) {
      let leave = await this.$leaves.getLeave(id);
      leave.status = "rejected";
      this.$leaves.updateLeave(leave);
      this.$router.push("/leave-manager");
      this.loadData();
    },
    toggleClamp() {
      this.isClamped = !this.isClamped;
    },
    async loadData() {
      let user = JSON.parse(localStorage.getItem("user"));
      if (!user) {
        this.$router.push("/login");
      }

      this.user = user ? user : null;

      if (user?.role) {
        let leaves = await this.$leaves.getAllLeaves();
        this.leave = leaves;
      } else if (!user?.role) {
        let leaves = await this.$leaves.getAllLeaves();
        this.leave = leaves.filter((leave) => leave.filedBy == user.email);
      }
    },
  },
  async mounted() {
    this.loadData();
  },
};
</script>
<style lang="scss" scoped>
.c-heading-btn {
  margin-bottom: 3rem;
  display: inline-block;
}
.is-reason {
  max-width: 20rem;

  .isClamped {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}

.is-status {
  color: $blue;
}
</style>

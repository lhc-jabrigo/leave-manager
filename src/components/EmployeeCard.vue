<template lang="">
  <div class="c-card">
    <p class="c-card__id">
      <span class="c-card__span">Employee ID </span>{{ employee.id }}
    </p>
    <p class="c-card__name">
      {{ employee.name }}
    </p>
    <p class="c-card__position">
      {{ employee.position }}
    </p>
    <div class="c-card__leaveCount">
      <p class="c-card__leaveCount__label">Leave Count</p>
      <p class="c-card__leaveCount__sub">
        <span class="c-card__leaveCount__span">Starting:</span>
        {{ employee.leaveCount.starting }}
      </p>
      <p class="c-card__leaveCount__sub">
        <span class="c-card__leaveCount__span">Used:</span>
        {{ employee.leaveCount.used }}
      </p>
      <p class="c-card__leaveCount__sub">
        <span class="c-card__leaveCount__span">Remaining:</span>
        {{ employee.leaveCount.starting - employee.leaveCount.used }}
      </p>
    </div>
    <div class="c-card__btns">
      <button
        class="c-card__btns__btn is-edit c-btn"
        @click.prevent="updateEmployee(employee.id)"
      >
        Edit
      </button>
      <button
        class="c-card__btns__btn is-delete c-btn"
        @click.prevent="deleteEmployee(employee.id)"
      >
        Delete
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "EmployeeCard",
  props: ["employee"],
  methods: {
    deleteEmployee(id) {
      this.$store.dispatch("deleteEmployee", id);
    },
  },
};
</script>
<style lang="scss" scoped>
.c-card {
  border-radius: 2rem;
  background: rgba(255, 255, 255, 0.5);
  padding: 2rem;

  &__id {
    color: $blue;
    margin-bottom: 1rem;
  }

  &__name {
    font-size: 2rem;
    font-weight: bold;
  }

  &__position {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }

  &__leaveCount {
    margin-bottom: 2rem;

    &__label {
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
  }

  &__btns {
    &__btn {
      width: 5rem;
      width: 6rem;
      text-align: center;

      &.is-edit {
        background: transparent;
        margin-right: 0.5rem;
        color: green;
        border: 1px solid green;

        &:hover {
          background: green;
          color: #fff;
          opacity: 1;
        }
      }
      &.is-delete {
        background: transparent;
        margin-right: 0.5rem;
        color: red;
        border: 1px solid red;

        &:hover {
          background: red;
          color: #fff;
          opacity: 1;
        }
      }
    }
  }
}
</style>

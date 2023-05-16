import axios from "axios";
import { createStore } from "vuex";

const loadData = async () => {
  let employees = await axios.get("http://localhost:3000/employees");
  localStorage.setItem("employees", JSON.stringify(employees.data));
};

export default createStore({
  state: {
    isAuthenticated: false,
    employees: localStorage.getItem("employees"),
  },
  getters: {},
  mutations: {
    async GET_EMPLOYEES(state) {
      loadData();

      return state.employees;
    },
    async DELETE_EMPLOYEE(state, id) {
      await axios.delete(`http://localhost:3000/employees/${id}`);
      loadData();
    },
    async ADD_EMPLOYEE(state, employeeInfo) {
      await axios.post("http://localhost:3000/employees", employeeInfo);
      loadData();
    },
  },
  actions: {
    getEmployees({ commit }) {
      commit("GET_EMPLOYEES");
    },
    addEmployee({ commit }, employeeInfo) {
      commit("ADD_EMPLOYEE", employeeInfo);
    },
    deleteEmployee({ commit }, id) {
      commit("DELETE_EMPLOYEE", id);
    },
  },
});

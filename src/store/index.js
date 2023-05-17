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
    async GET_EMPLOYEE(state, id) {
      let employee = await axios.get(`http://localhost:3000/employees/${id}`);
      localStorage.setItem("currentEmployee", JSON.stringify(employee.data));
    },
    async DELETE_EMPLOYEE(state, id) {
      await axios.delete(`http://localhost:3000/employees/${id}`);
      loadData();
    },
    async ADD_EMPLOYEE(state, employeeInfo) {
      await axios.post("http://localhost:3000/employees", employeeInfo);
      loadData();
    },
    async UPDATE_EMPLOYEE(state, employeeInfo) {
      await axios.put(
        `http://localhost:3000/employees/${employeeInfo.id}`,
        employeeInfo
      );
    },
  },
  actions: {
    getEmployees({ commit }) {
      commit("GET_EMPLOYEES");
    },
    getEmployee({ commit }, id) {
      commit("GET_EMPLOYEE", id);
    },
    addEmployee({ commit }, employeeInfo) {
      commit("ADD_EMPLOYEE", employeeInfo);
    },
    updateEmployee({ commit }, employeeInfo) {
      commit("UPDATE_EMPLOYEE", employeeInfo);
    },
    deleteEmployee({ commit }, id) {
      commit("DELETE_EMPLOYEE", id);
    },
  },
});

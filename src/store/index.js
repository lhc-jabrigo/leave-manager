import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    isAdmin: false,
    employees: localStorage.getItem("employees"),
  },
  getters: {},
  mutations: {
    LOGGED_AS_ADMIN(state, userInfo) {
      state.isAdmin = userInfo?.role ? true : false;
      localStorage.setItem("user", JSON.stringify(userInfo));
    },
    async GET_EMPLOYEES(state) {
      return state.employees;
    },
    async GET_EMPLOYEE(state, id) {
      let employee = await axios.get(`http://localhost:3000/employees/${id}`);
      localStorage.setItem("currentEmployee", JSON.stringify(employee.data));
    },
    async DELETE_EMPLOYEE(state, id) {
      await axios.delete(`http://localhost:3000/employees/${id}`);
    },
    async ADD_EMPLOYEE(state, employeeInfo) {
      await axios.post("http://localhost:3000/employees", employeeInfo);
    },
    async UPDATE_EMPLOYEE(state, employeeInfo) {
      await axios.put(
        `http://localhost:3000/employees/${employeeInfo.id}`,
        employeeInfo
      );
    },
    async LOAD_DATA(state) {
      let employees = await axios.get("http://localhost:3000/employees");
      state.employees = employees.data;
      localStorage.setItem("employees", JSON.stringify(employees.data));
    },
  },
  actions: {
    loggedAsAdmin({ commit }, userInfo) {
      commit("LOGGED_AS_ADMIN", userInfo);
    },
    getEmployees({ commit }) {
      commit("GET_EMPLOYEES");
    },
    getEmployee({ commit }, id) {
      commit("GET_EMPLOYEE", id);
    },
    addEmployee({ commit }, employeeInfo) {
      commit("ADD_EMPLOYEE", employeeInfo);
      commit("LOAD_DATA");
    },
    updateEmployee({ commit }, employeeInfo) {
      commit("UPDATE_EMPLOYEE", employeeInfo);
      commit("LOAD_DATA");
    },
    deleteEmployee({ commit }, id) {
      commit("DELETE_EMPLOYEE", id);
      commit("LOAD_DATA");
    },
  },
});

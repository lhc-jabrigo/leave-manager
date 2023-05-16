import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Employees from "../views/Employees.vue";
import EmployeesList from "../views/EmployeesList.vue";
import LeaveManager from "../views/LeaveManager.vue";
import AddEmployee from "../views/AddEmployee.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/employees",
    component: Employees,
    children: [
      {
        path: "",
        component: EmployeesList,
      },
      {
        path: "add",
        component: AddEmployee,
      },
    ],
  },
  {
    path: "/leave-manager",
    component: LeaveManager,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;

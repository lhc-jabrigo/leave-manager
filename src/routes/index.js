import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Employees from "../views/Employees.vue";
import EmployeesList from "../views/EmployeesList.vue";
import LeaveManager from "../views/LeaveManager.vue";
import AddEmployee from "../views/AddEmployee.vue";
import UpdateEmployee from "../views/UpdateEmployee.vue";
import AddLeave from "../views/AddLeave.vue";
import UpdateLeave from "../views/UpdateLeave.vue";

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
      {
        path: "update/:id",
        component: UpdateEmployee,
      },
    ],
  },
  {
    path: "/leave-manager",
    component: LeaveManager,
  },
  {
    path: "/leave/add",
    component: AddLeave,
  },
  {
    path: "/leave/edit/:id",
    component: UpdateLeave,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;

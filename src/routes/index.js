import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
import Employees from "../components/Employees.vue";
import LeaveManager from "../components/LeaveManager.vue";

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

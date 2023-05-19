import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./routes";
import $bus from "./utils/Events";
import $employees from "./events/employeesEvents";
import $leaves from "./events/leavesEvents";

const app = createApp(App);

app.use(store);
app.use(router);
app.provide("$bus", $bus);
app.provide("$employees", $employees);
app.provide("$leaves", $leaves);
app.mount("#app");

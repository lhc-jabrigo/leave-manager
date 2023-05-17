import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./routes";
import $bus from "./utils/Events";
import $leaves from "./LeaveManager/index";

const app = createApp(App);

app.use(store);
app.use(router);
app.provide("$bus", $bus);
app.provide("$leaves", $leaves);
app.mount("#app");

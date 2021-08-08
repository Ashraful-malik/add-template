import Vue from "vue";
import VueRouter from "vue-router";
import home from "../components/Home.vue";
import templates from "../components/templates.vue";
import Detail from "../components/Detail.vue";
import Login from "../components/Login.vue";
import Addproject from "../components/Addproject.vue";
import notfound from "../components/Notfound.vue";
Vue.use(VueRouter);
const routes = [
  { name: "home", path: "/", component: home },
  { name: "templates", path: "/templates", component: templates },
  { name: "template", path: "/template/:id", component: Detail },
  { name: "login", path: "/admin", component: Login },
  {
    name: "add",
    path: "/add",
    component: Addproject,
  },
  { name: "Not Found", path: "*", component: notfound },
];
const router = new VueRouter({
  mode: "history",
  routes,
});
export default router;

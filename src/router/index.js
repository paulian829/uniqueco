import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("../views/Signup.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/terms-and-conditions",
    name: "Terms",
    component: () => import("../views/terms.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/Dashboard.vue"),
  },
  {
    path: "/university/update",
    name: "UniversityUpdate",
    component: () => import("../views/uni-update.vue"),
  },
  {
    path: "/university/view",
    name: "UniversityView",
    component: () => import("../views/uni-view.vue"),
  },
  {
    path: "/messages",
    name: "Messages",
    component: () => import("../views/messages.vue"),
  },
  {
    path: "/university/list",
    name: "universityList",
    component: () => import("../views/school-list.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;

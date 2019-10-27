import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.path === "/") {
    let token = localStorage.getItem("token");
    if (!token) {
      let registered = localStorage.getItem("registered");
      if (!registered) {
        next("/register");
      } else {
        next("/login");
      }
    } else {
      next();
    }
  } else if (to.path === "/login") {
    let registered = localStorage.getItem("registered");
    if (!registered) {
      next("/register");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;

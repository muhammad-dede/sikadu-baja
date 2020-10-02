import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("@/views/Login"),
    meta: { title: "Login | Sikadu-Baja" },
    beforeEnter: (to, from, next) => {
      if (store.getters["auth/authenticated"]) {
        return next({
          name: "Beranda",
        });
      }
      next();
    },
  },
  {
    path: "/beranda",
    name: "Beranda",
    component: () => import("@/views/Beranda"),
    meta: { title: "Beranda | Sikadu-Baja" },
    beforeEnter: (to, from, next) => {
      if (!store.getters["auth/authenticated"]) {
        return next({
          name: "Login",
        });
      }
      next();
    },
  },
  {
    path: "/jadwal",
    name: "Jadwal",
    component: () => import("@/views/Jadwal"),
    beforeEnter: (to, from, next) => {
      if (!store.getters["auth/authenticated"]) {
        return next({
          name: "Login",
        });
      }
      next();
    },
  },
  {
    path: "/nilai",
    name: "Nilai",
    component: () => import("@/views/Nilai"),
    beforeEnter: (to, from, next) => {
      if (!store.getters["auth/authenticated"]) {
        return next({
          name: "Login",
        });
      }
      next();
    },
  },
  {
    path: "/pembayaran",
    name: "Pembayaran",
    component: () => import("@/views/Pembayaran"),
    beforeEnter: (to, from, next) => {
      if (!store.getters["auth/authenticated"]) {
        return next({
          name: "Login",
        });
      }
      next();
    },
  },
  {
    path: "/profil",
    name: "Profil",
    component: () => import("@/views/Profil"),
    beforeEnter: (to, from, next) => {
      if (!store.getters["auth/authenticated"]) {
        return next({
          name: "Profil",
        });
      }
      next();
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
import Login from "@/views/Login";
import Beranda from "@/views/Beranda";
import Jadwal from "@/views/Jadwal";
import Nilai from "@/views/Nilai";
import Pembayaran from "@/views/Pembayaran";
import Profil from "@/views/Profil";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
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
    component: Beranda,
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
    component: Jadwal,
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
    component: Nilai,
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
    component: Pembayaran,
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
    component: Profil,
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

import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login";
import Beranda from "@/views/Beranda";
import Jadwal from "@/views/Jadwal";
import Nilai from "@/views/Nilai";
import Pembayaran from "@/views/Pembayaran";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/beranda",
    name: "Beranda",
    component: Beranda,
  },
  {
    path: "/jadwal",
    name: "Jadwal",
    component: Jadwal,
  },
  {
    path: "/nilai",
    name: "Nilai",
    component: Nilai,
  },
  {
    path: "/pembayaran",
    name: "Pembayaran",
    component: Pembayaran,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

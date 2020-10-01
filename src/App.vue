<template>
  <v-app>
    <side-bar v-if="authenticated"></side-bar>
    <v-main>
      <nav-top v-if="authenticated"></nav-top>
      <router-view />
    </v-main>
    <nav-bottom v-if="authenticated"></nav-bottom>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

import SideBar from "@/views/templates/SideBar";
import NavTop from "@/views/templates/NavTop";
import NavBottom from "@/views/templates/NavBottom";

export default {
  components: {
    SideBar,
    NavTop,
    NavBottom,
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
  },
};
</script>

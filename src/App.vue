<template>
  <v-app>
    <side-bar v-if="authenticated"></side-bar>
    <v-main>
      <router-view />
    </v-main>
    <nav-bottom v-if="authenticated"></nav-bottom>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

import SideBar from "@/components/SideBar";
import NavBottom from "@/components/NavBottom";

export default {
  components: {
    SideBar,
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

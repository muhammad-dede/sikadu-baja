<template>
  <v-toolbar flat>
    <v-item-group>
      <v-item class="pr-2 d-lg-none">
        <v-img
          max-height="80"
          max-width="190"
          src="@/assets/brand-logo.svg"
        ></v-img>
      </v-item>
    </v-item-group>

    <v-toolbar-title class="d-none d-lg-block">Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-menu>
      <template v-slot:activator="{ on, attrs }">
        <v-btn-fab fab dark v-bind="attrs" v-on="on">
          Muhammad
          <v-list-item-avatar class="ml-1">
            <img src="" />
          </v-list-item-avatar>
        </v-btn-fab>
      </template>

      <v-list>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Jane Smith</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          router
          :to="item.link"
          color="blue"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "NavTop",
  data() {
    return {
      items: [
        { title: "Profil", icon: "mdi-account", link: "/profil" },
        { title: "Logout", icon: "mdi-logout", link: "/logout" },
      ],
      computed: {
        ...mapGetters({
          authenticated: "auth/authenticated",
          user: "auth/user",
        }),
      },
    };
  },
};
</script>

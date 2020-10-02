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

    <v-toolbar-title class="d-none d-lg-block"
      ><strong>{{ $route.name }}</strong></v-toolbar-title
    >
    <v-spacer></v-spacer>
    <v-menu transition="slide-x-transition">
      <template v-slot:activator="{ on }">
        <v-btn icon x-large v-on="on" class="ma-1">
          <v-avatar size="45">
            <v-img :src="user.ProfilePict"></v-img>
          </v-avatar>
        </v-btn>
      </template>
      <v-card>
        <v-list-item-content class="justify-center">
          <div class="mx-auto text-center">
            <v-avatar small>
              <v-img :src="user.ProfilePict"></v-img>
            </v-avatar>
            <h4 class="px-2 mt-2">{{ user.Name }}</h4>
            <p class="caption px-2">
              {{ user.Email }}
            </p>
            <v-divider class="my-1"></v-divider>
            <!-- <router-link to="/profil" tag="v-btn">
              <v-btn depressed rounded text block link :to="profil">
                Profil
              </v-btn>
            </router-link> -->
            <v-btn depressed rounded text block @click.prevent="handleLogout">
              Logout
            </v-btn>
          </div>
        </v-list-item-content>
      </v-card>
    </v-menu>
  </v-toolbar>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "NavTop",

  data() {
    return {
      //
    };
  },
  computed: {
    ...mapGetters({
      token: "auth/authenticated",
      user: "auth/user",
    }),
  },
  methods: {
    ...mapActions({
      logoutAction: "auth/logout",
    }),

    handleLogout() {
      this.logoutAction().then(() => {
        this.$router.replace({
          name: "Login",
        });
      });
    },
  },
};
</script>

<style>
strong {
  color: #4682b4;
}
</style>

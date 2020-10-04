<template>
  <div>
    <v-container fluid class="mb-16">
      <v-alert icon="mdi-school" prominent text id="home">
        Hallo <strong>{{ user.Name }}</strong
        >, Selamat Datang Di Sistem Informasi Akademik Terpadu
      </v-alert>
      <v-row>
        <v-col cols="12" sm="6" md="6">
          <v-img
            src="@/assets/ilustration/undraw_Status_update_re_dm9y.svg"
          ></v-img>
        </v-col>
        <v-col cols="12" md="6" sm="6">
          <v-card class="mx-auto text-center" color="#4682b4" dark>
            <v-card-text>
              <v-sheet color="white">
                <v-sparkline
                  :value="nilai.Data"
                  color="#4682b4"
                  height="100"
                  padding="24"
                  stroke-linecap="round"
                  smooth
                >
                  <template v-slot:label="item"> ${{ item.value }} </template>
                </v-sparkline>
              </v-sheet>
            </v-card-text>

            <v-card-text>
              <div class="display-1 font-weight-thin">Nilai Semester</div>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions class="justify-center">
              <v-btn block text> Lihat Nilai </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  name: "Beranda",
  metaInfo: {
    title: "Sikadu-Baja",
    titleTemplate: "%s | Beranda",
    htmlAttrs: {
      lang: "en",
      amp: true,
    },
  },

  created() {
    this.$store.dispatch("beranda/getNilai");
  },

  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
    ...mapState("beranda", ["nilai"]),
  },

  data: () => ({
    value: [423, 446, 675, 510, 590, 610, 760],
  }),
};
</script>

<style scoped>
#home {
  color: #4682b4;
}
</style>>

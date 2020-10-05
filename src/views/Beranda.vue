<template>
  <div>
    <v-container fluid class="mb-16">
      <v-alert icon="mdi-school" prominent text id="home">
        Hallo <strong>{{ user.Name }}</strong
        >, Selamat Datang Di Sistem Informasi Akademik Terpadu
      </v-alert>
      <v-row class="pt-3">
        <v-col cols="12" sm="6" md="6">
          <v-img
            src="@/assets/ilustration/undraw_creative_team_r90h.svg"
          ></v-img>
        </v-col>
        <v-col cols="12" md="6" sm="6">
          <v-card class="mx-auto" max-width="500">
            <v-card-title class="blue--text"
              >Nilai Indeks Prestasi Kumulatif</v-card-title
            >
            <column-chart
              class="pt-5 px-5"
              v-if="result"
              :data="result"
            ></column-chart>
            <v-divider class="mx-4"></v-divider>
            <v-card-actions>
              <router-link to="/nilai" class="text-decoration-none">
                <v-btn color="#4682b4" text> Lihat Nilai </v-btn>
              </router-link>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

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

  data() {
    return {
      result: [],
    };
  },

  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
      chartNilai: "beranda/chartNilai",
    }),
  },

  mounted() {
    this.fetchData();
  },

  methods: {
    //
    ...mapActions({
      getChartNilai: "beranda/getChartNilai",
    }),

    fetchData() {
      const token = localStorage.getItem("token");
      this.getChartNilai(token).then(() => {
        let result = [];
        this.chartNilai.forEach((nilai) => {
          result.push([nilai.Semester, nilai.Cumulative]);
        });
        this.result = result;
      });
    },
  },
};
</script>

<style scoped>
#home {
  color: #4682b4;
}
</style>>

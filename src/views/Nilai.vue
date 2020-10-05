<template>
  <div class="nilai">
    <v-container fluid class="mb-16">
      <v-row>
        <v-col>
          <v-alert id="alert" border="left" colored-border elevation="2">
            <h3>
              <strong>IPK : {{ dataNilai.GPA }}</strong>
              <v-spacer></v-spacer>
              <v-btn
                id="detail-btn"
                class="white--text"
                x-small
                @click.prevent="clickPrintTranskrip()"
                >Cetak Transkrip</v-btn
              >
            </h3>
          </v-alert>
          <v-simple-table outlined>
            <template v-slot:default>
              <thead>
                <tr id="custom-text">
                  <th class="text-left">Periode Semester</th>
                  <th class="text-left">Semester</th>
                  <th class="text-left">IPK Semester</th>
                  <th class="text-left">Detail</th>
                  <th class="text-left">Print</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="nilai in dataNilai.Data" :key="nilai.Periodic">
                  <td>{{ nilai.Periodic }}</td>
                  <td class="pl-9">{{ nilai.Semester }}</td>
                  <td class="pl-9">{{ nilai.Cumulative }}</td>
                  <td class="text-left">
                    <v-btn
                      id="detail-btn"
                      class="white--text"
                      x-small
                      @click.prevent="clickDetailNilai(nilai)"
                      >Detail</v-btn
                    >
                  </td>
                  <td>
                    <v-btn
                      id="detail-btn"
                      class="white--text"
                      x-small
                      @click.prevent="clickPrintNilai(nilai)"
                      >Print</v-btn
                    >
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
        <v-col cols="6" class="d-none d-sm-block">
          <v-img
            src="@/assets/ilustration/undraw_data_reports_706v.svg"
          ></v-img>
        </v-col>
      </v-row>
      <v-dialog v-model="dialog" max-width="700">
        <v-card>
          <v-card-title class="headline"
            ><strong>
              Nilai Semester {{ detailNilai.Year }}/{{
                Number(detailNilai.Year) + 1
              }}
              {{ detailNilai.Quart === "1" ? "Ganjil" : "Genap" }}</strong
            >
          </v-card-title>
          <v-card-text>
            <v-simple-table dense>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Mata Kuliah</th>
                    <th class="text-left">SKS</th>
                    <th class="text-left">Nilai</th>
                    <th class="text-left">Bobot</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="detail in detailNilai.Data"
                    :key="detail.CourseName"
                  >
                    <td>{{ detail.CourseName }}</td>
                    <td>{{ detail.Credit }}</td>
                    <td>{{ detail.GradeLetter }}</td>
                    <td class="text-center">{{ detail.GradePoint }}</td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <h3><strong>IPK Semester</strong></h3>
                    </td>
                    <td colspan="2" class="text-right">
                      <h3>
                        <strong>{{ detailNilai.Cumulative }}</strong>
                      </h3>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">
              Tutup
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Nilai",

  metaInfo: {
    title: "Sikadu-Baja",
    titleTemplate: "%s | Nilai",
    htmlAttrs: {
      lang: "en",
      amp: true,
    },
  },

  data() {
    return {
      dialog: false,
    };
  },

  created() {
    const token = localStorage.getItem("token");
    this.getNilai(token);
  },

  computed: {
    ...mapGetters("nilai", ["dataNilai"]),
    ...mapGetters("nilai", ["detailNilai"]),
  },

  methods: {
    // mapAction for direct all function/method
    ...mapActions({
      getNilai: "nilai/getNilai",
      getDetailNilai: "nilai/getDetailNilai",
      printNilai: "nilai/printNilai",
      printTranskrip: "nilai/printTranskrip",
    }),

    // show detail nilai method
    clickDetailNilai(nilai) {
      const params = {
        year: nilai.Year,
        quart: nilai.Quart,
        token: localStorage.getItem("token"),
      };
      this.getDetailNilai(params).then(() => {
        this.dialog = true;
      });
    },

    // Print Nilai
    clickPrintNilai(nilai) {
      const params = {
        year: nilai.Year,
        quart: nilai.Quart,
        token: localStorage.getItem("token"),
      };
      this.printNilai(params);
    },

    // Print Transkrip
    clickPrintTranskrip() {
      const token = localStorage.getItem("token");
      this.printTranskrip(token);
    },
  },
};
</script>

<style scoped>
#custom-text {
  color: #4682b4;
}
#detail-btn {
  background-color: #4682b4;
}
#alert {
  color: #4682b4;
}
</style>

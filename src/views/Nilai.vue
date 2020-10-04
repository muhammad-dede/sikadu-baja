<template>
  <div>
    <v-container fluid class="mb-16">
      <v-row>
        <v-col>
          <v-alert id="alert" border="left" colored-border elevation="2">
            <h3>
              <strong>IPK : {{ nilai.GPA }}</strong>
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
                <tr v-for="nilai in nilai.Data" :key="nilai.Semester">
                  <td>{{ nilai.Periodic }}</td>
                  <td class="pl-9">{{ nilai.Semester }}</td>
                  <td class="pl-9">{{ nilai.Cumulative }}</td>
                  <td class="text-left">
                    <v-btn
                      id="detail-btn"
                      class="white--text"
                      x-small
                      @click.prevent="detailNilai(nilai)"
                      >Detail</v-btn
                    >
                  </td>
                  <td>
                    <v-btn
                      id="detail-btn"
                      class="white--text"
                      x-small
                      @click.prevent="printNilai(nilai)"
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
    </v-container>
    <v-dialog v-model="dialog" persistent max-width="700">
      <v-card>
        <v-card-title class="headline"
          ><strong>
            Nilai Semester {{ detail.Year }}/{{ Number(detail.Year) + 1 }}
            {{ detail.Quart === "1" ? "Ganjil" : "Genap" }}</strong
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
                <tr v-for="detail in detail.Data" :key="detail.Quart">
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
                      <strong>{{ detail.Cumulative }}</strong>
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
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";

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

  methods: {
    detailNilai(nilai) {
      this.$store
        .dispatch("nilai/getDetailNilai", {
          year: nilai.Year,
          quart: nilai.Quart,
        })
        .then(() => {
          this.dialog = true;
        })
        .catch(() => {
          this.dialog = false;
        });
    },

    printNilai(nilai) {
      axios({
        url:
          "mahasiswa/report/grade/" +
          nilai.Year +
          "/" +
          nilai.Quart +
          "/" +
          localStorage.getItem("token"),
        method: "GET",
        responseType: "blob", // important
      }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Nilai_Semester.pdf");
        document.body.appendChild(link);
        link.click();
      });
    },
  },

  computed: {
    ...mapState("nilai", ["nilai"]),
    ...mapState("nilai", ["detail"]),
  },

  created() {
    this.$store.dispatch("nilai/getNilai");
  },
};
</script>

<style>
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

<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr id="custom-text">
                  <th class="text-left">
                    Periode Semester
                  </th>
                  <th class="text-left">
                    Semester
                  </th>
                  <th class="text-left">
                    IPK Semester
                  </th>
                  <th class="text-left">
                    Detail
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="nilai in nilai.Data" :key="nilai.Semester">
                  <td>{{ nilai.Periodic }}</td>
                  <td class="pl-9">{{ nilai.Semester }}</td>
                  <td class="pl-9">{{ nilai.Cumulative }}</td>
                  <td>
                    <v-btn
                      id="detail-btn"
                      class="white--text"
                      x-small
                      @click.prevent="detailNilai()"
                      :data-semester="nilai.Semester"
                      >Detail</v-btn
                    >
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
        <v-col cols="5">
          <v-img
            src="@/assets/ilustration/undraw_data_reports_706v.svg"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
    <v-dialog v-model="dialog" persistent max-width="500">
      <v-card>
        <v-card-title class="headline">
          Use Google's location service?
        </v-card-title>
        <v-card-text
          >Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.</v-card-text
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">
            Disagree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";

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

  computed: {
    ...mapState("nilai", ["nilai"]),
  },

  methods: {
    detailNilai() {
      const button = document.querySelector("#detail-btn");
      console.log(button.dataset.semester);
      this.dialog = true;
    },
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
</style>

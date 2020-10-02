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
                <tr v-for="data in nilai.Data" :key="data.Semester">
                  <td>{{ data.Periodic }}</td>
                  <td class="pl-9">{{ data.Semester }}</td>
                  <td class="pl-9">{{ data.Cumulative }}</td>
                  <td>
                    <v-bottom-sheet v-model="sheet" inset>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn color="orange" dark v-bind="attrs" v-on="on">
                          Open Inset
                        </v-btn>
                      </template>
                      <v-sheet class="text-center" height="200px">
                        <v-btn
                          class="mt-6"
                          text
                          color="error"
                          @click="sheet = !sheet"
                        >
                          close
                        </v-btn>
                        <div class="my-3">
                          This is a bottom sheet using the inset prop
                        </div>
                      </v-sheet>
                    </v-bottom-sheet>
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
  data: () => ({
    sheet: false,
  }),
  computed: {
    ...mapState("nilai", ["nilai"]),
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
</style>

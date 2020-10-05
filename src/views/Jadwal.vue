<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col>
          <v-alert id="alert" border="left" colored-border elevation="2">
            <h3>
              <strong>Kartu Rencana Studi</strong>
            </h3>
          </v-alert>
          <v-simple-table outlined>
            <template v-slot:default>
              <thead>
                <tr id="custom-text">
                  <th class="text-left">Periode Semester</th>
                  <th class="text-left">Detail</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="jadwal in dataJadwal.List" :key="jadwal.Name">
                  <td>{{ jadwal.Name }}</td>
                  <td class="text-left">
                    <v-btn
                      id="detail-btn"
                      class="white--text"
                      x-small
                      @click.prevent="clickDetailJadwal(jadwal)"
                      >Lihat Jadwal</v-btn
                    >
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <v-dialog v-model="dialog">
            <v-card>
              <v-card-title class="headline"
                ><strong>
                  Kartu Rencana Studi {{ detailJadwal.Year }}/{{
                    Number(detailJadwal.Year) + 1
                  }}
                  {{ detailJadwal.Quart === "1" ? "Ganjil" : "Genap" }}</strong
                >
              </v-card-title>
              <v-card-text>
                <v-simple-table dense>
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-left">Mata Kuliah</th>
                        <th class="text-left">Kelas</th>
                        <th class="text-left">Ruangan</th>
                        <th class="text-left">Dosen</th>
                        <th class="text-left">Hari</th>
                        <th class="text-left">Semester</th>
                        <th class="text-left">Dari</th>
                        <th class="text-left">Sampai</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="detail in detailJadwal.Data"
                        :key="detail.CourseName"
                      >
                        <td>{{ detail.CourseName }}</td>
                        <td>{{ detail.Class }}</td>
                        <td>{{ detail.Room }}</td>
                        <td>{{ detail.Lecturer }}</td>
                        <td>{{ detail.Days }}</td>
                        <td>{{ detail.Semester }}</td>
                        <td>{{ detail.Times.FromTime }}</td>
                        <td>{{ detail.Times.ToTime }}</td>
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
        </v-col>
        <v-col cols="6" class="d-none d-sm-block">
          <v-img src="@/assets/ilustration/undraw_events_2p66.svg"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Jadwal",
  metaInfo: {
    title: "Sikadu-Baja",
    titleTemplate: "%s | Jadwal Perkuliahan",
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
    this.getJadwal(token);
  },

  computed: {
    ...mapGetters("jadwal", ["dataJadwal"]),
    ...mapGetters("jadwal", ["detailJadwal"]),
  },

  methods: {
    //
    ...mapActions({
      getJadwal: "jadwal/getJadwal",
      getDetailJadwal: "jadwal/getDetailJadwal",
    }),

    clickDetailJadwal(jadwal) {
      const params = {
        year: jadwal.Year,
        quart: jadwal.Quart,
        token: localStorage.getItem("token"),
      };
      this.getDetailJadwal(params)
        .then(() => {
          this.dialog = true;
        })
        .catch(() => {
          this.dialog = false;
        });
    },
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

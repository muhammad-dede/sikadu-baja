<template>
  <div>
    <v-container fluid class="mb-16">
      <v-row>
        <v-col>
          <v-alert id="alert" border="left" colored-border elevation="2">
            <h3>
              <strong>Status Pembayaran Mahasiswa</strong>
            </h3>
          </v-alert>
          <v-expansion-panels focusable>
            <v-expansion-panel
              v-for="data in pembayaran.Bill"
              :key="data.No"
              class="my-1"
            >
              <v-expansion-panel-header id="text-color">
                <v-row>
                  <v-col>{{ data.Period }}</v-col>
                  <v-col>{{ data.Status }}</v-col>
                </v-row>
              </v-expansion-panel-header>
              <v-expansion-panel-content id="text-color">
                <v-card class="elevation-2">
                  <v-card-text>
                    <v-list dense>
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title>Tagihan Ke-1</v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-content>
                          <v-list-item-title>
                            Rp. {{ data.First }}</v-list-item-title
                          >
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title>Tagihan Ke-2</v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-content>
                          <v-list-item-title>
                            Rp. {{ data.Second }}</v-list-item-title
                          >
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title>Tagihan Ke-3</v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-content>
                          <v-list-item-title>
                            Rp. {{ data.Third }}</v-list-item-title
                          >
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title>Tagihan Ke-4</v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-content>
                          <v-list-item-title>
                            Rp. {{ data.Fourth }}</v-list-item-title
                          >
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title>Tagihan Ke-5</v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-content>
                          <v-list-item-title>
                            Rp. {{ data.Fifth }}</v-list-item-title
                          >
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                    <v-divider></v-divider>
                    <v-list dense>
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title
                            ><strong>Total tagihan</strong></v-list-item-title
                          >
                        </v-list-item-content>
                        <v-list-item-content>
                          <v-list-item-title
                            ><strong
                              >Rp. {{ data.Remain }}</strong
                            ></v-list-item-title
                          >
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title
                            ><strong
                              >Yang sudah dibayar</strong
                            ></v-list-item-title
                          >
                        </v-list-item-content>
                        <v-list-item-content>
                          <v-list-item-title
                            ><strong
                              >Rp. {{ data.Paid }}</strong
                            ></v-list-item-title
                          >
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
        <v-col cols="6" class="d-none d-sm-block">
          <v-img
            src="@/assets/ilustration/undraw_online_payments_luau.svg"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Pembayaran",
  metaInfo: {
    title: "Sikadu-Baja",
    titleTemplate: "%s | Pembayaran",
    htmlAttrs: {
      lang: "en",
      amp: true,
    },
  },
  computed: {
    ...mapState("pembayaran", ["pembayaran"]),
  },
  created() {
    this.$store.dispatch("pembayaran/getPembayaran");
  },
};
</script>

<style scoped>
strong {
  color: #4682b4;
}
#text-color {
  color: #4682b4;
}
</style>

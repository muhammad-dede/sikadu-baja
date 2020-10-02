<template>
  <div>
    <v-container fluid class="mb-16">
      <v-row>
        <v-col>
          <v-timeline dense>
            <v-timeline-item v-for="data in pembayaran.Bill" :key="data.No">
              <v-card class="elevation-2">
                <v-card-title class="headline">
                  {{ data.Period }}
                </v-card-title>
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
            </v-timeline-item>
          </v-timeline>
        </v-col>
        <v-col cols="5" class="d-none d-sm-block">
          <v-img
            src="@/assets/ilustration/undraw_printing_invoices_5r4r.svg"
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

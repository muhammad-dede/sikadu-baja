<template>
  <v-app>
    <v-container class="pt-10">
      <v-row no-gutters>
        <v-col cols="12" sm="6" md="8" class="d-none d-md-block">
          <v-card class="pa-2" flat>
            <v-img
              src="@/assets/ilustration/undraw_Data_points_re_vkpq.svg"
            ></v-img>
          </v-card>
        </v-col>
        <v-col md="4">
          <v-card class="pa-2" flat>
            <v-container>
              <div>
                <v-img src="../assets/brand-logo.svg" class="mb-5"></v-img>
                <span class="font-weight-bold" id="custom-text">Masuk</span
                ><br />
                <small class="mb-13" id="custom-text">
                  Masukkan Nomor Induk Mahasiswa & Kata Sandi Kamu
                </small>
                <v-form ref="form" v-model="valid">
                  <v-alert
                    class="mt-8"
                    border="left"
                    colored-border
                    id="custom-text"
                    dense
                  >
                    <v-text-field
                      class="mt-n3"
                      label="Nomor Induk Mahasiswa"
                      :rules="npmRules"
                      hide-details="auto"
                      v-model="form.user"
                    ></v-text-field>
                    <v-text-field
                      @keyup.enter="submit"
                      class="mt-3"
                      label="Kata Sandi"
                      :rules="passwordRules"
                      hide-details="auto"
                      type="password"
                      v-model="form.password"
                    ></v-text-field>
                  </v-alert>
                  <error v-if="error"></error>
                  <v-btn
                    block
                    rounded
                    :loading="loading"
                    id="custom-btn"
                    color="white--text mt-8"
                    @click="submit"
                    >Masuk</v-btn
                  >
                </v-form>
              </div>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
      <v-footer app class="font-weight-medium" flat>
        <v-col class="text-center" cols="12">
          <strong>
            {{ new Date().getFullYear() }} | Sikadu-Baja by
            <a
              href="https://github.com/muhammad-dede"
              class="text-decoration-none"
              target="_blank"
              rel="noopener noreferrer"
              >Muhammad Dede Nuraen</a
            ></strong
          >
        </v-col>
      </v-footer>
    </v-container>
  </v-app>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Error from "@/views/partials/Error";

export default {
  name: "Login",

  metaInfo: {
    title: "Sikadu-Baja",
    titleTemplate: "%s | Login",
    htmlAttrs: {
      lang: "en",
      amp: true,
    },
  },

  components: {
    Error,
  },

  data() {
    return {
      valid: true,
      npmRules: [
        (value) => !!value || "Nomor Induk Mahasiswa harus diisi",
        (value) => /^\d+$/.test(value) || "Hanya diisi dengan angka",
        (value) => (value && value.length >= 10) || "Masukkan 10 digit NIM",
      ],
      passwordRules: [
        (value) => !!value || "Kata sandi harus diisi",
        (value) => (value && value.length >= 6) || "Min 6 karakter",
      ],
      form: {
        user: "",
        password: "",
      },
      error: false,
      loading: false,
    };
  },

  computed: {
    ...mapState("auth", ["serverError"]),
  },

  methods: {
    ...mapActions({
      login: "auth/login",
    }),

    submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        this.login({
          user: this.form.user,
          password: this.form.password,
        }).then(() => {
          //
          if (!this.serverError) {
            this.loading = false;
            this.error = false;
            this.$router.replace({
              name: "Beranda",
            });
          } else {
            this.loading = false;
            this.error = true;
            this.form.user = null;
            this.form.password = null;
          }
        });
      }
    },
  },
};
</script>

<style scoped>
#custom-text {
  color: #4682b4;
}

#custom-btn {
  background-color: #4682b4;
}
</style>

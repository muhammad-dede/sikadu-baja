<template>
  <v-app>
    <v-container class="mb-15 mt-10">
      <v-slide-y-transition>
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
                  <v-img src="../assets/brand-logo.svg" class="mb-6"></v-img>
                  <span class="font-weight-bold" id="custom-text">Masuk</span
                  ><br />
                  <small class="mb-15" id="custom-text">
                    Masukkan Nomor Induk Mahasiswa & Kata Sandi Kamu
                  </small>
                  <v-form ref="form" v-model="valid">
                    <v-text-field
                      class="mt-10"
                      label="Nomor Induk Mahasiswa"
                      :rules="npmRules"
                      type="number"
                      hide-details="auto"
                      v-model="form.user"
                    ></v-text-field>
                    <v-text-field
                      class="mt-3"
                      label="Kata Sandi"
                      :rules="passwordRules"
                      hide-details="auto"
                      type="password"
                      v-model="form.password"
                    ></v-text-field>
                    <v-btn
                      block
                      rounded
                      id="custom-btn"
                      color="white--text mt-10"
                      @click="submit"
                      >Masuk</v-btn
                    >
                  </v-form>
                </div>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </v-slide-y-transition>
    </v-container>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      valid: true,
      npmRules: [
        (value) => !!value || "Nomor Induk Mahasiswa harus diisi",
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
    };
  },
  methods: {
    ...mapActions({
      login: "auth/login",
    }),

    submit() {
      if (this.$refs.form.validate()) {
        this.login({
          user: this.form.user,
          password: this.form.password,
        })
          .then(() => {
            this.$router.replace({
              name: "Beranda",
            });
          })
          .catch(() => {
            console.log("failed");
          });
      }
    },
  },
};
</script>

<style>
#custom-text {
  color: #4682b4;
}

#custom-btn {
  background-color: #4682b4;
}
</style>

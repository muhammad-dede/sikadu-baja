<template>
  <v-app>
    <v-container class="mb-15 mt-10">
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
                <v-form @submit.prevent="submit">
                  <v-text-field
                    class="mt-10"
                    label="Nomor Induk Mahasiswa"
                    :rules="npm"
                    hide-details="auto"
                    v-model="form.user"
                  ></v-text-field>
                  <v-text-field
                    class="mt-3"
                    label="Kata Sandi"
                    :rules="password"
                    hide-details="auto"
                    type="password"
                    v-model="form.password"
                  ></v-text-field>
                  <v-btn
                    block
                    rounded
                    id="custom-btn"
                    color="white--text mt-10"
                    type="submit"
                    >Masuk</v-btn
                  >
                </v-form>
              </div>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      npm: [
        (value) => !!value || "Nomor Induk Mahasiswa harus diisi",
        (value) => (value && value.length >= 10) || "Masukkan 10 digit NIM",
      ],
      password: [
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
      this.login({
        user: this.form.user,
        password: this.form.password,
      });
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

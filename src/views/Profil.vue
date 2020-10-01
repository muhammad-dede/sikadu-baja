<template>
  <div>
    <v-container fluid class="mb-16">
      <v-row>
        <v-col>
          <v-card class="mx-auto" flat>
            <v-row>
              <v-col cols="12">
                <v-list-item class="d-flex justify-center">
                  <v-avatar size="100">
                    <v-img :src="user.ProfilePict"></v-img>
                  </v-avatar>
                </v-list-item>
                <v-list-item-title
                  id="title"
                  class="d-flex justify-center mt-3 text-uppercase"
                  ><strong>{{ user.Name }}</strong></v-list-item-title
                >
                <v-list-item-subtitle
                  id="title"
                  class="d-flex justify-center"
                  >{{ user.College.Faculty }}</v-list-item-subtitle
                >
              </v-col>
            </v-row>

            <v-divider class="my-3"></v-divider>
            <!-- Batas -->

            <v-tabs v-model="model" centered slider-color="blue">
              <v-tab :href="`#tab-biodata`"> Biodata </v-tab>
              <v-tab :href="`#tab-jurusan`"> Jurusan </v-tab>
            </v-tabs>

            <v-tabs-items v-model="model">
              <v-tab-item :value="`tab-biodata`">
                <v-card flat>
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-subtitle id="title"
                        >Nama Lengkap :</v-list-item-subtitle
                      >
                      <v-list-item-title>{{ user.Name }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-subtitle id="title"
                        >NIK :</v-list-item-subtitle
                      >
                      <v-list-item-title>{{ user.NIK }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-subtitle id="title"
                        >NPM :</v-list-item-subtitle
                      >
                      <v-list-item-title>{{ user.NPM }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-subtitle id="title"
                        >Tempat, Tanggal Lahir :</v-list-item-subtitle
                      >
                      <v-list-item-title
                        >{{ user.PlaceBorn }},
                        {{ user.BornOn | formatDate }}</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-subtitle id="title"
                        >Jenis Kelamin :</v-list-item-subtitle
                      >
                      <v-list-item-title>{{ user.Gender }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-subtitle id="title"
                        >Agama :</v-list-item-subtitle
                      >
                      <v-list-item-title>{{ user.Religion }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-subtitle id="title"
                        >Telepon :</v-list-item-subtitle
                      >
                      <v-list-item-title>{{ user.Phone }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-subtitle id="title"
                        >Email :</v-list-item-subtitle
                      >
                      <v-list-item-title>{{ user.Email }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-subtitle id="title"
                        >Alamat :</v-list-item-subtitle
                      >
                      <v-list-item class="ml-n4">{{
                        user.Address
                      }}</v-list-item>
                    </v-list-item-content>
                  </v-list-item>
                </v-card>
              </v-tab-item>
              <v-tab-item :value="`tab-jurusan`">
                <v-card flat>
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-subtitle id="title"
                        >Fakultas :</v-list-item-subtitle
                      >
                      <v-list-item-title>{{
                        user.College.Faculty
                      }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-subtitle id="title"
                        >Program Studi :</v-list-item-subtitle
                      >
                      <v-list-item-title>{{
                        user.College.Branch
                      }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-subtitle id="title"
                        >Jenjang :</v-list-item-subtitle
                      >
                      <v-list-item-title>{{
                        user.College.Degree
                      }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-subtitle id="title"
                        >Kelas :</v-list-item-subtitle
                      >
                      <v-list-item-title>{{
                        user.College.Class
                      }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-subtitle id="title"
                        >Kelompok :</v-list-item-subtitle
                      >
                      <v-list-item-title>{{
                        user.College.Group
                      }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-subtitle id="title"
                        >Status :</v-list-item-subtitle
                      >
                      <v-list-item-title>{{
                        user.College.Status
                      }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-card>
        </v-col>
        <v-col cols="6" class="d-none d-sm-block">
          <v-img src="@/assets/ilustration/undraw_files_6b3d.svg"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Profil",
  data() {
    return {
      model: "tab-1",
    };
  },
  metaInfo: {
    title: "Sikadu-Baja",
    titleTemplate: "%s | Profil",
    htmlAttrs: {
      lang: "en",
      amp: true,
    },
  },
  computed: {
    ...mapGetters({
      user: "auth/user",
    }),
  },
};
</script>

<style>
#title {
  color: #4682b4;
}
</style>

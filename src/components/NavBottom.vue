<template>
  <v-footer class="d-lg-none" app>
    <v-bottom-navigation dense absolute grow class="pt-0" id="custom-text">
      <v-btn
        v-for="item in items"
        :key="item.title"
        link
        router
        :to="item.link"
      >
        <span>{{ item.title }}</span>
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-footer>
</template>

<script>
export default {
  name: "NavBottom",
  data() {
    return {
      items: [
        { title: "Beranda", icon: "mdi-home", link: "/beranda" },
        { title: "Jadwal", icon: "mdi-calendar-month", link: "/jadwal" },
        { title: "Nilai", icon: "mdi-book", link: "/nilai" },
        {
          title: "Pembayaran",
          icon: "mdi-credit-card-outline",
          link: "/pembayaran",
        },
        { title: "Profil", icon: "mdi-account", link: "/profil" },
      ],
    };
  },
};
</script>

<style>
#custom-text {
  color: #4682b4;
}
</style>

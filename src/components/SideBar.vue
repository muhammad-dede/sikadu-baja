<template>
  <v-navigation-drawer absolute app height="100%" id="sidebar">
    <template v-slot:prepend>
      <v-list-item class="mt-2 mb-5">
        <v-img height="100%" width="65" src="@/assets/brand-logo.svg"></v-img>
      </v-list-item>
    </template>

    <v-list dense nav id="custom-text">
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        router
        :to="item.link"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "SideBar",
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

#sidebar {
  background-color: #e9f0f6;
}
</style>

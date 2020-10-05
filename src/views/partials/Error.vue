<template>
  <div>
    <v-alert dense outlined type="error" class="mt-6">
      {{ serverError }}
    </v-alert>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Error",

  computed: {
    ...mapState("auth", ["serverError"]),
  },
};
</script>

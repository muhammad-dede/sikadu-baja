<template>
  <div>
    <v-alert dense outlined type="error" class="mt-6">
      {{ error }}
    </v-alert>
  </div>
</template>

<script>
export default {
  name: "Error",
  props: ["error"],
};
</script>

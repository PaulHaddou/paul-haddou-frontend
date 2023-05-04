<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <div class="body">
    <component :is="route.meta.layout">
      <RouterView />
    </component>
  </div>
</template>

<style scoped></style>

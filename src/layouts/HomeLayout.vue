<script lang="ts" setup>
// Modules
import { onMounted } from "vue";

// Components

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<template>
  <div class="homeLayout">
    <slot />
  </div>
</template>

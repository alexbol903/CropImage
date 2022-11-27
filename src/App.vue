<template>
  <CropImage />
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import CropImage from '@/views/CropImage.vue';

export default defineComponent({
  name: 'App',
  components: { CropImage },
});
</script>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

body {
  min-width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
}
</style>

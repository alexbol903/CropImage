<template>
  <Header @changeSize="changeSize" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';
import { TDictionaryNumber } from '@/types';

export default defineComponent({
  name: 'CropImage',
  components: { Header },

  setup() {
    const changeSize = (size: TDictionaryNumber): void => {
      const { width, height } = size;

      console.log(width, height);
    };

    return {
      changeSize,
    };
  },
});
</script>

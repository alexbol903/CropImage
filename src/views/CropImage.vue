<template>
  <Header @changeSize="onChangeSize" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';
import { TDictionaryNumber } from '@/types';

export default defineComponent({
  name: 'CropImage',
  components: { Header },

  setup() {
    const onChangeSize = (size: TDictionaryNumber): void => {
      const { width, height } = size;

      console.log(width, height);
    };

    return {
      onChangeSize,
    };
  },
});
</script>

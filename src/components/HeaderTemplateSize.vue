<template>
  <select class="size-select form-select" aria-label="Default select example">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</template>

<script lang="ts">
import { computed, defineComponent, defineEmits, onMounted, ref } from 'vue';
import { sizeInit } from '@/configs';
import { TDictionaryNumber } from '@/types';

export default defineComponent({
  name: 'HeaderTemplateSize',

  emits: ['change'],

  setup(props, { emit }) {
    const defaultSize = computed((): TDictionaryNumber => sizeInit());
    const width = ref<number>(defaultSize.value.width);
    const height = ref<number>(defaultSize.value.height);

    onMounted(() => {
      change();
    });

    const change = () => {
      emit('change', {
        width: width.value,
        height: height.value,
      });
    };

    return {
      defaultSize,
      width,
      height,
      change,
    };
  },
});
</script>

<style scoped>
.size-select {
  width: 310px;
}
</style>

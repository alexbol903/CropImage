<template>
  <div class="d-flex">
    <div class="size-input input-group input-group-sm">
      <span class="input-group-text" id="inputGroup-sizing-sm">Width: </span>
      <input
        v-model="width"
        type="number"
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-sm"
        @input="onChange"
      />
    </div>
    <div class="size-input input-group input-group-sm ms-3">
      <span class="input-group-text" id="inputGroup-sizing-sm">Height: </span>
      <input
        v-model="height"
        type="number"
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-sm"
        @input="onChange"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue';
import { sizeInit } from '@/configs';
import { TDictionaryNumber } from '@/types';

export default defineComponent({
  name: 'HeaderCustomSize',

  emits: ['change'],

  setup(props, { emit }) {
    const defaultSize = computed((): TDictionaryNumber => sizeInit());
    const width = ref<number>(defaultSize.value.width);
    const height = ref<number>(defaultSize.value.height);

    onMounted(() => {
      onChange();
    });

    const onChange = () => {
      emit('change', {
        width: width.value,
        height: height.value,
      });
    };

    return {
      defaultSize,
      width,
      height,
      onChange,
    };
  },
});
</script>

<style scoped>
.size-input {
  width: 147px;
}
</style>

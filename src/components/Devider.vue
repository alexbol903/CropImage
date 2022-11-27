<template>
  <div
    class="devider"
    :class="{
      'devider-horizontal': variant === deviderTypes.Horizontal,
      'devider-vertical': variant === deviderTypes.Vertical,
    }"
  />
</template>

<script lang="ts">
import { computed, defineComponent, defineProps } from 'vue';
import { EDevider } from '@/types';

export default defineComponent({
  name: 'Devider',

  props: {
    variant: {
      type: String,
      reqired: true,
    },
  },

  setup(props) {
    const deviderTypes = computed((): typeof EDevider => EDevider);

    return {
      deviderTypes,
    };
  },
});
</script>

<style scoped>
.devider {
  background: #ced4da;
}
.devider-horizontal {
  width: 100%;
  height: 1px;
  margin: 10px 0;
}
.devider-vertical {
  width: 1px;
  height: 100%;
  margin: 0 10px;
}
</style>

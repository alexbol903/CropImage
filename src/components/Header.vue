<template>
  <div class="px-4">
    <div class="header">
      <a href="/" class="logo">
        <img src="/img/logo.png" alt="Logo" class="logo-image" />
      </a>

      <div
        class="tabs btn-group"
        role="group"
        aria-label="Select size viewport"
      >
        <button
          v-for="tab in tabs"
          :key="tab.id"
          type="button"
          class="btn btn-secondary"
          :class="{ 'bg-dark': isTabActive(tab.id) }"
          @click="changeTab(tab.id)"
        >
          {{ tab.name }}
        </button>
      </div>
    </div>

    <div class="tools">
      <HeaderCustomSize
        v-if="currentTab === tabs.custom.id"
        @change="changeSize"
      />

      <HeaderTemplateSize
        v-if="currentTab === tabs.template.id"
        @change="changeSize"
      />
    </div>

    <Devider :variant="deviderTypes.Horizontal" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, defineEmits, ref } from 'vue';
import HeaderCustomSize from '@/components/HeaderCustomSize.vue';
import HeaderTemplateSize from '@/components/HeaderTemplateSize.vue';
import Devider from '@/components/Devider.vue';
import { tabsInit } from '@/configs';
import { EDevider, TDictionaryNumber, TDictionaryType, TTabs } from '@/types';

export default defineComponent({
  name: 'Header',
  components: { HeaderCustomSize, HeaderTemplateSize, Devider },

  emits: ['changeSize'],

  setup(props, { emit }) {
    const tabs = computed((): TDictionaryType<TTabs> => tabsInit());
    const currentTab = ref<string>(tabs.value.custom.id);
    const deviderTypes = computed((): typeof EDevider => EDevider);

    const isTabActive = (selectedTab: string): boolean =>
      selectedTab === currentTab.value;

    const changeTab = (selectedTab: string): void => {
      currentTab.value = selectedTab;
    };

    const changeSize = (size: TDictionaryNumber): void => {
      emit('changeSize', size);
    };

    return {
      tabs,
      currentTab,
      deviderTypes,
      isTabActive,
      changeTab,
      changeSize,
    };
  },
});
</script>

<style scoped>
.header {
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 20px;
}

.logo {
  width: 40px;
  height: 40px;
}
.logo-image {
  max-width: 100%;
  max-height: 100%;
}

.tabs {
  margin-left: 30px;
}

.tools {
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 20px;
}
</style>

<template>
  <slot
    :loadData="loadData"
    :data="data"
    :isLoading="isLoading"
    :error="error"
  />
</template>

<script lang="ts">
import { defineComponent, computed, ref, PropType } from 'vue';
import dataSources from '@/dataSources';
import { TData, TSettings } from '@/types/basic-types';

export default defineComponent({
  name: 'VDataSource',

  props: {
    sourceName: {
      type: String,
      required: true,
    },

    settings: {
      type: Object as PropType<TSettings>,
      default: () => {},
    },
  },

  setup(props) {
    const data = ref<TData | null>(null);
    const error = ref<Error | null>(null);
    const isLoading = ref(false);

    const currentSource = computed(() => dataSources[props.sourceName]);

    const loadData = async () => {
      try {
        isLoading.value = true;
        error.value = null;
        data.value = await currentSource.value.getData(props.settings);
      } catch (e) {
        error.value = e;
      } finally {
        isLoading.value = false;
      }
    };

    return {
      isLoading,
      error,
      data,
      loadData,
    };
  },
});
</script>

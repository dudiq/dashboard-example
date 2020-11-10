<template>
  <v-data-source
    v-for="(sourceItem, sourceIndex) in sourcesList"
    :key="sourceIndex"
    :source-name="sourceItem.source"
    :settings="sourceItem.settings"
    #default="{ data, error, isLoading, loadData }"
  >
    <v-priority
      :is-processing="isLoading"
      :is-able-to-switch="loadingIndex === sourceIndex"
      @start="loadData"
      @next="onNext"
    />
    <slot
      name="content"
      v-for="(widgetItem, widgetIndex) in sourceItem.widgets"
      :key="widgetIndex"
      :widgetItem="widgetItem"
      :data="data"
      :isLoading="isLoading"
      :error="error"
      :loadData="loadData"
    />
  </v-data-source>
</template>

<script lang="ts">
import { defineComponent, PropType, computed, watch, onMounted } from 'vue';
import VDataSource from '@/modules/VDataSource';
import VPriority from '@/modules/VPriority';
import { TSource } from '@/types/basic-types';
import { usePriority } from './usePriority';

export default defineComponent({
  name: 'VDataSourceList',

  props: {
    sourcesList: {
      type: Array as PropType<Array<TSource>>,
      required: true,
    },
  },

  setup(props) {
    const {
      onReset,
      onNext,
      loadingIndex,
      setPriorityIndexList,
    } = usePriority();

    const indexToPriorityList = computed(() =>
      props.sourcesList.map((source, index) => ({
        index,
        priority: source.priority,
      })),
    );

    setPriorityIndexList(indexToPriorityList.value);

    watch(
      () => props.sourcesList,
      () => {
        setPriorityIndexList(indexToPriorityList.value);
        onReset();
      },
    );

    onMounted(() => {
      onReset();
    });

    return {
      onNext,
      loadingIndex,
    };
  },

  components: {
    VDataSource,
    VPriority,
  },
});
</script>

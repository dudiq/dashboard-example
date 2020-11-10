<template>
  <v-grid class="v-data-source-view">
    <v-data-source-list
      :sources-list="sourcesList"
    >
      <template #content="{ widgetItem, data, error, isLoading, loadData }">
        <v-widget
          class="v-data-source-view-widget"
          :widget="widgetItem"
          :data="data"
          :is-loading="isLoading"
          :error="error"
          @load-data="loadData"
        />
      </template>
    </v-data-source-list>
  </v-grid>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import VWidget from '@/modules/VWidget';
import VGrid from '@/common/VGrid';
import VDataSourceList from './modules/VDataSourceList';
import { TSource } from '@/types/basic-types';

export default defineComponent({
  name: 'VDataSourceView',

  props: {
    sourcesList: {
      type: Array as PropType<Array<TSource>>,
      required: true,
    },
  },

  components: {
    VDataSourceList,
    VWidget,
    VGrid,
  },
});
</script>

<style scoped lang="scss">
.v-data-source-view {
  display: flex;
}
.v-data-source-view-widget {
  padding: 4px;
  margin: 8px;

}
</style>

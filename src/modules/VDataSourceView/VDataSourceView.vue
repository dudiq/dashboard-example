<template>
  <v-grid>
    <v-data-source-list
      :sources-list="sourcesList"
    >
      <template #content="{ widgetItem, data, error, isLoading, loadData }">
        <v-widget
          :title="widgetItem.title"
          :widget-name="widgetItem.widget"
          :data="data"
          :is-loading="isLoading"
          :error="error"
          :load-data="loadData"
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

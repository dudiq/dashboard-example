<template>
  <v-card>
    <v-loader :is-loading="isLoading">
      <v-error :error="error">
        <v-empty-data :is-empty="!isDataExist">
          <component
            v-if="isDataExist"
            :is="currentView"
            :title="title"
            :data="data"
            @load-data="loadData"
          >
            <slot />
          </component>
        </v-empty-data>
      </v-error>
    </v-loader>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';
import VLoader from '@/common/VLoader';
import VError from '@/common/VError';
import VEmptyData from '@/common/VEmptyData';

import { TData } from '@/types/basic-types';
import { widgetsMap } from './modules/widgetMap';
import VCard from '@/common/VCard';

export default defineComponent({
  name: 'VWidget',

  props: {
    isLoading: {
      type: Boolean,
      default: true,
    },

    data: {
      type: Object as PropType<TData>,
      default: null,
    },

    error: {
      type: Error,
      default: null,
    },

    title: {
      type: String,
      default: '',
    },

    widgetName: {
      type: String,
      required: true,
    },
  },

  setup(props, ctx) {
    const currentView = computed(() => widgetsMap[props.widgetName]);

    const isDataExist = computed(() => {
      if (!props.data) return false;

      const [firstRow] = props.data.table;
      if (!firstRow) return false;

      const { cols } = firstRow;
      return cols.length !== 0;
    });

    const loadData = () => ctx.emit('load-data');

    return {
      isDataExist,
      currentView,
      loadData,
    };
  },

  components: {
    VCard,
    VEmptyData,
    VLoader,
    VError,
  },
});
</script>

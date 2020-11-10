<template>
  <v-card>
    <v-size :height="widget.height" :width="widget.width">
      <v-loader :is-loading="isLoading">
        <v-error :error="error">
          <v-empty-data :is-empty="!isDataExist">
            <component
              v-if="isDataExist"
              :is="currentView"
              :title="widget.title"
              :data="data"
              @load-data="loadData"
            >
              <slot />
            </component>
          </v-empty-data>
        </v-error>
      </v-loader>
    </v-size>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';
import VLoader from '@/common/VLoader';
import VSize from '@/common/VSize';
import VError from '@/common/VError';
import VEmptyData from '@/common/VEmptyData';

import { TData, TWidget } from '@/types/basic-types';
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

    widget: {
      type: Object as PropType<TWidget>,
      required: true,
    },

    error: {
      type: Error,
      default: null,
    },
  },

  setup(props, ctx) {
    const currentView = computed(() => widgetsMap[props.widget.widgetName]);

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
    VSize,
    VEmptyData,
    VLoader,
    VError,
  },
});
</script>

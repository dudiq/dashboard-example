<template>
  <content-layout>
    <template v-slot:header>
      <navigation-top />
    </template>
    <v-data-source-view :sources-list="sourcesList" />
  </content-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContentLayout from '@/common/ContentLayout';
import VDataSourceView from '@/modules/VDataSourceView';
import { DATA_SOURCE_NAME } from '@/constants/dataSources';
import { WIDGET_NAME } from '@/constants/widgets';
import { SIZE_HEIGHT, SIZE_WIDTH } from '@/constants/sizes';
import NavigationTop from '@/common/NavigationTop/NavigationTop.vue';

const sourcesList = [
  {
    source: DATA_SOURCE_NAME.CURRENCY,
    settings: {
      from: 'USD',
      to: 'RUB',
    },
    priority: 2,
    widgets: [
      {
        widgetName: WIDGET_NAME.CURRENCY,
        title: 'currency 1',
        grid: {
          x: 3,
          y: 1,
        },
        width: SIZE_WIDTH.W_224,
        height: SIZE_HEIGHT.H_48,
      },
      {
        widgetName: WIDGET_NAME.CURRENCY,
        title: 'Sub currency 1',
        grid: {
          x: 2,
          y: 1,
        },
        width: SIZE_WIDTH.W_420,
        height: SIZE_HEIGHT.H_48,
      },
    ],
  },

  {
    source: DATA_SOURCE_NAME.CURRENCY,
    settings: {
      from: 'EUR',
      to: 'RUB',
    },
    priority: 1,
    widgets: [
      {
        widgetName: WIDGET_NAME.CURRENCY,
        title: 'EUR currency',
        grid: {
          x: 1,
          y: 1,
        },
        width: SIZE_WIDTH.W_224,
        height: SIZE_HEIGHT.H_48,
      },
      {
        widgetName: WIDGET_NAME.CURRENCY,
        title: 'sub eur',
        grid: {
          x: 1,
          y: 2,
        },
        width: SIZE_WIDTH.W_224,
        height: SIZE_HEIGHT.H_48,
      },
    ],
  },

  {
    source: DATA_SOURCE_NAME.CURRENCY,
    settings: {
      from: 'USD',
      to: 'GBP',
    },
    priority: 1,
    widgets: [
      {
        widgetName: WIDGET_NAME.CURRENCY,
        title: 'GBP currency',
        grid: {
          x: 2,
          y: 2,
        },
        width: SIZE_WIDTH.W_224,
        height: SIZE_HEIGHT.H_48,
      },
    ],
  },
];

export default defineComponent({
  name: 'Dashboard',

  setup() {
    return {
      sourcesList,
    };
  },

  components: {
    NavigationTop,
    ContentLayout,
    VDataSourceView,
  },
});
</script>

<template>
  <div>
    <v-title>{{ currencyTitle }}</v-title>
    {{ currencyValue }}
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
import VTitle from '@/common/VTitle';
import { TData } from '@/types/basic-types';

export default defineComponent({
  name: 'VCurrency',

  props: {
    title: {
      type: String,
      default: '',
    },

    data: {
      type: Object as PropType<TData>,
      required: true,
    },
  },

  setup(props) {
    const usedValue = computed(() => {
      if (!props.data) return null;
      const { table } = props.data;
      const row = table[0];
      const { cols = [] } = row;
      return cols[0];
    });

    const currencyTitle = computed(() => {
      if (!props.data) return '';

      const { from, to } = props.data.settings;
      return `${props.title}: ${from} - ${to}`;
    });

    const currencyValue = computed(() => {
      if (!usedValue.value) return '';

      return (usedValue.value.value || 0).toFixed(2);
    });

    return {
      currencyTitle,
      currencyValue,
    };
  },

  components: {
    VTitle,
  },
});
</script>

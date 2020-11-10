<template>
  <slot />
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';

export default defineComponent({
  name: 'VPriority',

  emits: {
    start: null,
    next: null,
  },

  props: {
    isProcessing: {
      type: Boolean,
      required: true,
    },

    isAbleToSwitch: {
      type: Boolean,
      required: true,
    },
  },

  setup(props, context) {
    if (props.isAbleToSwitch && !props.isProcessing) {
      context.emit('start');
    }

    watch(
      () => props.isAbleToSwitch,
      (newVal, oldVal) => {
        const isSwitching = oldVal === false && newVal === true;
        if (!isSwitching) return;
        if (props.isProcessing) return;

        context.emit('start');
      },
    );

    watch(
      () => props.isProcessing,
      (newVal, oldVal) => {
        if (!props.isAbleToSwitch) return;

        const isProcessDone = oldVal === true && newVal === false;

        if (!isProcessDone) return;

        context.emit('next');
      },
    );
  },
});
</script>

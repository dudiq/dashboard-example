<template>
  <div class="size" :class="sizeClass">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';
import { SIZE_HEIGHT } from '@/constants/sizes';

const sizeToClass = {
  [SIZE_HEIGHT.H26]: 'h-26',
  [SIZE_HEIGHT.H48]: 'h-48',
  [SIZE_HEIGHT.H72]: 'h-72',
  [SIZE_HEIGHT.H112]: 'h-112',
};

export default defineComponent({
  name: 'Size',

  props: {
    size: {
      type: Object as PropType<keyof typeof SIZE_HEIGHT>,
      required: true,
    },
  },

  setup(props) {
    const sizeClass = computed(() => sizeToClass[props.size]);
    return {
      sizeClass,
    };
  },
});
</script>

<style scoped lang="scss">
.size {
  .h-26 {
    height: 26px;
  }
  .h-48 {
    height: 48px;
  }
  .h-72 {
    height: 72px;
  }
  .h-112 {
    height: 112px;
  }
}
</style>

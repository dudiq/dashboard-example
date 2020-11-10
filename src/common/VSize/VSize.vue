<template>
  <div class="size" :class="sizeClass">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';
import { SIZE_HEIGHT, SIZE_WIDTH } from '@/constants/sizes';

const heightToClass = {
  [SIZE_HEIGHT.H_26]: 'h-26',
  [SIZE_HEIGHT.H_48]: 'h-48',
  [SIZE_HEIGHT.H_72]: 'h-72',
  [SIZE_HEIGHT.H_112]: 'h-112',
};

const widthToClass = {
  [SIZE_WIDTH.W_48]: 'w-48',
  [SIZE_WIDTH.W_112]: 'w-112',
  [SIZE_WIDTH.W_224]: 'w-224',
  [SIZE_WIDTH.W_420]: 'w-420',
};

export default defineComponent({
  name: 'VSize',

  props: {
    height: {
      type: String as PropType<keyof typeof SIZE_HEIGHT>,
      required: true,
    },

    width: {
      type: String as PropType<keyof typeof SIZE_WIDTH>,
      required: true,
    },
  },

  setup(props) {
    const sizeClass = computed(() => ({
      [heightToClass[props.height]]: true,
      [widthToClass[props.width]]: true,
    }));
    return {
      sizeClass,
    };
  },
});
</script>

<style scoped lang="scss">
.size {
  &.h-26 {
    height: 26px;
  }
  &.h-48 {
    height: 48px;
  }
  &.h-72 {
    height: 72px;
  }
  &.h-112 {
    height: 112px;
  }

  &.w-48 {
    width: 48px;
  }
  &.w-112 {
    width: 112px;
  }
  &.w-224 {
    width: 224px;
  }
  &.w-420 {
    width: 420px;
  }
}
</style>

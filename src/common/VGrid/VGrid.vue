<template>
  <div class="grid">
    <slot />
    <slot name="cell" />

    <div
      class="rows"
      v-for="( row, rowIndex ) in rows" :key="rowIndex"
    >
      <div v-for="( _, colIndex ) in row" :key="colIndex">
<!--        <slot :name="'cell-' + prop" :row="row">-->
<!--          {{ row[ prop ] }}-->
<!--        </slot>-->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'VGrid',

  setup(props, context) {
    const dataRo = computed(() => Object.keys(context.slots));
    const rows = [
      [],
    ];

    console.log('context.slots', Object.keys(context));
    //computed(() => context.slots);
    return {
      dataRo,
      rows,
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

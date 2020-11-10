<template>
  <div v-if="isEmpty" class="empty-data">No data</div>
  <slot v-else />
</template>

<script lang="ts">
export default {
  name: 'VEmptyData',

  props: {
    isEmpty: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped lang="scss">
.loader {
  align-items: center;
  justify-content: center;
  display: flex;
}
</style>

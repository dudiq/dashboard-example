<template>
  <div v-if="isLoading" class="loader">loading...</div>
  <slot v-else />
</template>

<script lang="ts">
export default {
  name: 'VLoader',

  props: {
    isLoading: {
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

<template>
  <div v-if="error" class="error">
    {{ error.message }}
  </div>
  <slot v-else />
</template>

<script lang="ts">
export default {
  name: 'VError',

  props: {
    error: Error,
    default: null,
  },
};
</script>

<style scoped lang="scss">
.error {
  align-items: center;
  justify-content: center;
  display: flex;
}
</style>

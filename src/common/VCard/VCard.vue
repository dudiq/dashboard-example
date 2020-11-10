<template>
  <div class="v-card">
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: 'VCard',
};
</script>

<style scoped lang="scss">
.v-card {
  display: flex;
  background-color: var(--dash2-bgcolor-text-default);
}
</style>

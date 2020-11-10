<template>
  <h4 class="title">
    <slot />
  </h4>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VTitle',
});
</script>

<style scoped lang="scss">
.title {
  padding: 0;
  margin: 0;
  font-weight: bold;
  font-size: var(--dash2-font-size-h4);
}
</style>

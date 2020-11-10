<template>
  <div class="grid">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VGrid',
});
</script>

<style scoped lang="scss">
</style>

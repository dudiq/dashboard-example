<template>
  <div>
    <div class="nav">
      <slot name="header" />
    </div>

    <div class="content">
      <slot name="default" />
    </div>

    <div class="footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ContentLayout',
};
</script>

<style scoped lang="scss">
.nav {
  padding: 30px;
}
.content {
  border-top: 1px solid var(--dash2-color-separator);
}
</style>

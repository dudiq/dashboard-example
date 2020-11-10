<template>
  <div>
    <router-link to="/">Dashboard</router-link> |
    <router-link to="/about">About</router-link>
  </div>
</template>

<script lang="ts">
export default {
  name: 'NavigationTop',
};
</script>

<style scoped lang="scss">
a {
  font-weight: bold;
  color: var(--dash2-color-link-default);

  &.router-link-exact-active {
    color: var(--dash2-color-link-active);
  }
}
</style>

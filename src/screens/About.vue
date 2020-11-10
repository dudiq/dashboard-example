<template>
  <content-layout>
    <div class="content">
      <pre>
      We want you to build a Javascript plugin/component for a Dynamic Dashboard Builder:
      - A dashboard is a mix of widgets (Pie charts, Line Charts, Numeric, HTML content, ..etc)
      - Each widget based on the type, might have a title or not
      - It has to be very dynamic, there needs to be a configurator (init file) that controls the following:
      Widget type (Chart-Pie, Chart-Line, Chart-Grid, Numeric, ..etc)
      Widget order
      Widget position in the grid, size/width
      Data source, which could be set directly or the data source API URL
      <b>Priority; it means which widget should be fetched and rendered first, e.g. widgets with priority 1 should be rendered before 2 and 3</b>
      - It needs to be very dynamic and takes performance into consideration
      - You can pick your own preferred chart plugin/library
      - Feel free to mock your own data sources
    </pre>
      <img src="@/assets/details.jpg" />
    </div>
  </content-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContentLayout from '@/common/ContentLayout';

export default defineComponent({
  name: 'About',
  components: {
    ContentLayout,
  },
});
</script>

<style scoped lang="scss">
.content {
  max-width: 600px;
  margin: 0 auto;
}
</style>

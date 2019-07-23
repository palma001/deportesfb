<template>
  <v-app>
    <core-filter />
    <core-drawer />
    <div id="core-view">
      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
    CoreDrawer: () => import('@/components/core/DrawerAdmin'),
    CoreFilter: () => import('@/components/core/FilterAdmin')
  }
}
</script>
<style lang="scss">
@import '@/styles/index.scss';

/* Remove in 1.2 */
.v-datatable thead th.column.sortable i {
  vertical-align: unset;
}
</style>

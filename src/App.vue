<template>
  <v-app>
    <core-toolbar 
     @eventSearch="eventSearch"/>

    <core-drawer />

    <core-view />

    <core-footer />
  </v-app>
</template>

<script>
import {
  mapMutations
} from 'vuex'

export default {
  name: 'App',
  components: {
    CoreDrawer: () => import('@/components/core/Drawer'),
    CoreFooter: () => import('@/components/core/Footer'),
    CoreToolbar: () => import('@/components/core/Toolbar'),
    CoreView: () => import('@/components/core/View')
  },
  data () {
    return {
    //
    }
  },
  methods: {
    ...mapMutations(['eventSearch'])
  }
}
</script>

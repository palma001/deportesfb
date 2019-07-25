<template>
  <v-app>
    <core-toolbar 
     @eventSearch="eventSearch"/>
    <core-drawer />
    <v-content>
      <router-view />
    </v-content>
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
    CoreToolbar: () => import('@/components/core/Toolbar')
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

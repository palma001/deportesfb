<template>
  <v-toolbar
    app
    dark
  >
    <v-toolbar-side-icon
      class="hidden-md-and-up"
      @click="toggleDrawer"
    />
    <v-container
      mx-auto
      py-0
    >
      <v-layout>
        <v-img
          :src="require('@/assets/logo.png')"
          class="mr-5"
          contain
          height="48"
          width="48"
          max-width="48"
          @click="$vuetify.goTo(0)"
        />
        <v-btn
          v-for="(link, i) in links"
          :key="i"
          :to="link.to"
          class="ml-0 hidden-sm-and-down"
          flat
        >
          {{ link.text }}
        </v-btn>
        <v-spacer />
        <v-text-field
          append-icon="mdi-magnify"
          flat
          hide-details
          solo-inverted
          style="max-width: 300px;"
          @input="search"
        />
      </v-layout>
    </v-container>
  </v-toolbar>
</template>

<script>
// Utilities
import {
  mapGetters,
  mapMutations
} from 'vuex'

export default {
  computed: {
    ...mapGetters(['links'])
  },

  methods: {
    ...mapMutations(['toggleDrawer']),
    search (data) {
      this.$emit('eventSearch', data)
    }
  }
}
</script>

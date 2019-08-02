<template>
  <v-container>
  <DataTabulated
    :config="headers"
    :items="items"
    title="Tabla de usuarios">
  </DataTabulated>
  </v-container>
</template>

<script>
import DataTabulated from '../components/TableList'
import { blogConfig } from '../config/blogConfig'
export default {
  components: {
    DataTabulated: DataTabulated
  },
  data: () => ({
    headers: blogConfig,
    items: [],
    params: {
      paginate: true,
      sortField: 'title',
      sortOrder: 'asc',
      perPage: 0
    }
  }),
  created () {
    this.getList()
  },
  methods: {
    getList () {
      this.$services.getData(['deportes', 'blogs'], this.params).then(response => {
        this.items = response.res.data.data
        console.log(response.res.data.data)
      })
    }
  }

}
</script>

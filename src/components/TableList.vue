<template>
  <v-container
    fill-height
    fluid
    grid-list-xl>
    <v-layout
      justify-center
      wrap>
      <v-flex
        md12>
        <material-card
          :title="title"
          :text="subtitle">
          <v-data-table
            :headers="headers"
            :items="items"
            :hide-actions="hideActions">
            <template
              slot="headerCell"
              slot-scope="{ header }">
              <span
                class="subheading font-weight-light text-success text--darken-3"
                v-text="header.text"
              />
            </template>
            <template
              slot="items"
              slot-scope="{ item }">
              <td>{{ item.name }}</td>
              <td>{{ item.country }}</td>
              <td>{{ item.city }}</td>
              <td>{{ item.salary }}</td>
            </template>
          </v-data-table>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'DataTabulated',
  props: {
    config: {
      type: Array,
      require: true
    },
    items: {
      type: Array,
      require: true
    },
    hideActions: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      require: false
    },
    subtitle: {
      type: String,
      require: false
    }
  },
  data () {
    return {
      headers: []
    }
  },
  created () {
    this.headersTable()
  },
  methods: {
    headersTable () {
      this.config.map(element => {
        this.headers.push(element.tabulated)
      })
      console.log(this.headers)
    }
  }
}
</script>

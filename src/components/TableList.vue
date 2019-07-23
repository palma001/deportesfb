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
        <v-card
          title="Simple Table"
          text="Here is a subtitle for this table">
          <v-data-table
            :headers="headers"
            :items="items"
            :hide-actions="hideActions">
            <template
              slot="headerCell"
              slot-scope="{ header }">
              <span
                class="subheading font-weight-light text-success text--darken-3"
                v-if="header.sortable"
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
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'DataTabulated',
  props: {
    headers: {
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
    }
  },
  computed: {
    item () {
      return this.items
    }
  }
}
</script>

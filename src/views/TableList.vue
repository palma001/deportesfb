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
import { userConfig } from '../config/userConfig'
export default {
  components: {
    DataTabulated: DataTabulated
  },
  data: () => ({
    headers: userConfig,
    items: [
      {
        name: 'Dakota Rice',
        country: 'Niger',
        city: 'Oud-Tunrhout',
        salary: '$35,738'
      },
      {
        name: 'Minerva Hooper',
        country: 'Curaçao',
        city: 'Sinaai-Waas',
        salary: '$23,738'
      }, {
        name: 'Sage Rodriguez',
        country: 'Netherlands',
        city: 'Overland Park',
        salary: '$56,142'
      }, {
        name: 'Philip Chanley',
        country: 'Korea, South',
        city: 'Gloucester',
        salary: '$38,735'
      }, {
        name: 'Doris Greene',
        country: 'Malawi',
        city: 'Feldkirchen in Kārnten',
        salary: '$63,542'
      }, {
        name: 'Mason Porter',
        country: 'Chile',
        city: 'Gloucester',
        salary: '$78,615'
      }
    ]
  })
}
</script>

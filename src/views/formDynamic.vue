<template>
  <v-container>
   <form-dynamic
    :config="config"
    :button="buttonFormAdd"/>
  </v-container>
</template>
<script>
import { blogConfig, buttonFormAdd } from '../config/blogConfig'
export default {
  data () {
    return {
      config: blogConfig,
      buttonFormAdd: buttonFormAdd
    }
  }
}
</script>

<template>
  <v-container>
   <form-dynamic
    :config="config"
    :button="buttonFormAdd"/>
  </v-container>
</template>
<script>
import { userConfig, buttonFormAdd } from '../config/userConfig'
export default {
  data () {
    return {
      config: userConfig,
      buttonFormAdd: buttonFormAdd
    }
  }
}
</script>

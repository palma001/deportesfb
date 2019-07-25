<template>
	<v-container>
   <form-dynamic
    :config="config"/>  
  </v-container>
</template>
<script>
import { userConfig } from '../config/userConfig'
export default {
  data () {
    return {
      config: userConfig
    }
  }
}
</script>

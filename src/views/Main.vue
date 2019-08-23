<template>
  <div class="wrapper">
    <ToolbarMenu/>
    <!-- Main content -->
    <div class="main-content" >
      <router-view/>
    </div>
  </div>
</template>

<script>
import SiderMenu from '../components/SiderMenu'
import ToolbarMenu from '../components/ToolbarMenu'

export default {
  name: 'Main',
  components: {
    SiderMenu,
    ToolbarMenu
  },
  data () {
    return {
      items: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'Users', icon: 'people_outline' },
        { title: 'About', icon: 'question_answer' }
      ],
      itemsToolbar: [
        { icon: 'search' },
        { icon: 'more_vert' }
      ]
    }
  }
}
</script>
<style>
.wrapper {
  display: grid;
  grid-template-columns: 120;
}
.siderMenu {
  grid-column: 1/3;
  grid-row: 1/1500;
}
.toolbarMenu {
  grid-column: 2/120;
  grid-row: 1/2;
}
.main-content {
  grid-column: 3/120;
  grid-row: 2/1500;
}
</style>

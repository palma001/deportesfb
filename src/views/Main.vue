<template>
  <div class="wrapper">
    <div class="toolbarMenu">
      <ToolbarMenu
      color="#00ACC1"
      :items="itemsToolbar"
      :grow="true"
      :dense="true"
      :classToolbar="['hidden-xs-only']"/>
    </div>
    <div class="siderMenu">
      <SiderMenu
        avatar="https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/51280307_1506140412851100_6490454689660796928_n.jpg?_nc_cat=100&_nc_ht=scontent-mia3-2.xx&oh=2140cc264952c6161463838c03166a42&oe=5D8E932D"
        title="Oriana"
        height="100vh"
        :classSiderMenu="['cyan darken-1']"
        :dark="true"
        :items="items"
        :collapse="false"
        :width="230"
        :hideOverlay="true"
        :clipped="true"
        @changeRoute="changeRoute"/>
    </div>
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
  },
  methods: {
    changeRoute (data) {
      this.$router.push({ name: data })
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

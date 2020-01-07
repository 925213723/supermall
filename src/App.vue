<template>
  <div id="app">
    
    <main-tab-tar/>
  </div>
</template>

<script>
  import MainTabBar from 'components/content/mainTabbar/MainTabBar'
  export default {
    name: 'app',
    components: {
      MainTabBar
    }
  }
</script>

<style lang="scss">
  @import 'assets/css/base.css'
</style>

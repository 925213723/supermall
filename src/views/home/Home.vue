<template>
  <div id="home">
    <NavBar class="home-nav"><div slot="center">购物街</div></NavBar>
  </div>
</template>

<script>
  import NavBar from 'components/common/nvabar/NvaBar'
  import { getHomeMultidata } from 'network/home'
  export default {
    name: 'Home',
    components: {
      NavBar
    },
    created() {
      console.log('qwertui')
      getHomeMultidata().then(res => {
        console.log(res)
      })
    }
  }
</script>

<style scoped>
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
    font-size: 20px;
  }
</style>

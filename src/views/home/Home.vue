<template>
  <div id="home">
    <NavBar class="home-nav"><div slot="center">购物街</div></NavBar>
    <home-swiper :banner = banner></home-swiper>
    <recommend :recommend = recommend></recommend>
    <feature-view></feature-view>
  </div>
</template>

<script>
  import NavBar from 'components/common/nvabar/NvaBar'

  import HomeSwiper from './childComps/HomeSwiper'
  import Recommend from './childComps/RecommendView'
  import FeatureView from './childComps/FeatrueView'

  import { getHomeMultidata } from 'network/home'
  export default {
    name: 'Home',
    data() {
      return {
        result: null,
        banner: [],
        recommend: []
     }
    },
    components: {
      NavBar,
      HomeSwiper,
      Recommend,
      FeatureView
    },
    created() {
      getHomeMultidata().then(res => {
        this.result = res
        this.banner = res.data.banner.list
        this.recommend = res.data.recommend.list
      })
    }
  }
</script>

<style scoped>
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
    font-size: 20px;

    position: flexd;
    left: 0px;
    top: 0px;
    right: 0px;
    z-index: 99;
  }
</style>

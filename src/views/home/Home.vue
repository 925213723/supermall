<template>
  <div id="home">
    <NavBar class="home-nav"><div slot="center">购物街</div></NavBar>
    <home-swiper :banner = 'banner'></home-swiper>
    <recommend :recommend = 'recommend'></recommend>
    <feature-view></feature-view>
    <ul>
      <li>qwert1</li>
      <li>qwert2</li>
      <li>qwert3</li>
      <li>qwert4</li>
      <li>qwert5</li>
      <li>qwert6</li>
      <li>qwert7</li>
      <li>qwert8</li>
      <li>qwert9</li>
      <li>qwert10</li>
      <li>qwert11</li>
      <li>qwert12</li>
      <li>qwert13</li>
      <li>qwert14</li>
      <li>qwert15</li>
      <li>qwert16</li>
      <li>qwert17</li>
      <li>qwert18</li>
      <li>qwert19</li>
      <li>qwert20</li>
      <li>qwert21</li>
      <li>qwert22</li>
      <li>qwert23</li>
      <li>qwert24</li>
      <li>qwert25</li>
      <li>qwert26</li>
      <li>qwert27</li>
      <li>qwert28</li>
      <li>qwert29</li>
      <li>qwert30</li>
      <li>qwert31</li>
      <li>qwert32</li>
      <li>qwert33</li>
      <li>qwert34</li>
      <li>qwert35</li>
      <li>qwert36</li>
      <li>qwert37</li>
      <li>qwert38</li>
      <li>qwert39</li>
      <li>qwert40</li>
      <li>qwert41</li>
      <li>qwert42</li>
      <li>qwert43</li>
      <li>qwert44</li>
      <li>qwert45</li>
      <li>qwert46</li>
      <li>qwert47</li>
      <li>qwert48</li>
      <li>qwert49</li>
      <li>qwert50</li>
      <li>qwert51</li>
      <li>qwert52</li>
      <li>qwert53</li>
      <li>qwert54</li>
      <li>qwert55</li>
      <li>qwert56</li>
      <li>qwert57</li>
      <li>qwert58</li>
      <li>qwert59</li>
      <li>qwert60</li>
      <li>qwert61</li>
      <li>qwert62</li>
      <li>qwert63</li>
      <li>qwert64</li>
      <li>qwert65</li>
      <li>qwert66</li>
      <li>qwert67</li>
      <li>qwert68</li>
      <li>qwert69</li>
      <li>qwert70</li>
      <li>qwert71</li>
      <li>qwert72</li>
      <li>qwert73</li>
      <li>qwert74</li>
      <li>qwert75</li>
      <li>qwert76</li>
      <li>qwert77</li>
      <li>qwert78</li>
      <li>qwert79</li>
      <li>qwert80</li>
      <li>qwert81</li>
      <li>qwert82</li>
      <li>qwert83</li>
      <li>qwert84</li>
      <li>qwert85</li>
      <li>qwert86</li>
      <li>qwert87</li>
      <li>qwert88</li>
      <li>qwert89</li>
      <li>qwert90</li>
      <li>qwert91</li>
      <li>qwert92</li>
      <li>qwert93</li>
      <li>qwert94</li>
      <li>qwert95</li>
      <li>qwert96</li>
      <li>qwert97</li>
      <li>qwert98</li>
      <li>qwert99</li>
    </ul>
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
#home{
  padding-top: 44px;
}
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 99;
  }
</style>

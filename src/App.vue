<template>
  <div id="app">
    <!--{{$store.state}}-->
    <!--<div class="MuscIcon" @click="musicOff = !musicOff">-->
      <!--音乐-->
    <!--</div>-->
    <div class="Boxwrap">
      <div class="musicBox" v-show="musicOff">
        <Music @updateMusicOff="updateMusicOff"></Music>
      </div>
      <div class="Box">
        <div class="logo">
          <div class="logBox">
            <mt-header class="header">
              <router-link to="/" slot="left">
                <img src="http://m.kugou.com/v3/static/images/index/logo.png" class="logo">
              </router-link>
              <mt-button slot="right">
                <router-link to="/search"><img src="http://m.kugou.com/v3/static/images/index/search.png" class="search" @click="sea"></router-link>
              </mt-button>
            </mt-header>
          </div>
        </div>
        <nav v-show="$route.meta.nav">
          <div class="navBox">
            <router-view name="nav"/>
            <router-view name="navBar"/>
          </div>
        </nav>
      </div>
    </div>
    <div><router-view/></div>
    <div><ftPlayer v-if="show" @updateMusicOff="updateMusicOff"></ftPlayer></div>
  </div>
</template>
<script>
import Music from './views/Music'
import BottomMusic from './views/new-song/new-song'
import ftPlayer from './views/ftPlayer'
import zjli from './views/zjli'
export default {
  name: 'App',
  components: {
    Music,
    BottomMusic,
    ftPlayer,
    zjli
  },
  data () {
    return {
      musicOff: false,
      click1: false,
      show: false
    }
  },
  watch: {
    $route (to) {
      // console.log(to.meta.nav)
    }
  },
  methods: {
    sea () {
      this.up(false)
      // 点击搜索框的时候触发
    },
    up (data) {
      this.show = data
    },
    updateMusicOff (data) {
      this.musicOff = data
    }
  },
  provide () {
    return {
      up: this.up
    }
  }
}
</script>

<style lang>
  .MuscIcon{
    position: fixed;
    top: 90%;
    right: 0;
    z-index: 999;
  }
  *{padding: 0;margin: 0}
  /*#app {*/
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    /*-webkit-font-smoothing: antialiased;*/
    /*-moz-osx-font-smoothing: grayscale;*/
    /*text-align: center;*/
    /*color: #2c3e50;*/
    /*margin-top: 60px;*/
  /*}*/
  .logBox{
    position: fixed;
    width: 100%;
    z-index: 9999999999;
  }
  .navBox{
    position: fixed;
    top: 3.5rem;
    width: 100%;
    z-index: 99;
  }
  .logo{
    height: 3.5rem;
  }
  nav{
    height: 4rem;
  }
  .mint-header .logo{
    padding-top: .0357rem;
    width: 7.886rem;
    height: 1.67857rem;
    vertical-align: middle;
  }
  .search{
    width: 1.2143rem;
    height: 1.2143rem;
    /*padding-top: 1.2rem;*/
  }
  .logBox .header{
    height: 3.6rem;
  }
.musicBox{
  position: fixed;
  height: 100%;
  width: 100%;
  background: red;
  top:0;
  z-index: 999999999;
}
</style>

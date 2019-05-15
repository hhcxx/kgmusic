<template>
  <div class="wrap">
    <div class="song">
      <div class="top-goback">
        <div class="goback">
          <img src="http://m.kugou.com/v3/static/images/index/goback_1.png" alt="" @click="backingOut()">
          <p>{{$store.state.songName.songName}}</p>
        </div>
      </div>
      <div class="play">
        <div class="panel-play-img-box">
          <img :src='$store.state.songName.img'>
        </div>
      </div>
      <div class="mt" @touchend="js" @touchmove="hd">
        <mt-range v-model="rangeValue" :step="0.1" :bar-height="2">
        </mt-range>
      </div>
      <div class="play-operate">
        <li class="previous">
          <i class="btn-prev"></i>
        </li>
          <li class="pause"><i class="js-btnPlayPause" :class="{btnplayy : !$store.state.hh}" @click="CCC"></i></li>
        <li class="nextSong"><i class="btn-next"></i></li>
      </div>
      <audio
        :src="$store.state.songName.url"
        autoplay="autoplay" id="myAudio"
      >
      </audio>
      <div class="bc">
        <img :src='$store.state.songName.img'>
      </div>
      <!--<div><Audio></Audio></div>-->
      <div class="gc" ref="wrapper">
        <ul ref="li">
          <li
            v-for="item in $store.state.lyric"
            :key="item.time"
          >{{item.txt}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
// import Audio from './Audio'
export default {
  name: 'Music',
  // components: {
  //   // Audio
  // },
  data: function () {
    return {
      rangeValue: 0,
      aa: 5,
      dq: 0,
      time: ''
    }
  },
  methods: {
    CCC () {
      this.$store.state.hh = !this.$store.state.hh
      var x = document.getElementById('myAudio')
      if (!this.$store.state.hh) {
        x.pause()
      } else {
        x.play()
      }
    },
    backingOut () {
      this.$emit('updateMusicOff', false)
    },
    js () {
      var x = document.getElementById('myAudio')
      x.currentTime = this.dq * (this.rangeValue / 100)
      clearInterval(this.time)
      // alert(this.rangeValue/this.dq)
      // alert(this.dq*(this.rangeValue/100))
    },
    hd () {
      clearInterval(this.time)
    }
  },
  mounted: function () {
    let This = this
    let x = document.getElementById('myAudio')
    // let time
    x.addEventListener('ended', function () { // 歌曲播放结束。。。
      clearInterval(This.time)
      This.rangeValue = 100
    })
    let nub = 0
    x.addEventListener('canplay', function () { // 歌曲载入成功。。。
      This.$store.state.hh = true
      This.time = setInterval(function () {
        nub = 0
        let li = This.$refs.li.children
        // console.log(This.$refs.li.children)
        let bf = x.currentTime
        let cd = x.duration
        This.dq = cd
        This.rangeValue = bf / cd * 100
        let lyric = This.$store.state.lyric
        lyric.forEach((el, index) => {
          // console.log(el.time)
          li[index].className = ''
          if (bf * 990 >= el.time) {
            nub++
            // console.log(nub)
            // console.log(el.txt)
          }
        })
        li[nub].className = 'show'
        if (nub >= 10) {
          This.scroll.scrollToElement(li[nub - 4], 500)
        }

        // console.log(bf * 1000)
        // console.log(This.$store.state.lyric)
        // console.log(x.currentTime)
        // console.log(x.duration)
        // console.log(bf / cd * 100)
      }, 500)
    })
    this.$nextTick(() => {
      this.scroll = new Bscroll(this.$refs.wrapper, {})
    })
  }
}
</script>

<style scoped>
  .wrap li{
    list-style: none;
  }
  .wrap{
    position: fixed;
    top: 3.6rem;
    left: 0;
    width: 100%;
    height: 3%;
    background: #13272f;
    /*z-index: 999;*/
    /*display: none;*/
  }
  .show{
    color: #d1c90e;
  }
  .mt-range{
    width: 80%;
    left: 10%;
    position: fixed;
    top: 80%;
  }
  .mt.mt-range.mt-range-content.mt-range-thumb{
    width:20px
  }
  /*.bg-overlay{*/
    /*width: 100%;*/
    /*height: 100%;*/
    /*position: absolute;*/
    /*top: 0;*/
    /*left: 0;*/
    /*background: url(http://singerimg.kugou.com/uploadpic/softhead/200/20171017/20171017171503688.jpg) no-repeat center center;*/
    /*background-size: cover;*/
    /*-webkit-filter: blur(15px);*/
    /*filter: blur(15px);*/
  /*}*/
  /*.panel-play-img-box{*/
    /*position: fixed;*/
    /*z-index: 99;*/
    /*top: 0;*/
  /*}*/
  .gc{
    position: fixed;
    top: 45%;
    left: 0;
    width: 100%;
    height: 35%;
    overflow: hidden;
    text-align: center;
    color: #afabac;
  }
  .gc li{
    line-height: 2rem;
  }
  .bc{
    position: fixed;
    top: 0;
    z-index: -1;
    left: -40%;
    filter: blur(20px);
    background: black;
  }
  .bc img{
    width: 166%;
    opacity: .5;
  }
  .song{
    height: 3rem;
    width: 100%;
    /*background: red;*/
    position: fixed;
    top: 3.65rem;
    z-index: 999;
    background: -webkit-linear-gradient(top,rgba(0,0,0,.6),rgba(0,0,0,0));
  }
  .goback img{
    width: .85714rem;
    height: 1.42857rem;
    margin-top: .687265rem;
    display: inline-block;
    z-index: 999;
    float: left;
  }
  .goback{
    position: absolute;
    left: 1rem;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .top-goback{
    position:relative;
    width: 100%;
    height: 100%;
  }
  .goback p{
    /*position: absolute;*/
    /*left: 40%;*/
    /*top: .6rem;*/
    width: 84%;
    height: 100%;
    float: left;
    display: flex;
    color: white;
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    line-height: 3rem;
  }
  .play{
    width: 100%;
    /*margin-top: 5.0174rem;*/
    padding-bottom: 2.5rem;
    position: relative;
  }
  .play img {
    width: 10.7143rem;
    height: 10.7143rem;
    margin: .4286rem auto 0;
    display: block;
    border-radius: 50%;
  }
  .play-operate{
    width: 100%;
    height: 3rem;
    /*background: red;*/
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 85%;
  }
  .btn-prev{
    width: 2.3214rem;
    height: 2.4rem;
    margin: 0 .8929rem;
    display: inline-block;
    vertical-align: middle;
    background: url("http://m.kugou.com/v3/static/images/index/play_prev.png") no-repeat;
    background-size: 100%
  }
  .js-btnPlayPause{
    width: 3.2143rem;
    height: 3.2143rem;
    margin: 0 .8929rem;
    display: inline-block;
    vertical-align: middle;
    background: url("http://m.kugou.com/v3/static/images/index/play_pause.png") no-repeat;
    background-size: 100%
  }
  .js-btnPlayPause.btnplayy{
    width: 3.2143rem;
    height: 3.2143rem;
    margin: 0 .8929rem;
    display: inline-block;
    vertical-align: middle;
    background: url("http://m.kugou.com/v3/static/images/index/play_play.png") no-repeat;
    background-size: 100%
  }
  .btn-next{
    width: 2.3214rem;
    height: 2.4rem;
    margin: 0 .8929rem;
    display: inline-block;
    vertical-align: middle;
    background: url("http://m.kugou.com/v3/static/images/index/play_next.png") no-repeat;
    background-size: 100%
  }
</style>

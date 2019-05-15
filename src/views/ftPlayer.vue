<template>
  <div class="ft-player" id="ftPlayer" style="display: block">
    <a href="javascript:;" class="ft-go-info" id="goPlay" @click="musicup">
      <div class="ft-left">
        <img :src='$store.state.songName.img'>
      </div>
      <div class="ft-center">
        <p class="ft-desc js-ftSongName" id="ftSongName">{{$store.state.songName.songName}}</p>
        <p class="ft-sub-desc js-ftUserName" id="ftUserName">{{$store.state.songName.singerName}}</p>
      </div>
    </a>
    <div class="ft-right">
      <div><Audio></Audio></div>
      <i class="btn-loading " :class="{nextSong : $store.state.hh}" @click="CCC"></i>
      <i class="btn-next js-btnNext"></i>
      <!-- 此时只会出现两种情况，一个是免费，一个是试听免费，下载收费 -->
      <!--<i class="ft-icon-download js-dialog-show" data-dialog-id="dialogDownload" data-dialog-feeid="dialogFeeDownload"></i>-->
    </div>
    <!--<audio-->
      <!--:src="$store.state.songName"-->
    <!--&gt;-->
    <!--</audio>-->
  </div>
</template>
<script>
import Audio from './Audio'
export default {
  name: 'ftPlayer',
  components: {
    Audio
  },
  data () {
    return {
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
    musicup () {
      // alert()
      this.$emit('updateMusicOff', true)
    }
    // pause () {
    //   if (!this.playing) {
    //     this.$refs.audio.pause()
    //   } else {
    //     this.$refs.audio.play()
    //   }
    // }
  }
}
</script>

<style scoped>
  .ft-player {
    width: 100%;
    height: 4.2143rem;
    position: fixed;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .9);
    color: #fff;
    font-size: 0;
    display: none;
  }
  .ft-go-info {
    width: 65%;
    display: block;
  }
  .ft-left {
    width: 3.75rem;
    height: 3.75rem;
    margin: .2143rem .535rem .2143rem .2143rem;
  }
  .ft-center, .ft-left {
    display: inline-block;
    vertical-align: middle;
  }
  .ft-left img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    border-radius: 50%;
  }
  .ft-center {
    width: 65%;
    text-align: left;
  }
  .ft-desc {
    width: 100%;
    line-height: 1.7;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: .8571rem;
    color: #fff;
  }
  .ft-sub-desc {
    line-height: 1.3;
    font-size: .7143rem;
    color: #888;
  }
  .ft-right {
    position: absolute;
    top: 1.0714rem;
    right: .7143rem;
  }
  .btn-loading {
    background: url(http://m.kugou.com/v3/static/images/index/play_icon.png) no-repeat;
    background-size: 100%;
    -webkit-animation: loads 1.5s infinite linear;
    animation: loads 1.5s infinite linear;
    width: 2.3214rem;
    height: 2.4rem;
    /*margin-left: 1rem;*/
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
  }
  .nextSong{
    background: url("http://m.kugou.com/v3/static/images/index/pause_icon.png") no-repeat;
    background-size: 100%;
    width: 2.3214rem;
    height: 2.4rem;
    margin: 0 .8929rem;
    display: inline-block;
    vertical-align: middle;
  }
  .btn-next {
    background: url(https://m3ws.kugou.com/v3/static/images/index/next_icon.png) no-repeat;
    background-size: 100%;
    width: 1.786rem;
    height: 1.786rem;
    margin-left: 1rem;
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
  }
  .ft-icon-download {
    background: url(https://m3ws.kugou.com/v3/static/images/index/download_icon.png) no-repeat;
    background-size: 100%;
    width: 1.786rem;
    height: 1.786rem;
    margin-left: 1rem;
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
  }
  .previous{
    background: url("http://m.kugou.com/v3/static/images/index/play_prev.png") no-repeat;
    background-size: 100%;
    width: 2.3214rem;
    height: 2.4rem;
    margin: 0 .8929rem;
    display: inline-block;
    vertical-align: middle;
  }
  .pause{
    background: url("http://m.kugou.com/v3/static/images/index/play_play.png") no-repeat;
    background-size: 100%;
    width: 3.2143rem;
    height: 3.2143rem;
    margin: 0 .8929rem;
    display: inline-block;
    vertical-align: middle;
  }
</style>

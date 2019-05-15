<template>
  <div class="hello">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in banner" :key="item.banner">
        <li>
          <img :src="item.imgurl" alt="">
        </li>
      </mt-swipe-item>
    </mt-swipe>
    <ul>
        <li v-for="item in list" class="bf" @click="click1(item)" :key="item.list">
          <div class="DD"><span>{{item.filename}}</span></div>
          <div class="left">
            <!--<swipeout-button @click.native="onButtonClick('delete')" type="warn">{{$t('Right')}}</swipeout-button>-->
          </div>
        </li>
    </ul>
  </div>
</template>
<script>
// import { Swipeout} from 'vux'
import Lyric from 'lyric-parser'
import axios from 'axios'
import zjli from '../zjli'
export default {
  name: 'newSong',
  inject: ['up'],
  components: {
    zjli
  },
  data: function () {
    return {
      list: [],
      banner: [],
      img: ''
    }
  },
  methods: {
    click1 (data) {
      console.log(data)
      axios(`/proxy/api/v1/song/get_song_info?cmd=playInfo&hash=${data.hash}&from=mkugou&apiver=2&mid=17d4117acd5c0b07f07a94de1775bcd6&userid=1467787274`).then(({data}) => {
        console.log(data)
        // data.url = 'http://localhost/xiongdi.mp3'
        this.$store.state.songName = data
        console.log(data.songName)
        // console.log(data.imgUrl)
        console.log(data.url)
        console.log(data.timeLength)
        this.$store.state.songName.img = 'http://singerimg.kugou.com/uploadpic/softhead/400' + data.imgUrl.split('{size}')[1]
        // console.log(this.$store.state.songName.img)
        // console.log(this.$store.state.songName.img)
        let id = data.hash
        axios(`/proxy/app/i/krc.php?cmd=100&hash=${id}&timelength=1`).then(({data}) => {
          console.log(data)
          let gc = {}
          let lyric = new Lyric(data, gc)
          this.$store.state.lyric = lyric.lines
          console.log(this.$store.state.lyric)
        })
      })
      this.up(true)
    }
  },
  created: function () {
    // console.log('app')
    axios('/proxy/?json=true').then(({data}) => {
      // console.log(data.banner)
      this.banner = data.banner
      this.list = data.data
      console.log(this.list)
      // for (var i = 0; i <= data; i++) {
      //   // console.log(data.length)
      // }
    })
  }
}

</script>
<style scoped>
  .show{
    display:block;
  }
  .hello{
    height: 10.5rem;
    width: 100%;
    list-style: none;
  }
  img{
    width: 100%;
  }
  ul li{
    width: 100%;
    height: 4.0714rem;
    border-bottom: 1px solid #e5e5e5;
    position: relative;
    display: table;
  }
  .DD{
    padding-right: 2.657rem;
    display: table-cell;
    vertical-align: middle;
    text-align: left;
  }
  span{
    padding-left: .3571rem;
    float: left;
    font-size: 1.2rem;
  }
.bf{
  position: relative;
}
  .left{
    position: absolute;
    right: .8rem;
    top: 0;
    width: 1.3rem;
    height: 1.3rem;
    margin-top: 1.5rem;
    display: inline-block;
    background: url("http://m.kugou.com/v3/static/images/index/download_icon_2.png") no-repeat;
    background-size: 100%;

  }
</style>

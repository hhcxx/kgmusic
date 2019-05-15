<template>
<div class="phgd">
  <div class="top">
    <div class="Topbar" ref="topbar">
      <router-link to="/rank">
        <img src="http://m.kugou.com/v3/static/images/index/goback_1.png" alt="" class="goback">
      </router-link>
      <p>{{name}}</p>
    </div>
    <div class="bg"
         :style="'background-image: url(' + img + ')' + ';' + 'background-position: 0 -' + Y + 'px'"
    >
      <div class="time">
        <span>上次更新时间:{{time}}</span>
      </div>
    </div>
  </div>
  <ul>
    <li v-for="item in list" :key="item.list" @click="click(item)">
      <div class="r"><p class="content">{{item.filename}}</p></div>
      <div class="left">
      </div>
    </li>
  </ul>
  <!--<zjli></zjli>-->
</div>
</template>
<script>
import Lyric from 'lyric-parser'
import axios from 'axios'
import zjli from '../../../views/zjli'
export default {
  name: '',
  inject: ['up'],
  data: function () {
    return {
      list: [],
      info: '',
      img: '',
      Y: 0,
      name: '',
      time: []
    }
  },
  methods: {
    click (data) {
      console.log(data)
      // console.log(data.remark)
      axios(`/proxy/api/v1/song/get_song_info?cmd=playInfo&hash=${data.hash}&from=mkugou&apiver=2&mid=17d4117acd5c0b07f07a94de1775bcd6&userid=1467787274`).then(({data}) => {
        console.log(data)
        this.$store.state.songName = data
        console.log(data.songName)
        console.log(data.url)
        this.$store.state.songName.img = 'http://singerimg.kugou.com/uploadpic/softhead/400' + data.imgUrl.split('{size}')[1]
        // console.log($store.state.songName)
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
  components: {
    zjli
  },
  mounted () {
    let This = this
    console.log(this.$refs.topbar.offsetTop)
    window.addEventListener('scroll', function () {
      var t = document.documentElement.scrollTop || document.body.scrollTop
      console.log(t / 2)
      This.Y = t / 2
    })
  },
  created: function () {
    console.log(localStorage.getItem('kgid'))
    axios(`/proxy/rank/info/${localStorage.getItem('kgid')}?json=true`).then(({data}) => {
      console.log(data)
      // console.log(data)
      this.time = data.songs.list[0].addtime
      console.log(this.time)
      this.name = data.info.rankname
      console.log(this.name)
      // console.log(data.info.imgurl)
      this.list = data.songs.list
      this.img = 'http://imge.kugou.com/mcommon/400' + data.info.imgurl.split(`{size}`)[1]
      console.log(this.img)
      // for (var i = 0; i < data.info; i++) {
      //   console.log(data.info)
      //   // data.info[i] = 'http://imge.kugou.com/mcommon/400' + data.info[].split(`{size}`)[1]
      //   console.log('http://imge.kugou.com/mcommon/400' + this.info[i].imgurl.split(`{size}`)[1])
      // }
    })
  }
}

</script>

<style scoped>
  /*.top{*/
    /*height: 3rem;*/
    /*width: 100%;*/
    /*position: fixed;*/
    /*top:2rem;*/
    /*left: 0;*/
  /*}*/
  .Topbar{
    position: fixed;
    width: 100%;
    z-index: 999;
  }
  .Topbar p{
    background: -webkit-linear-gradient(top,rgba(0,0,0,.6),rgba(0,0,0,0));
    color: white;
    font-size: 1.2rem;
    height: 4rem;
    line-height: 4rem;
    /*background: red;*/
  }
  .bg{
    width: 100%;
    height: 14rem;
    background-size: 100%;
    background-position: 0 10px;
    background-repeat: no-repeat;
    background-attachment:fixed;
    position: relative;
  }
  .time{
    width: 100%;
    height: 2.8rem;
    background: -webkit-linear-gradient(bottom,rgba(0,0,0,.6),rgba(0,0,0,0));
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .time span{
    position: absolute;
    bottom: 1.25rem;
    left: 1.07143rem;
    color: #fafff2;
    font-size: 1rem;
  }
.phgd{
    position: relative;
    height: 3rem;
    background: red;
    width: 100%;
  text-align:left;
  }
p{
  line-height:3rem;
  height: 3rem;
  text-align: center;
}
.goback{
    position: absolute;
    left: 0;
    top: .5rem;
    width: .85714rem;
    height: 1.42857rem;
    margin-top: .687265rem;
    display: inline-block;
    padding-left: .8rem;
}
  ul{
    padding-left: .7143rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    /*max-width: 90%;*/
  }
  ul li{
    width: 100%;
    height: 4.0714rem;
    border-bottom: 1px solid #e5e5e5;
    position: relative;
    display: table;
    position: relative;
    table-layout: fixed;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

  }
  .content{
    text-align: left;
    line-height: 4.0714rem;
    font-size: 1.2rem;
  }
  .r{
    padding-right: 3rem;
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

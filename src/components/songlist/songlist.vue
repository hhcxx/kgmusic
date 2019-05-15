<template>
  <div class="wrap11">
    <div class="Img">
      <img :src="img" alt="" class="img">
    </div>
    <div class="head">
      <router-link to="/pilst">
        <img src="http://m.kugou.com/v3/static/images/index/goback.png" alt="" class="goback">
      </router-link>
      <p>{{name}}</p>
    </div>
    <div class="Introduction {active:show==true}" @click="off()" :class="{' bd ':ischooe}">
      <li>{{intro}}</li>
      <span class="up" :class="{' off ':ischooe}"></span>
    </div>
    <ul>
      <li v-for="item in list" class="bf" @click="click(item)" :key="item.list">
        <div class="DD">
          <span>{{item.filename}}</span>
        </div>
        <div class="left">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Lyric from 'lyric-parser'
import axios from 'axios'
export default {
  name: '',
  inject: ['up'],
  data () {
    return {
      list: [],
      info: [],
      img: '',
      name: '',
      intro: '',
      ischooe: false,
      Y: 0
    }
  },
  created: function () {
    console.log(localStorage.getItem('kgid'))
    axios(`/proxy/plist/list/${localStorage.getItem('kgid')}?json=true`).then(({data}) => {
      console.log(data)
      // console.log(data.info.list.specialname)
      this.intro = data.info.list.intro
      this.name = data.info.list.specialname
      this.list = data.list.list.info
      console.log(this.time)
      // for (var i = 0; i < data.info; i++) {
      //   console.log(data.info)
      this.img = 'http://imge.kugou.com/soft/collection/400' + data.info.list.imgurl.split(`{size}`)[1]
      console.log(this.img)
      //   console.log('http://imge.kugou.com/mcommon/400' + this.info[i].imgurl.split(`{size}`)[1])
      // }
    })
  },
  // mounted () {
  //   let This = this
  //   console.log(this.$refs.topbar.offsetTop)
  //   window.addEventListener('scroll', function () {
  //     var t = document.documentElement.scrollTop || document.body.scrollTop
  //     // console.log(t / 2)
  //     This.Y = t / 2
  //   })
  // },
  methods: {
    click (data) {
      console.log(data)
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
    },
    off: function () {
      this.ischooe = !this.ischooe
    }
  }
}
</script>

<style scoped>
  /*.Topbar{*/
    /*!*position: fixed;*!*/
    /*width: 100%;*/
    /*z-index: 999;*/
  /*}*/
  /*.Topbar p{*/
    /*background: -webkit-linear-gradient(top,rgba(0,0,0,.6),rgba(0,0,0,0));*/
    /*color:white;*/
    /*text-align: center;*/
  /*}*/
  /*.bg{*/
    /*width: 100%;*/
    /*height: 10rem;*/
    /*background-size: 100%;*/
    /*background-position: 0 10px;*/
    /*background-repeat: no-repeat;*/
    /*background-attachment:fixed;*/
  /*}*/

  /*.top{*/
    /*!*position: fixed;*!*/
  /*}*/
  /*.top p{*/
    /*line-height: 3rem;*/
  /*}*/
  /*.goback{*/
    /*position: absolute;*/
    /*left: 0;*/
    /*top: 0;*/
    /*width: .85714rem;*/
    /*height: 1.42857rem;*/
    /*margin-top: .687265rem;*/
    /*display: inline-block;*/
    /*padding-left: .8rem;*/
  /*}*/
  /*ul{*/
    /*padding-left: .7143rem;*/
    /*overflow: hidden;*/
    /*text-overflow: ellipsis;*/
    /*white-space: nowrap;*/
    /*!*max-width: 90%;*!*/
  /*}*/
  /*ul li{*/
    /*width: 100%;*/
    /*height: 4.0714rem;*/
    /*border-bottom: 1px solid #e5e5e5;*/
    /*position: relative;*/
    /*display: table;*/
  /*}*/
  /*.content{*/
    /*text-align: left;*/
    /*line-height: 4.0714rem;*/
    /*font-size: 1.2rem;*/
  /*}*/
  /*.phgd{*/
    /*position: relative;*/
    /*height: 3rem;*/
    /*!*background: red;*!*/
    /*width: 100%;*/
    /*text-align:left;*/
  /*}*/
  /*.bf{*/
    /*position: relative;*/
  /*}*/
  /*.left{*/
    /*position: absolute;*/
    /*right: .8rem;*/
    /*top: 0;*/
    /*width: 1.3rem;*/
    /*height: 1.3rem;*/
    /*margin-top: 1.5rem;*/
    /*display: inline-block;*/
    /*background: url("http://m.kugou.com/v3/static/images/index/download_icon_2.png") no-repeat;*/
    /*background-size: 100%;*/
  /*}*/
  .wrap11 .bd{
    height:100%
  }
  .wrap11{
    position: relative;
    /*height: 3rem;*/
    width: 100%;
    text-align: left;
  }
  a{
    text-decoration: none;
  }
  .head p{
    height: 3rem;
    line-height: 3rem;
    font-size: 1.2rem;
    color: white;
    position: absolute;
    top: 0;
    left: 10%;
  }
  .head{
    position: fixed;
    width: 100%;
    top: 3.6rem;
    box-shadow: 0 0.1785rem 0.1785rem 0 #f4f4f4;
    background: -webkit-linear-gradient(top,rgba(0,0,0,.6),rgba(0,0,0,0));
  }
  .Img{
    height: 18rem;
    overflow: hidden;
  }
  .img{
    width: 100%;
  }
  .goback{
    position: absolute;
    left: 0;
    top: 0;
    width: .85714rem;
    height: 1.42857rem;
    margin-top: .687265rem;
    display: inline-block;
    padding-left: .8rem;
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
  .Introduction{
    width: 100%;
    color: black;
    height: 1.5rem;
    overflow: hidden;
    position: relative;
    /*overflow: hidden;*/
  }
  .Introduction li{
    width: 86%;
    list-style: none;
    font-size: 1.2rem;
    padding-left: 1rem;
  }
  .Introduction .up{
    position: absolute;
    width: 1.1429rem;
    height: 2rem;
    line-height: 2.1429rem;
    top: .1rem;
    right: .1786rem;
    text-align: center;
    cursor: pointer;
    background: url("http://m.kugou.com/v3/static/images/index/close_icon.png") no-repeat;
    background-size: 100%;
  }
  .wrap11 .off{
    background: url("http://m.kugou.com/v3/static/images/index/open_icon.png") no-repeat;
    background-size: 100%;
  }
  .on{
    height: 100%;
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

<template>
  <div class="helloB">
    <img src="http://m.kugou.com/v3/static/images/index/goback.png" alt="" class="goback" @click="fn()">
    <P>搜索</P>
    <div class="search-box">
      <div class="search-form-box">
        <!--<form name="searchForm" class="search-form" id="searchForm">-->
        <span class="search-icon"></span>
          <input type="text" placeholder="歌手/歌名/拼音" name="keyword" value="" id="keyword" class="search-keyword" v-model="find" @keyup.13="cli()" >
          <input type="submit" value="搜索" class="search-btn search-disabled-btn" id="searchBtn" @click="cli()" >
        <!--</form>-->
      </div>
    </div>
    <ul>
      <div class="total" v-if="show">共有{{total}}条结果</div>
      <li v-for="item in list" class="bf" :key="item.list" @click="click(item)">
        <div class="DD">
          <span class="wz">{{item.filename}}</span>
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
  data: function () {
    return {
      list: [],
      find: '',
      show: false,
      total: ''
    }
  },
  methods: {
    fn () {
      this.$router.go(-1)
      // console.log(this.$store.state.songName.url)
      if (this.$store.state.songName.url) {
        // 点击返回上一页的时候，判断是否在播歌曲
        this.up(true)
        // true是显示出来的
      } else {
        // 否则没有歌曲在播的时候ftplay页面不显示
        this.up(false)
        // false不显示
      }
    },
    CCC () {
      this.$store.state.hh = !this.$store.state.hh
      var x = document.getElementById('myAudio')
      if (!this.$store.state.hh) {
        x.pause()
      } else {
        x.play()
      }
    },
    click (data) {
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
        this.up(true)
      })
    },
    cli () {
      if (this.find.length) {
        // this.show = false
        axios(`/search/api/v3/search/song?format=json&keyword=${this.find}&page=1&pagesize=30&showtype=1`).then(({data}) => {
          console.log(data)
          console.log(data.data.total)
          this.total = data.data.total
          // console.log(this.total)
          this.list = data.data.info
          console.log(this.list)
          this.show = true
          this.up(false)
        })
      } else {
        alert('请输入搜索的歌曲')
      }
    }
  },
  created: function () {
    // this.cli()
    // console.log(this.find)
    // axios(`/search/api/v3/search/song?format=jsonp&keyword=${this.find}&page=1&pagesize=30&showtype=1`).then(({data}) => {
    //   console.log(data)
    //   // let num1 = data.indexOf('(')
    //   // let num2 = data.indexOf(')')
    //   // let resultData = JSON.parse(data.substring(num1 + 1, num2))
    //   // console.log(typeof(resultData))
    //   // console.log(resultData)
    // })
  }
}
</script>
<style scoped>
  .helloB{
    width: 100%;
    height: 3rem;
   color: black;
    position: relative;
    border-bottom: 1px solid #a9acb1;
  }
  p{
    line-height: 3rem;
    font-size: 1.2rem;
    text-align: center;
  }
  .goback{
    color: black;
    width: .85714rem;
    height: 1.42857rem;
    position: absolute;
    left: .6rem;
    top: .8rem;
  }
  .search-keyword {
    width: 70%;
    padding: .4rem .0714rem .4rem 1.7rem;
    margin-right: 3%;
    display: inline-block;
    vertical-align: middle;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    font-size: 1rem;
  }
  .search-form {
    position: relative;
    font-size: 0;
  }
  .search-icon {
    width: 1.2143rem;
    height: 1.9285rem;
    display: block;
    position: absolute;
    top: 1px;
    left: 1.3714rem;
    background: url(http://m.kugou.com/v3/static/images/index/search_icon.png) no-repeat;
    background-size: 100%;
  }
  .search-disabled-btn {
    color: #959595;
    background: #e5e5e5;
  }
  .search-btn {
    width: 17.25%;
    height: 2.0714rem;
    line-height: 2.0714rem;
    border: none;
    border-radius: 5px;
    display: inline-block;
    vertical-align: middle;
    font-size: 1rem;
    text-align: center;
    background: #2ba2fa;
    color: #fff;
  }
  .search-box{
    margin-top: 1rem;
    width: 90%;
    padding-left: 5%;
    position: relative;
    font-size: 0;
    margin-bottom: 1rem;
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
  .wz {
    padding-left: 1.3571rem;
    float: left;
    font-size: 1.2rem;
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
  .total{
    height: 1.5714rem;
    line-height: 1.5714rem;
    background: #e6e6e6;
    padding-left: .9rem;
    font-size: .7857rem;
    color: #5d5d5d;
    text-align: left;
  }
</style>

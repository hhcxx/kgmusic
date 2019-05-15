<template>
  <div class="hello">
    <ul class="panel-img-list " id="panelList">
      <li v-for="item in list" class="li" :key="item.list" @click="show(item)">
        <!--<a href="">-->
          <div class="panel-img-left">
            <img :src="item.imgurl" alt="">
          </div>
          <div class="panel-img-content">
            <p class="panel-img-content-first">
              {{item.specialname}}
            </p>
            <p class="panel-img-content-sub">
              <i class="icon-music"></i>
              {{item.playcount}}
            </p>
          </div>
          <div class="panel-img-right">
            <i class="panel-img-arrow"></i>
          </div>
        <!--</a>-->
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: '',
  data () {
    return {
      list: []
    }
  },
  methods: {
    show (data) {
      // console.log(data)
      localStorage.setItem('kgid', data.specialid)
      console.log('kgid')
      this.$router.push('/songlist')
      // alert(1)
    }
  },
  created: function () {
    axios('/proxy/plist/index/?json=true').then(({data}) => {
      // console.log(data.plist.list.info)
      this.list = data.plist.list.info
      console.log(this.list)
      for (var i = 0; i < this.list.length; i++) {
        // console.log(data.length)
        this.list[i].imgurl = 'http://imge.kugou.com/soft/collection/400' + this.list[i].imgurl.split('{size}')[1]
        // console.log('http://imge.kugou.com/mcommon/400' + this.list[i].imgurl.split('{size}')[1])
        // console.log(this.list[i].imgurl)
      }
    })
  }
}
</script>

<style scoped>
   /*li{*/
      /*height: 7rem;*/
      /*list-style: none;*/
      /*border-bottom: 1px solid #e5e5e5;*/
    /*}*/
   /*.left{*/
     /*position: absolute;*/
     /*left: 0;*/
     /*width: 5.3751rem;*/
     /*height: 5.3751rem;*/
     /*background: black;*/
   /*}*/
   /*a{*/
     /*display: block;*/
     /*position: relative;*/
     /*margin-left: .7143rem;*/
     /*padding: .7143rem 2.14286rem .7143rem 6.4286rem;*/
   /*}*/
   /*.cen{*/
     /*position: absolute;*/
     /*left: 30%;*/
     /*width: 13rem;*/
     /*height: 4rem;*/
     /*background: black;*/
   /*}*/
  li{
    text-decoration: none;
    display: block;
    position: relative;
    margin-left: .7143rem;
    padding: .7143rem 2.14286rem .7143rem 6.4286rem;
    border-bottom: 1px solid #e5e5e5;
    color: black;
  }
  span{
    width: 3rem;
  }
  .li{
    height: 6rem  ;
  }
    .panel-img-list li a {
      display: block;
      position: relative;
      margin-left: .7143rem;
      padding: .7143rem 2.14286rem .7143rem 6.4286rem;
      border-bottom: 1px solid #e5e5e5;
      height: 6rem;
    }
    a {
      text-decoration: none;
      -webkit-tap-highlight-color: transparent;
    }
    .panel-img-left {
      position: absolute;
      top: .7143rem;
      left: 0;
      width: 5.3751rem;
      height: 5.3751rem;
    }
    .panel-img-left img {
      width: 100%;
      border-radius: 50%;
    }
    .panel-img-content {
      min-height: 5.3751rem;
      /*line-height: 5.3751rem;*/
      display: block;
      font-size: 1.0714rem;
      color: #333;
      text-align: left ;
    }
    .page-plist-index .panel-img-content {
      line-height: 1.5;
      font-size: 1rem;
    }
    .page-plist-index .panel-img-content-first {
      padding-top: 1.4286rem;
    }
    p {
      display: block;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
    }
    .panel-img-content-sub {
      color: #9b9b9b;
      font-size: .7857rem;
    }
    .icon-music {
      width: .7143rem;
      height: .7143rem;
      margin-top: .10714rem;
      margin-right: .2857rem;
      display: inline-block;
      background: url(https://m3ws.kugou.com/v3/static/images/index/icon_music.png) no-repeat;
      background-size: 100%;
    }
    .panel-img-right {
      position: absolute;
      top: 0;
      right: 0;
      width: 2.14286rem;
      height: 100%;
      text-align: center;
      display: block;
    }
    .panel-img-arrow {
      width: .57143rem;
      height: 1rem;
      margin-top: -.5rem;
      position: absolute;
      top: 50%;
      right: .7143rem;
      display: block;
      background: url(https://m3ws.kugou.com/v3/static/images/index/arrow_icon.png) no-repeat;
      background-size: 100%;
    }
    .page-plist-index .panel-img-content {
      line-height: 1.5;
      font-size: 1rem;
    }
</style>

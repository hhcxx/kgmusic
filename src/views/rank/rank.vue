<template>
  <div class="hello">
    <ul class="panel-img-list">
      <!--<li v-for="item in list">-->
        <!--<div class="DD">-->
          <!--<img :src="item.imgurl" alt="">-->
          <!--<span>{{item.rankname}}</span>-->
        <!--</div>-->
      <!--</li>-->
      <li v-for="item in list" @click="show(item)" :key="item.list">
        <!--<router-link to="/RankingSongList">-->
        <!--<a href="">-->
          <div class="panel-img-left">
              <img :src="item.imgurl"  alt="">
          </div>
          <div class="panel-img-content">
            <p>
              {{item.rankname}}
            </p>
          </div>
          <div class="panel-img-right">
            <i class="panel-img-arrow"></i>
          </div>
        <!--</router-link>-->
        <!--</a>-->
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'App',
  data () {
    return {
      list: []
    }
  },
  methods: {
    show (data) {
      // console.log(data.rankid)
      localStorage.setItem('kgid', data.rankid)
      console.log(localStorage.getItem('kgid'))
      this.$router.push('/RankingSongList')
    }
  },
  created: function () {
    axios('/proxy/rank/list?json=true').then(({data}) => {
      // console.log(data.rank.list)

      this.list = data.rank.list
      console.log(this.list)
      for (var i = 0; i < this.list.length; i++) {
        // console.log(data.length)
        this.list[i].imgurl = 'http://imge.kugou.com/mcommon/400' + this.list[i].imgurl.split('{size}')[1]
        // console.log('http://imge.kugou.com/mcommon/400' + this.list[i].imgurl.split('{size}')[1])
      }
    })
  }
}
</script>

<style scoped>
  *{
    padding: 0;
    margin: 0;
  }
  /*li{*/
    /*height: 7rem;*/
    /*border-bottom: 1px solid #e5e5e5;*/
    /*font-size: 1.2rem;*/
    /*line-height: 7rem;*/
  /*}*/
  /*img{*/
    /*width: 20%;*/
  /*}*/
  .panel-img-list li{
    display: block;
    position: relative;
    margin-left: .7143rem;
    padding: .7143rem 2.14286rem .7143rem 6.4286rem;
    border-bottom: 1px solid #e5e5e5;
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
  .panel-img-content {
    min-height: 5.3751rem;
    line-height: 5.3751rem;
    display: block;
    font-size: 1.0714rem;
    color: #333;
  }
 .panel-img-content p {
      float: left;
  }
</style>

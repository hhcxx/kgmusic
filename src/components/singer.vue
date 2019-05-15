<template>
  <div class="hello">
    <li v-for="item in list" class="gs" @click="show(item)" :key="item.list">
      <!--<router-link to="/popular">-->
      {{item.classname}}
      <i class="singer-list-arrow"></i>
      <!--</router-link>-->
    </li>
    <!--<li class="popular">-->
      <!--<router-link to="/popular">-->
        <!--<a href="">-->
          <!--<i class="singer-list-arrow"></i>-->
          <!--热门歌手-->
        <!--</a>-->
      <!--</router-link>-->

    <!--</li>-->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: '',
  data: function () {
    return {
      list: []
    }
  },
  methods: {
    show (data) {
      localStorage.setItem('kgid', data.classid)
      console.log('kgid')
      this.$router.push('/popular')
    }
  },
  created: function () {
  // console.log('app')
    axios('/proxy/singer/class?json=true').then(({data}) => {
      console.log(data)
      this.list = data.list
      console.log(this.list)
      // for (var i = 0; i <= data; i++) {
      //   console.log(data.length)
      // }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a{
    text-decoration: none;
    color: black;
    float: left;

    font-size: 1rem;
  }
  li{
    list-style: none;
    background: #fbfbfb;
    border: 1px solid #e4e4e4;
    padding: 1.4rem;
    margin: 1rem .7143rem 1.0714rem .7143rem;
    display: flex;
    position: relative;

  }
  .singer-list-arrow{
    width: .57143rem;
    height: 1rem;
    margin-top: .2rem;
    background: url(http://m.kugou.com/v3/static/images/index/arrow_icon.png);
    background-size: 100%;
    float: right;
    display: block;
  }
  i{
    position: absolute;
    right: 0.4rem;
    top: 1.2  rem;
  }
</style>

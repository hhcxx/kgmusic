<template>
  <div class="wrap1">
    <div class="head">
      <router-link to="/singer">
        <img src="http://m.kugou.com/v3/static/images/index/goback.png" alt="" class="goback">
      </router-link>
      <p class="p">{{classname}}</p>
    </div>
    <div>
      <ul class="PopularSinger">
        <li v-for="item in list" @click="show1(item)" class="gs" :key="item.list">
          <!--<router-link to="/singerinfo">-->
            <div class="left">
            <img :src="item.imgurl"  alt="">
            </div>
            <div class="content">
              <p>
                {{item.singername}}
              </p>
            </div>
          <!--</router-link>-->
          </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: '',
  data: function () {
    return {
      list: [],
      classname: ''
    }
  },
  created: function () {
  // console.log('app')
    console.log(localStorage.getItem('kgid'))
    // console.log(kgid)
    axios(`/proxy/singer/list/${localStorage.getItem('kgid')}?json=true`).then(({data}) => {
      console.log(data.classname)
      this.classname = data.classname
      this.list = data.singers.list.info
      console.log(data.singers.list.info)
      console.log(this.list)
      for (var i = 0; i < this.list.length; i++) {
        this.list[i].imgurl = 'http://singerimg.kugou.com/uploadpic/pass/softhead/400' + this.list[i].imgurl.split('{size}')[1]
        // console.log(data.length)
        // console.log(this.list[i].imgurl)
        console.log('http://singerimg.kugou.com/uploadpic/pass/softhead/400' + this.list[i].imgurl.split('{size}')[1])
      }
    })
  },
  methods: {
    show1 (data) {
      // console.log(data.classid)
      localStorage.setItem('kgidd', data.singerid)// 储存
      this.$router.push('/singerinfo')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap1{
  position: relative;
  height: 3rem;
  width: 100%;
}
.head p{
  height: 3rem;
  line-height: 3rem;
  font-size: 1.2rem;
  text-align: center;

}
.head{
  box-shadow: 0 0.1785rem 0.1785rem 0 #f4f4f4;
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
.PopularSinger{
  position: relative;
}
.PopularSinger .gs{
  display: block;
  position: relative;
  margin-left: .7143rem;
  padding: .7143rem 2.14286rem .7143rem 4.4286rem;
  border-bottom: 1px solid #e5e5e5;
  text-decoration: none;
;
}
.left{
  width: 3.3929rem;
  height: 3.3929rem;
  position: absolute;
  left: 0;
  top: 0;
  padding-top: .8rem;
}
.left img{
  width: 100%;
  border-radius: 50%;
}
.content{
  min-height: 3.3929rem;
  line-height: 3.3929rem;
  color: #333333;
  font-size: 1.2rem;
  position: relative;
}
.content p{
  position: absolute;
  left: 0;
  top: 0rem;
}
</style>

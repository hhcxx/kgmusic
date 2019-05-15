<template>
  <div>
    <div class="box">
      <mt-navbar>
        <mt-tab-item id=""><router-link to="/">新歌</router-link> </mt-tab-item>
        <mt-tab-item id=""><router-link to="/rank">排行</router-link> </mt-tab-item>
        <mt-tab-item id=""><router-link to="/pilst">歌单</router-link> </mt-tab-item>
        <mt-tab-item id=""><router-link to="/singer">歌手</router-link> </mt-tab-item>
      </mt-navbar>
    </div>
  </div>
</template>
<script>
export default {
  name: 'navBar'
}
</script>

<style scoped>
    a{
      font-size: 20px;
      text-decoration: none;
      color: black;
    }
  /*a:hover{*/
    /*border-bottom: .2143rem solid #33a3f5;*/
  /*}*/
  /*a:nth-child(1){*/
    /*border-bottom: .2143rem solid #33a3f5;*/
  /*}*/
    .mint-navbar{
      box-shadow: 0 0.1785rem 0.1785rem 0 #f4f4f4;
      width: 100%;
      background: #fff;
      height: 3.7143rem;
      line-height: 3rem;
      /*position: fixed;*/
      /*top: 3rem;*/
      /*z-index: 999999;*/
      /*overflow: hidden;*/
    }
  .box{
    position: fixed;
    width: 100%;
    z-index: 9999999999999999;
  }
</style>

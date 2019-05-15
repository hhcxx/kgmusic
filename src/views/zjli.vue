<template>
    <div>
      <!--<ul>-->
        <!--<li v-for="item in list" :key="item.list">-->
          <!--<div class="r"><p class="content">{{item.filename}}</p></div>-->
          <!--<div class="left">-->
          <!--</div>-->
        <!--</li>-->
      <!--</ul>-->
    </div>
</template>
<script>
export default {
  name: 'zjli'
}
</script>

<style scoped>
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

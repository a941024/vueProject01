<template>
    <div id="app">

      <div id="head">
        <span id="head_01">ele.me</span>
        <span id="head_02">登录|注册</span>
      </div>

      <div id="guess">
        <div class="van1">
          <van-cell title="当前定位城市:" value="定位不准时,请在商品列表中选择" />
        </div>
        <van-cell class="van1" title=" " is-link />
      </div>

      <div id="citys">
        <van-cell value="热门城市" />
        <van-row>
          <van-col span="6" class="van2"  v-for="(v,index) in hotCity" :key="index">
            {{v.name}}
          </van-col>
        </van-row>
    </div>

      <div id="someCity">
        <van-cell value="A" />
        <van-row>
          <van-col span="6" class="van2">上海</van-col>
        </van-row>
      </div>
    </div>
</template>

<script>
    export default {
        name: "home",
      data(){
        return {
          hotCity:[],
          citys:[],
        }
      },
      created(){
        //    发起网络请求
        this.axios.get("https://elm.cangdu.org/v1/cities?type=hot").then((response) => {
          this.hotCity=response.data;
          console.log(this.hotCity);
        });
        this.axios.get("https://elm.cangdu.org/v1/cities?type=hot").then((response) => {
          this.hotCity=response.data;
          console.log(this.hotCity);
        });
      }
    }
</script>

<style scoped>
  #app{
    background: rgba(0,0,0,0.1);
  }

  .van1{
    border-bottom: 1px solid rgba(0,0,0,0.2);
  }

  .van2{
    border: 1px solid rgba(0,0,0,0.1);
    color: #3190e8;
    text-align: center;
    background: white;
    font-size: 0.8rem;
  }

  #head{
    background: #3190e8;
    width: 100%;
    height: 1.95rem;
    /*clear: both;*/
    color: white;
  }

  #head_01{
    display: block;
    float: left;
    padding-left: 1rem;
    padding-top: 0.45rem;
  }

  #head_02{
    display: block;
    float: right;
    padding-right: 1rem;
    padding-top: 0.45rem;
  }

  #guess{
    margin-bottom: 0.6rem;
  }
</style>

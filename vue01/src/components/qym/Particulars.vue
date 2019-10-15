<template>
    <div id="part">
      <van-nav-bar title="商家详情" left-arrow @click-left="FH"/>

      <div id="activity">
        <h3>活动与属性</h3>
        <hr>
        <van-tag>{{data1.supports[0].icon_name}}</van-tag><span>{{data1.supports[0].description}}(App专享)</span>
        <br>
        <van-tag type="primary">{{data1.supports[1].icon_name}}</van-tag><span>{{data1.supports[1].description}}(App专享)</span>
        <br>
        <van-tag>{{data1.supports[2].icon_name}}</van-tag><span>{{data1.supports[2].description}}(App专享)</span>
        <br>
      </div>

      <div id="safety">
        <p>食品安全监督公示 <span>企业认证详情></span></p>
        <hr>
        <van-icon name="smile" />

        <span>监督检查结果：良好</span>
        <p> 检查日期</p>
      </div>

      <div id="msg">
        <p>商家信息</p>
        <hr>
        <p>{{data1.name}}</p>
        <hr>
        <p>地址:{{data1.address}}</p>
        <hr>
        <p>营业时间：{{data1.opening_hours[0]}}</p>
        <hr>
        <p>营业执照 <span> > </span></p>
        <hr>
        <p>餐饮服务许可证 <span> > </span></p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Particulars",
        data(){
          return {
            num:"",
            data1:[]
            }
       },
      methods:{
          FH(){
            this.$router.push({path:'/Restaurant',query:{pId:this.num}})
          }
      },
        created(){
          this.num = this.$route.query.num;
          // console.log(this.num);
          this.axios.get("https://elm.cangdu.org/shopping/restaurant/"+this.num).then((res)=>{
          this.data1=res.data
          console.log(this.data1);
        }).catch((err)=>{
          console.log(err);
        })
      }
    }
</script>

<style scoped>
  html,body{
    width: 100%;
    height: 100%;
    font-size: 20px;
  }
  .van-nav-bar {
    background-color: #3190e8;
  }

  .van-nav-bar__arrow {
    color: #fff;
    font-size: 1.2rem;
  }

  .van-nav-bar__title {
    color: whitesmoke;
    font-weight: bold;
    font-size: 0.9rem;
  }

  .van-nav-bar__text {
    color: #fff;
  }
  #activity{
    background-color: white;
    margin: 0.5rem 0;
    font-size: 0.8rem;
    padding: 0.5rem 0;
  }
  #activity h3  {
    margin: 0.3rem;
  }
  #activity span{
    margin: 0.3rem;
  }
  #safety{
    background-color: white;
    margin: 0.4rem 0;
    padding: 0.5rem;
  }
  #msg{
    background-color: white;
    margin: 0.4rem 0;
    padding: 0.5rem;
  }
  #msg p {
    margin: 0.5rem 0;
  }
</style>

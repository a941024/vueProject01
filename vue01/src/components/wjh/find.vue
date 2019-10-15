<template>
  <div id="header">
    <van-nav-bar
      title="搜索"
      left-arrow
      @click-left="toF"
    />

    <van-cell-group>
      <van-field
        v-model="sms"
        center
        clearable
        placeholder="请输入商家或者美食名称"
      >
        <van-button slot="button" size="small" type="primary" @click="fanDian">提交</van-button>
      </van-field>
    </van-cell-group>


    <div id="font" v-if="change">
      <p>{{message}}</p>
    </div>

  </div>
</template>

<script>
    export default {
      name: "find",
      data(){
        return{
          jd:'31.23037',
          wd:'121.473701',
          sms:'',
          message:'',
          change: false
        }
      },
      created(){
        this.axios.get("https://elm.cangdu.org/v1/cities?type=guess").then((res) => {
          console.log(res.data);
        });
      },
      methods:{
        toF(){
          this.$router.push({path:'/TakeOut'})
        },
        fanDian(){
          this.axios.get(`https://elm.cangdu.org/v4/restaurants?geohash=${this.wd},${this.jd}&keyword=${this.sms}`).then((res) => {
            console.log(res.data);
            this.message = res.data.message;
            this.change = true;
            console.log(this.message);
            console.log(this.change);
          });
        }
      },
      // watch:{
      //   message(){
      //     if(this.message ==""){
      //       this.change = false;
      //     }
      //   }
      // }
    }
</script>

<style scoped>
  .van-nav-bar{
    background: #3190e8;
    color: white;
  }
  .van-icon-arrow-left {
    color: white;
    font-size: 1.2rem;
  }
  .van-nav-bar__title{
    color: white;
    font-size: 0.9rem;
    font-weight: 600;
  }
  .van-nav-bar__text{
    color: white;
  }
  .search_form{
    background: white;
    padding: 0.5rem;
  }
  .van-field__control{
    border: 1px solid #e4e4e4;
    font-size: .65rem;
    color: #333;
    border-radius: .125rem;
    background-color: white;
  }
  .van-cell{
    border: 1px solid #e4e4e4;
    padding: 0.2rem 0.4rem;
    font-size: 0.8rem;
    color: #333;
    margin-bottom: 0.25rem;
  }
  .van-button{
    background-color: #3190e8;
    height: 1.6rem;
    line-height: 0;
    border-radius: 0.25rem;
  }

  #font{
    height: 2rem;
    margin: 0 auto;
    font-size: 0.8rem;
    text-align: center;
    color: #333;
    background-color: #fff;
  }
  #font p{
    padding-top: 0.5rem;
  }
</style>

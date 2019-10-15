<template>
  <div id="res">
    <van-nav-bar title="重置密码" left-arrow @click-left="onClickLeft"/>
    <van-cell-group>
      <van-field placeholder="账号" v-model="username" />
      <van-field placeholder="旧密码" v-model="oldpassWord"/>
      <van-field placeholder="请输入新密码" v-model="newpassword"/>
      <van-field placeholder="请确认密码" v-model="confirmpassword"/>
      <van-field placeholder="验证码" maxlength="6" :style="{'width' : '10rem'}" v-model="yzm"/>
    </van-cell-group>
    <van-button type="primary" size="normal" @click="sendChange">确认修改</van-button>

    <div id="yzm" >
      <img :src="img" alt="">
      <div @click="changeImg">
        <p id="zt1">看不清</p>
        <p id="zt2">换一张</p>
      </div>
    </div>

    <van-popup v-model="show">
      <van-icon name="warning-o" class="warn"/>
      <p class="tips">{{returnT}}</p>
      <p class="tips">{{returnF}}</p>
      <van-button type="primary" size="normal" class="btn" @click="showPopup">确定</van-button>
    </van-popup>

  </div>
</template>

<script>
  export default {
    name: "ResetPassword",
    data(){
      return {
        img:'',
        username:'',
        oldpassWord:'',
        newpassword:'',
        confirmpassword:'',
        yzm:'',
        success:'',
        returnT:'',
        returnF:'',
        show:false,
      }
    },
    created(){
      // changeImg();
      this.axios.post("https://elm.cangdu.org/v1/captchas").then((res)=>{
        this.img = res.data.code;
        console.log(res.data);
      })
    },
    methods:{
      changeImg(){
        this.axios.post("https://elm.cangdu.org/v1/captchas").then((res)=>{
          this.img = res.data.code;
          console.log(res.data);
        })
      },
      onClickLeft() {
        this.$router.push({path:'/logIn'})
      },
      sendChange(){
        this.axios.post("https://elm.cangdu.org/v2/changepassword",{
          username:this.username,
          oldpassWord:this.oldpassWord,
          newpassword:this.newpassword,
          confirmpassword:this.confirmpassword,
          captcha_code:this.yzm
        }).then((res)=>{
          this.returnT = res.data.success;
          this.returnF = res.data.message;
        });

        this.show = !this.show;
      },
      showPopup(){
        this.axios.post("https://elm.cangdu.org/v1/captchas").then((res)=>{
          this.img = res.data.code;
        });
        this.show = !this.show;
      }
    },
  }
</script>

<style scoped>
  #res {
    height: 100%;
    width: 100%;
    position: relative;
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

  .van-cell-group {
    margin-top: 0.7rem;
  }

  .van-cell {
    border-bottom: 1px solid #f1f1f1;
    font-size: 0.7rem;
  }
  .van-button--primary{
    background: #4cd964;
    width: 96%;
    margin-top: 1rem;
    margin-left: 0.35rem;
    border: 1px solid #4cd964;
    border-radius: 0.2rem;
  }

  #yzm{
    width: 6rem;
    height: 2.2rem;
    font-size: 0.6rem;
    color: black;
    overflow: hidden;
    position: absolute;
    right: 0.5rem;
    top: 12.75rem;
  }
  #yzm img{
    width: 3.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
    float: left;
    margin-top: 0.1rem;
  }
  #yzm div{
    float: left;
  }
  #zt1{
    color: #666;
  }
  #zt2{
    color: #3b95e9;
    margin-top: .2rem;
  }

  .van-popup--center {
    border-radius: 0.25rem;
    width: 13.5rem;
    /*height: 8.2rem;*/
  }
  .warn {
    color: #f8cb86;
    font-size: 3.8rem;
    margin-top: 0.2rem;
    margin-left: 5rem;
  }
  .tips {
    color: black;
    text-align: center;
    font-size: 0.85rem;
    text-align: center;
    margin: 0.2rem;
  }

  .btn {
    width: 13.5rem;
    font-size: 1rem;
    margin-left: -0.02rem;
    background-color: #4cd964;
  }
</style>

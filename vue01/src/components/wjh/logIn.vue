<template>
    <div id="app">
      <div id="header">
        <van-nav-bar
          title="密码登录"
          left-arrow
          @click-left="toF"
        />

        <van-cell-group>
          <van-field
            v-model="username"
            placeholder="账号"
          />

          <van-field
            v-model="password"
            :type="checked?'password':'text'"
            placeholder="密码"
            :style="{'width' : '15rem'} "
          />
          <van-switch
            v-model="checked"
            active-color="#07c160"
            inactive-color="#ccc"
          />
        </van-cell-group>

        <van-cell-group>
          <van-field
            v-model="yzm"
            center
            clearable
            placeholder="验证码"
            maxlength="4"
            :style="{'width' : '10rem'} "
          >
          </van-field>
        </van-cell-group>

        <div id="someP">
          <span>abc···</span>
        </div>

        <div id="yzm" >
          <img :src="img" alt="">
          <div @click="changeImg">
            <p id="zt1">看不清</p>
            <p id="zt2">换一张</p>
          </div>
        </div>

        <div class="mgin">
          <p class="login_tips">温馨提示：未注册过的账号，登录时将自动注册</p>
          <p class="login_tips">注册过的用户可凭账号密码登录</p>
        </div>

        <van-button type="primary" size="normal" @click="send">登录</van-button>

        <router-link :to="{path:'/password'}">
          <p id="zt3">重置密码?</p>
        </router-link>

        <van-popup v-model="show">
          <van-icon name="warning-o" class="warn"/>
          <p class="tips">{{returnF}}</p>
          <van-button type="primary" size="normal" class="btn" @click="showPopup">确定</van-button>
        </van-popup>

      </div>
    </div>
</template>

<script>
    export default {
      name: "logIn",
      data() {
          return  {
            username:'',
            password:'',
            yzm:'',
            checked: true,
            img:'',
            returnT:'',
            returnF:'',
            show: false
          }
      },
      created(){
        // changeImg();
        this.axios.post("https://elm.cangdu.org/v1/captchas").then((res)=>{
          this.img = res.data.code;
        })
      },
      methods:{
        changeImg(){
          this.axios.post("https://elm.cangdu.org/v1/captchas").then((res)=>{
            this.img = res.data.code;
          })
        },
        send(){
          this.axios.post("https://elm.cangdu.org/v2/login",{
            username:this.username,
            password:this.password,
            captcha_code:this.yzm
          }).then((res)=>{
            console.log(res.data);
            this.returnT = res.data.status;
            this.returnF = res.data.message;

            if(this.returnT == 0){
              this.show = !this.show;
            }else{
              this.$router.push({path:'/home',query: {yhm:this.username}});
            }
          });
          this.axios.post("https://elm.cangdu.org/v1/captchas").then((res)=>{
            this.img = res.data.code;
          });
        },
        showPopup(){
          this.show = !this.show;
        },
        toF(){
          this.$router.push({path:'/home'});
        }
      },
    }
</script>

<style scoped>
  /*#app{*/
    /*overflow: hidden;*/
  /*}*/
  #header{
    color: white;
    background-color: #3190e8;
    left: 0;
    top: 0;
    width: 100%;
    height: 2.2rem;
    font-size: 1rem;
    position: relative;
  }
  .van-switch{
    width: 2.9rem;
    height: 1.4rem;
    position: absolute;
    top: 2.6rem;
    right: 1rem;
  }
  #someP{
    position: absolute;
    top: 5.95rem;
    right: 1.45rem;
    color: white;
    font-size: 0.8rem;
  }
  .van-switch__node{
    width: 1.4rem;
    height: 1.4rem;
  }

  .van-nav-bar{
    background-color: #3190e8;
    margin-bottom: 0.7rem;
  }
  .van-icon-arrow-left {
    color: white;
    font-size: 1.2rem;
  }
  .van-nav-bar__title{
    color: white;
    font-size: 1rem;
    font-weight: 600;
  }
  .van-nav-bar__text:hover{
    background: #3190e8;
  }
  .van-button--primary{
    background: #4cd964;
    width: 96%;
    margin-top: 0.3rem;
    margin-left: 0.3rem;
    margin-bottom: 1em;
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
    top: 8rem;
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
  #zt3{
    text-align: right;
    font-size: .6rem;
    color: #3b95e9;
    margin-right: .3rem
  }
  .login_tips{
    font-size: .5rem;
    color: red;
    padding: .4rem .7rem;
    line-height: .5rem;
  }
  .mgin{
    margin-top: 0.3rem;
  }



  .van-popup--center {
    border-radius: 0.25rem;
    width: 13.5rem;
    height: 8.2rem;
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

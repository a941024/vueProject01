<template>
  <div id="account">
    <van-nav-bar title="账户信息" left-arrow @click-left="onClickLeft"/>
    <van-cell-group :class="{one:true}">
      <van-cell title="头像" value="内容" is-link>
        <input type="file">
      </van-cell>
      <van-cell title="用户名" value="" is-link/>
      <van-cell title="收货地址" value="" is-link/>
    </van-cell-group>
    <van-cell-group title="账号绑定">
      <van-cell title="手机" is-link @click="showPopup"/>
      <van-popup v-model="show">
        <p :class="{tips:true}">请在手机App中设置</p>
        <van-button type="primary" size="normal" :class="{btn:true}">确定</van-button>
      </van-popup>
    </van-cell-group>
    <van-cell-group title="安全设置">
      <van-cell title="登录密码" value="修改" is-link/>
    </van-cell-group>
    <van-button type="danger" size="normal">退出登录</van-button>
  </div>
</template>

<script>
  export default {
    name: "AccountInfo",
    data() {
      return {
        show: false
      }
    },
    methods: {
      onClickLeft() {
        console.log('返回')
      },
      showPopup() {
        this.show = true;
      }
    }
  }
</script>

<style scoped>
  #account {
    height: 100%;
    width: 100%;
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

  .van-button--danger {
    background: #d8584a;
    width: 96%;
    margin-top: 1.5rem;
    margin-left: 0.3rem;
    border-radius: 0.4rem;
  }

  .van-button {
    line-height: 0;
    height: 1.7rem;
  }

  .one {
    margin-top: 0.4rem;
  }
  .van-popup--center{
    border-radius: .25rem;
    width: 14.05rem;
  }
  .btn{
    width: 100%;
  }
  .tips{
    font-size: 0.7rem;
    color: #333;
    text-align: center;
    margin: 0.8rem 0;
  }
</style>

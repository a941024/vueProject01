<template>
  <div id="profile">
    <van-nav-bar title="我的" left-arrow @click-left="onClickLeft"/>
    <van-cell-group @click="headclick">
      <van-cell class="head">
        <i class="iconfont icon-touxiang-kong via"></i>
        <div class="des">
          <p class="logoIn">登录/注册</p>
          <p class="bd">
            <i class="iconfont icon-shouji1 phoneIcon"></i>
            暂无绑定手机号
          </p>
        </div>
        <van-icon slot="right-icon" name="arrow" class="arrow"/>
      </van-cell>
    </van-cell-group>
    <van-row class="my-raw">
      <van-col span="8" class="my-col">
        <p class="price"><span class="orange big">0.00</span>元</p>
        <p class="my">我的余额</p>
      </van-col>
      <van-col span="8" class="my-col line">
        <p class="price"><span class="red big">0</span>个</p>
        <p class="my">我的红包</p>
      </van-col>
      <van-col span="8" class="my-col line">
        <p class="price"><span class="green big">0</span>分</p>
        <p class="my">我的积分</p>
      </van-col>
    </van-row>
    <van-cell-group class="group-two">
      <van-cell is-link>
        <template slot="title">
          <van-icon name="coupon-o" class="myicon"/>
          <span class="custom-title">我的订单</span>
        </template>
      </van-cell>
      <van-cell is-link>
        <template slot="title">
          <i class="iconfont icon-fenqishangcheng myicon jf"></i>
          <span class="custom-title">积分商城</span>
        </template>
      </van-cell>
      <van-cell is-link>
        <template slot="title">
          <i class="iconfont icon-huiyuanjulebu myicon hy"></i>
          <span class="custom-title">饿了么会员卡</span>
        </template>
      </van-cell>
    </van-cell-group>
    <van-cell-group>
      <van-cell is-link>
        <template slot="title">
          <i class="iconfont icon-fuwu_o myicon fw"></i>
          <span class="custom-title">服务中心</span>
        </template>
      </van-cell>
      <van-cell is-link>
        <template slot="title">
          <i class="iconfont icon-changyonglogo40 myicon xz"></i>
          <span class="custom-title">下载饿了么APP</span>
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
  export default {
    name: "Profile",
    methods: {
      onClickLeft() {
        console.log('返回');
      },
      headclick() {
        console.log("head点击事件触发！");
      }
    }
  }
</script>

<style scoped>
  #profile {
    width: 18.75rem;
    height: 33rem;
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

  .head {
    background: #3190e8;
  }

  @font-face {
    font-family: "iconfont";
    src: url('//at.alicdn.com/t/font_1452142_hlu57xko7us.eot?t=1570869523789'); /* IE9 */
    src: url('//at.alicdn.com/t/font_1452142_hlu57xko7us.eot?t=1570869523789#iefix') format('embedded-opentype'), /* IE6-IE8 */ url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
    url('//at.alicdn.com/t/font_1452142_hlu57xko7us.woff?t=1570869523789') format('woff'),
    url('//at.alicdn.com/t/font_1452142_hlu57xko7us.ttf?t=1570869523789') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */ url('//at.alicdn.com/t/font_1452142_hlu57xko7us.svg?t=1570869523789#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-changyonglogo40:before {
    content: "\e722";
  }

  .icon-fenqishangcheng:before {
    content: "\e737";
  }

  .icon-huiyuanjulebu:before {
    content: "\e73a";
  }

  .icon-touxiang-kong:before {
    content: "\e660";
  }

  .icon-fuwu_o:before {
    content: "\ebbe";
  }

  .icon-shouji1:before {
    content: "\e61c";
  }

  .via {
    font-size: 3rem;
    vertical-align: middle;
    color: #dbdbdb;
    margin: 1rem 0;
    display: inline-flex;
  }

  .des {
    display: inline-flex;
    flex-flow: column;
    vertical-align: middle;
  }

  .logoIn {
    display: flex;
    flex: 1;
    font-weight: 700;
    font-size: 0.95rem;
    color: #fff;
  }

  .bd {
    display: flex;
    flex: 1;
    font-size: 0.7rem;
    color: #fff;
  }

  .phoneIcon {
    font-size: 0.85rem;
    margin-right: 0.2rem;
  }

  .arrow {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    color: white;
  }

  .my-raw {
    text-align: center;
    background-color: white;
  }

  .line {
    border-left: 1px solid #f1f1f1;
  }

  .price {
    font-size: .6rem;
    color: #333;
    padding: .9rem 0 .5rem;
  }

  .my {
    font-size: .65rem;
    color: #666;
    font-weight: 400;
    padding-bottom: .5rem;
  }

  .big {
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1rem;
  }

  .orange {
    color: #f90;
  }

  .red {
    color: #ff5f3e;
  }

  .green {
    color: #6ac20b;
  }

  .group-two {
    margin: .4rem 0;
  }

  .van-cell::after {
    border-bottom: 0.1rem solid #f1f1f1;
  }

  .custom-title {
    font-size: .8rem;
    color: #333;
  }

  .myicon {
    font-size: .7rem;
    margin-right: 0.2rem;
  }

  .jf {
    color: rgb(252, 123, 83);
  }

  .hy {
    color: rgb(255, 198, 54);
  }

  .fw {
    color: rgb(74, 165, 240);
    font-size: 0.9rem;
  }

  .xz {
    background: rgb(74, 165, 240);
    font-size: 0.9rem;
    color: white;
    border-radius: 0.2rem;
  }
</style>

<template>
  <div id="setUNname">
    <van-nav-bar title="修改用户名" left-arrow @click-left="onClickLeft"/>
    <van-field placeholder="输入用户名"/>
    <p id="desc">用户名只能修改一次（5-24字符之间）</p>
    <van-button type="info" size="normal">确认修改</van-button>
  </div>
</template>

<script>
  export default {
    name: "SetUserName",
    methods: {
      onClickLeft() {
        console.log('返回')
      }
    }
  }
</script>

<style scoped>
  #setUNname {
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
  .van-cell,#desc{
    width: 95%;
    margin-left: 0.45rem;
    margin-top: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 0.2rem;
    background: none;
    padding: 0.3rem 0.3rem;
    font-size: 0.7rem;
  }
  #desc{
    font-size: 0.5rem;
    border: 0;
    color: #666666;
  }
  .van-button--info{
    background: #3199e8;
    width: 96%;
    margin-top: 1rem;
    margin-left: 0.3rem;
  }
  .van-button__text{
    color: #fff;
    opacity: 0.6;
  }
</style>

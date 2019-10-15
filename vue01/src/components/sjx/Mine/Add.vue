<template>
  <div id="add">
    <van-nav-bar title="新增地址" left-arrow @click-left="onClickLeft"/>
    <van-cell-group>
      <van-field placeholder="请填写您的姓名"/>
      <van-field placeholder="小区/写字楼/学校等"/>
      <van-field placeholder="请填写详细送餐地址"/>
      <van-field placeholder="请填写能够联系到您的手机号"/>
      <van-field placeholder="备用电话(选填)"/>
    </van-cell-group>
    <van-button type="primary" size="normal">新增地址</van-button>
  </div>
</template>

<script>
  export default {
    name: "Add",
    methods: {
      onClickLeft() {
        console.log('返回');
      }
    }
  }
</script>

<style scoped>
  #add {
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
  .van-cell-group{
    padding: 0.45rem 0;
  }
  .van-cell {
    background-color: #f2f2f2;
    width: 95%;
    margin-top: 0.5rem;
    margin-left: 0.45rem;
    border-radius: 0.2rem;
    border: 1px solid #ddd;
    line-height: 0;
    padding: 0.3rem 0.3rem;
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
  .van-button__text{
    color: #fff;
    opacity: 0.6;
    font-size: 0.7rem;
    font-weight: 600;
  }
</style>

<template>
  <div id="balance">
    <van-nav-bar title="我的余额" left-arrow @click-left="onClickLeft"/>
    <van-cell-group class="group">
      <van-cell class="card">
        <div class="head">
          <p class="money">当前余额</p>
          <div @click="Bstate" class="state">
            <van-icon name="question" class="qicon"/>
            <span>余额说明</span>
          </div>
        </div>
        <p class="contentNum"><span class="price">0.00</span>元</p>
        <van-button type="primary" size="large" disabled class="btn" color="#ccc">提现</van-button>
      </van-cell>
    </van-cell-group>
    <p class="detail">交易明细</p>
    <div class="no">
      <img src="../../../assets/sjx/下载.png" class="img">
      <p class="record">暂无明细记录</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Balance",
    data() {
      return {}
    },
    methods: {
      onClickLeft() {
        console.log('返回');
      },
      Bstate() {
        console.log("余额问题");
      }
    }
  }
</script>

<style scoped>
  #balance {
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

  .group {
    background-color: #3190e8;
    padding: 0.4rem;
  }

  .card {
    border-radius: 0.2rem;
  }

  .head {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }

  .qicon {
    vertical-align: -0.1rem;
    font-size: 0.75rem;
  }

  .money {
    font-size: .65rem;
    color: #666;
  }

  .state {
    color: #3190e8;
    font-size: .65rem;
  }

  .contentNum {
    font-size: 0.7rem;
    color: #333;
    margin-top: 0.6rem;
    margin-bottom: 1rem;
  }

  .price {
    font-size: 2rem;
    margin-right: 0.4rem;
  }

  .btn {
    opacity: 1;
    font-size: 0.95rem;
    border-radius: 0.2rem;
  }
  .detail{
    font-size: .7rem;
    color: #999;
    padding-left: .5rem;
    margin-top: 0.7rem;
  }
  .no{
    text-align: center;
    font-size: 0.8rem;
    color: #666;
    margin-top: 2rem;
  }
  .img{
    width: 9.35rem;
    height: 5.85rem;
  }
  .record{
    margin-top: 0.6rem;
  }
</style>

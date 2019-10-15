<template>
  <div id="balance">
    <van-nav-bar title="我的积分" left-arrow @click-left="onClickLeft"/>
    <van-cell-group class="group">
      <van-cell class="card">
        <div class="head">
          <p class="money">当前积分</p>
          <div @click="Bstate" class="state">
            <van-icon name="question" class="qicon"/>
            <span>积分说明</span>
          </div>
        </div>
        <p class="contentNum"><span class="price">0</span>分</p>
        <van-button type="danger" size="large" class="btn" color="#fe6d47" @click="showPopup">积分兑换商品</van-button>
        <van-popup v-model="show">
          <van-icon name="warning-o" class="warn"/>
          <p class="tips">快去下单赚取大量积分吧</p>
          <van-button type="primary" size="normal" class="btns" @click="showPopup">确定</van-button>
        </van-popup>
      </van-cell>
    </van-cell-group>
    <p class="detail">最近30天积分记录</p>
    <div class="no">
      <img src="../../../assets/sjx/下载.png" class="img">
      <p class="desc">最近30天无积分记录</p>
      <p class="record">快去下单赚取大量积分吧</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Balance",
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
        this.show = !this.show;
      },
      Bstate() {
        console.log("积分说明");
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

  .detail {
    font-size: .7rem;
    color: #999;
    padding-left: .5rem;
    margin-top: 0.7rem;
  }

  .no {
    text-align: center;
    font-size: 0.8rem;
    color: #666;
    margin-top: 2rem;
  }

  .img {
    width: 9.35rem;
    height: 5.85rem;
  }

  .desc {
    margin-top: .6rem;
    font-size: .8rem;
    color: #666;
  }

  .record {
    margin-top: 0.6rem;
    font-size: 0.6rem;
    color: #999;
  }

  .van-popup--center {
    border-radius: .25rem;
    width: 14.05rem;
  }

  .warn {
    color: #f8cb86;
    font-size: 5rem;
    display: inline-block;
    margin-left: 4.5rem;
    margin-top: 1rem;
  }

  .tips {
    font-size: 0.85rem;
    text-align: center;
    margin: 0.8rem 0;
  }

  .btns {
    width: 100%;
    font-size: 1rem;
    font-weight: bold;
    background-color: #4cd964;
  }
</style>

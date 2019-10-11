<template>
  <div id="address">
    <van-nav-bar title="编辑地址" left-arrow @click-left="onClickLeft" right-text="编辑"/>
    <van-cell-group>
      <van-cell title="新增地址" is-link size="large"/>
    </van-cell-group>
  </div>
</template>

<script>
  export default {
    name: "Address",
    methods: {
      onClickLeft() {
        console.log('返回')
      }
    }
  }
</script>

<style scoped>
  #address {
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

  .van-nav-bar__text {
    color: #fff;
  }

  .van-cell-group {
    margin-top: 0.4rem;
    border-top: 1px solid #d9d9d9;
    background-color: #f2f2f2;

  }

  .van-cell {
    margin-top: 0.4rem;
    border-top: 1px solid #d9d9d9;
    border-bottom: 1px solid #d9d9d9;
  }
</style>

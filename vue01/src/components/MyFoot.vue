<template>
    <router-link :to="{}">
      <van-tabbar :v-model="active">
        <van-tabbar-item icon="home-o">
          <span>外卖</span>
          <img
            slot="icon"
            slot-scope="props"
            :src="icon.normal"
          >
        </van-tabbar-item>
        <van-tabbar-item icon="search">搜索</van-tabbar-item>
        <van-tabbar-item icon="coupon-o">订单</van-tabbar-item>
        <van-tabbar-item icon="friends-o">我的</van-tabbar-item>
      </van-tabbar>
    </router-link>

</template>

<script>
    export default {
        name: "MyFoot",
      data() {
        return {
          active: 0,
          icon: {
            normal: require('../assets/bottom11.png'),
          }
        }
      }
    }
</script>

<style scoped>

</style>

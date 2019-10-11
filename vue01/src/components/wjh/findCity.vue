<template>
    <div id="app">
      <div id="header">
        <router-link :to="{path:'/home'}">
          <i class="iconfont icon-right1 txt1" style="font-size: 1rem;margin-top: 0.4rem;color: white;"></i>
        </router-link>
        <span class="span_1">{{cityN}}</span>
        <router-link :to="{path:'/home'}">
          <span class="span_2" style="color: white;">切换城市</span>
        </router-link>

      </div>

      <div id="diZhi">
        <input type="text" placeholder="输入学校、商务楼、地址" class="input_1">
        <!--<van-button type="primary" size="large"></van-button>-->
        <button class="but_1">提交</button>
      </div>

      <div>
        <p>搜索</p>
      </div>
      <div class="div_1"></div>
    </div>
</template>

<script>
    import Title from "vant/es/tabs/Title";

    export default {
        name: "findCity",
      components: {Title},
      data(){
          return {
            cityN:'吴家辉真帅'
          }
        },
    }
</script>

<style scoped>
  #header{
    color: white;
    background-color: #3190e8;
    /*position: fixed;*/
    left: 0;
    top: 0;
    width: 100%;
    height: 2.2rem;
    font-size: 1rem;
  }

  .txt1{
    z-index: 200;
    display: inline-block;
    margin-left: 0.4rem;
  }

  .span_1{
      font-weight: 600;
      margin-left:4.8rem;
      font-size: 0.8rem;
    }

  .span_2{
    margin-left:3rem;
    font-size: 0.8rem;
  }

  #diZhi{
    /*height: 4.3rem;*/
    background-color: #fff;
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    padding:0.4rem 0.8rem;
    margin-top: 0.4rem;
  }
  .input_1{
    width: 15rem;
    font-size: 0.8rem;
    padding-left: 0.8rem;
    margin-bottom: 0.4rem;
    /*border-radius: 0.02rem;*/
  }
  .but_1{
    width: 16rem;
    font-size: 1rem;
    /*padding-left: 0.8rem;*/
    /*margin-bottom: 0.4rem;*/
    /*border-radius: 0.02rem;*/
  }





  @font-face {font-family: "iconfont";
    src: url('//at.alicdn.com/t/font_1368034_74pepc70kqk.eot?t=1570794764889'); /* IE9 */
    src: url('//at.alicdn.com/t/font_1368034_74pepc70kqk.eot?t=1570794764889#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAMgAAsAAAAABwAAAALTAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDBgqBaIFwATYCJAMMCwgABCAFhG0HNxs3BsgOJQkRwQjhhwJgBNmwzd4etbraFMG34lBF4UChEAYLCpTBYjGmO1TX6P9zrfd9IM7MyjuWH5gXsnCUm1w+OSCQDAWyQEK2QrWukv7nmOkSaCD51zaXjHgeCTjBgUXlJdkdyAH5fYjDXpnHCbQbpee1XVrdDIEqa1wgLjSFh8CcX1WFVKvQXLO0ijt+WstN+Yrb8Pfjz0oEUjQla+rheYkE+Z8+LT6jjVHdPoJgPiuEVSSWgUqc1sZP+AgB56Nd7tue26wKZa7Q//+EfF3ZvNN/vEI0s4o7wTwmCp/gsgg+LSsUkKA5Tm4BF4Qd/KRQ+mZDFWVn7GI+VtocjcNbC5dj8SO7Z/MXXl4vL61PH81GzWiy18Frmyx59Wmen1uenqp1qbY27VMzTX195a/2dr9xF9zXVy/fce+8275w59w3WLszQ8tES1Scb83v7Ru/tYy8DupIijK3AEvv1vGNKV9XNQ9NOfvwfBYlyXNwC40HMz/vjCsXGd5RRZ2fV7xsDoW8VW8l7Q39AI39DMqzMHmWf/L4h/+N+4kne19E9n9rRwXv75dDcURjv0KeAWi9HUfwewU9m6ousgxZVb7LN51pZaS1gFzRpQGWu9+P8cqh3sWEVkMpFC1GILWaRlbsMjTpsArNWq1BuyVlqzsMoHxEbcOiKYDQ6xaKbo+Qen1DVux3aDLsFzTrDR9odxQxW3aYDS24iGKeYQkJI0gTiUt2TCw4Km3EyoCDp1lRiG/F1KOFkMVoLqbKsAvTOWZ4BhUrYzKSKXGiUjgNOxwEuSmxYZEZVcbcmSaTXPdNRpE4IdgWCuMxmAQRjEA0IsJF9jszwaWfb4QpBjjwaEtZjb0VRnlo3SMWRuYeyDK5q1fZvbziMUhhxTAyREYRTkgpDMIcHAjEXT/IBhMxRuqIqFsmk91O7is3rq90fkCeUIW1Z0aJjKr5UlNUZvEdIhIGAAA=') format('woff2'),
    url('//at.alicdn.com/t/font_1368034_74pepc70kqk.woff?t=1570794764889') format('woff'),
    url('//at.alicdn.com/t/font_1368034_74pepc70kqk.ttf?t=1570794764889') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('//at.alicdn.com/t/font_1368034_74pepc70kqk.svg?t=1570794764889#iconfont') format('svg'); /* iOS 4.1- */
  }
  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .icon-right1:before {
    content: "\e600";
  }
  .icon-wode:before {
    content: "\e631";
  }

</style>

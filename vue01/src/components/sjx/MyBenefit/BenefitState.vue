<template>
  <div id="state">
    <van-nav-bar title="积分问题" left-arrow @click-left="onClickLeft"/>
    <template v-for="v in NewArr">
      <div class="content">
        <p class="question">{{v[0]}}?</p>
        <p class="answer">{{v[1]}}</p>
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    name: "BalanceState",
    data() {
      return {
        QandA: [],
        NewArr: [],
      }
    },
    methods: {
      onClickLeft() {
        console.log('返回');
      }
    },
    created() {
      this.myHttp.get("/v3/profile/explain", (data) => {
          console.log(data);
          this.QandA = data.hongbaoContent.split("###");
          console.log(this.QandA);
          for (let i = 1; i < this.QandA.length; i++) {
            this.NewArr.push(this.QandA[i].split("？"));
          }
        }
      )
    }
  }
</script>

<style scoped>
  #state {
    width: 18.75rem;
    height: 33rem;
    background: #fff;
    overflow: auto;
  }

  .van-nav-bar {
    background-color: #3190e8;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
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

  .content {
    padding: 0 .5rem .5rem;
    margin-top: 2.5rem;
  }

  .question {
    font-size: 0.85rem;
    line-height: 2rem;
    color: #333;
  }

  .answer {
    line-height: 1rem;
    color: #666;
    font-size: .7rem;
  }
</style>

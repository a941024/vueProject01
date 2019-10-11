<template>
    <div id="restaurant">
      <van-card
        desc="商家配送/分钟送达/配送费￥5"
        :title="data1.name"
        :thumb="'//elm.cangdu.org/img/'+data1.image_path"
      >
        <div slot="tags">
          <span>公告:{{data1.promotion_info}}</span>
        </div>
      </van-card>

      <van-tabs v-model="active" sticky>
        <van-tab v-for="index in 2" :title="'选项 ' + index">
          内容 {{ index }}
        </van-tab>
      </van-tabs>
    </div>
</template>

<script>
    export default {
        name: "Restaurant",

      data(){
          return {
            pId:"",
            data1:[],
            active:0
          }
      },
      created(){
        this.pId = this.$route.query.pId;
        this.axios.get("https://elm.cangdu.org/shopping/restaurant/"+this.pId).then((res)=>{

          this.data1 = res.data;
          console.log(this.data1);
        }).catch((err)=>{
          console.log(err);
        })
      },
    }
</script>

<style scoped>
  .van-card__title{
    font-size: 20px;
    font-weight: 800;
    margin: 10px 0;
  }
</style>

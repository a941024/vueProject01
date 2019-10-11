<template>
  <div id="div1">
    <!--导航栏-->
    <van-nav-bar title="标题">
      <van-icon name="search" slot="left" />
    </van-nav-bar>
    <!--轮播区域-->
    <van-swipe  indicator-color="#1989fa	">
      <van-swipe-item >
        <van-grid :column-num="4" >
          <van-grid-item
            v-for="(item,value) in data1"
            :key="value"
            :icon="'//fuss10.elemecdn.com'+item.image_url"
            :text="item.title"
          />
        </van-grid>
      </van-swipe-item>
      <van-swipe-item >
        <van-grid :column-num="4" >
          <van-grid-item
            v-for="(item,value) in data2"
            :key="value"
            :icon="'//fuss10.elemecdn.com'+item.image_url"
            :text="item.title"
          />
        </van-grid>
      </van-swipe-item>

    </van-swipe>
    <!--商家-->
    <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
      附近商家
    </van-divider>
    <!--商家列表-->

    <van-grid :border="false" :column-num="3" v-for="(v,index) in shop" :key="index" class="merchant van-hairline--bottom van-ellipsis" >
      <div class="shop" >
      <van-grid-item :to="{path:'/Restaurant',query:{pId:v.id}}">
        <van-image :src="'//elm.cangdu.org/img/'+v.image_path" />
      </van-grid-item>
      </div>
      <div class="div1">
      <van-skeleton
        title
        avatar
        :row="2"
        :loading="loading"
      >
          <h3>{{v.name}}</h3>
          <van-rate
            :readonly="true"
            v-model="v.rating"
            :size="10"
            color="#ffd21e"
            void-icon="star"
            void-color="#eee"

          /><span>{{v.rating}}</span><span class="month">月售{{v.recent_order_num}}单</span>
          <p>￥{{v.float_minimum_order_amount}}起送/{{v.piecewise_agent_fee.tips}}</p>

      </van-skeleton>
  </div>
        <div class="div2">
          <van-grid-item>
          <p>
            <van-tag plain>{{v.supports[0].icon_name}}</van-tag>
          <van-tag plain>{{v.supports[1].icon_name}}</van-tag>
          <van-tag plain v-text="v.supports[2] ? v.supports[2].icon_name : ''" v-if="v.supports[2] ? true : false"></van-tag>
        </p>
          <p class="shop1">
            <van-tag type="primary">{{v.delivery_mode.text}}</van-tag>
            <van-tag plain type="primary">{{v.supports[1].name}}</van-tag> </p>
          <p>{{v.distance}}/{{v.order_lead_time}}</p>
          </van-grid-item>
        </div>

    </van-grid>

  </div>

</template>

<script>
    export default {
        name: "TakeOut",
      data() {
        return {
          loading: true,
          data1:[],
          data2:[],
          shop:[],
          shopId:""
        }
      },
      mounted() {
        this.loading = false;
      },
      methods: {
        onClickLeft() {
          Toast('按钮');
        },
      },
      created(){
        this.axios.get("https://elm.cangdu.org/v2/index_entry").then((res)=>{
          for (let i=0;i<res.data.length;i++){
            if (i<res.data.length/2){
              this.data1.push(res.data[i])
            }else {
              this.data2.push(res.data[i])
            }
          }
          console.log(this.data1,this.data2)

        }).catch((err)=>{
          console.log(err);
        });
        this.axios.get("https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762").then((res)=>{
          console.log(res);
          this.shop = res.data;

          // console.log(this.shop);
        }).catch((err)=>{
          console.log(err);
        })
      },
      // methods:{
      //   changeRouter(){
      //     this.$router.push({path:"/Restaurant",query:{pId:'v.id'}});
      //   }
      // }
    }
</script>

<style scoped>
  html,body{
    font-size: 20px;
    width: 100%;
    height: 100%;
  }
  .month{
    margin-left: 0.5rem;
  }
  .merchant{
    background-color: white;
  }

  .van-nav-bar{
    background-color: #3190e8;
  }
  .van-nav-bar__title {
    color: whitesmoke;
    font-weight: bold;
    font-size: 0.9rem;
  }
  .shop{
    width: 25%;
  }
  .div1{
    width: 40%;
    margin-top: 20px;
  }
  .van-grid span,
  .van-grid p{
    font-size: 10px;
    margin-top: 5px;
  }
  .div2{
    width: 35%;
    text-align: right;
  }
  .shop1{
    margin:10px 0 10px 0;
  }

</style>

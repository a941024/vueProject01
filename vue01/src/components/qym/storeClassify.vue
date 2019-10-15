<template>
    <div id="store">
      <!--头-->
      <van-nav-bar :title="title" left-arrow @click-left="onClickLeft"/>
      <!--下拉菜单-->
      <van-dropdown-menu>
        <van-dropdown-item title="分类" >
          <van-tree-select
            height="1000rem"
            :items="name"
            :main-active-index.sync="activeIndex"
          >
            <template slot="content" v-for="(i,index) in allShopC">
                <div v-if="activeIndex === 0">
                  <span>{{i.sub_categories.length>9? i.sub_categories[index+1].name:''}}</span>
                  <span>{{i.sub_categories.length>9? i.sub_categories[index+1].count:''}}</span>
                </div>
            </template>
          </van-tree-select>
        </van-dropdown-item>
        <van-dropdown-item title="排序" v-model="value" :options="name1">
        </van-dropdown-item>
        <van-dropdown-item title="筛选">
          <van-checkbox-group v-model="result">
              <div>配送方式</div>
              <van-button type="default">
                <van-checkbox name="a">
                蜂鸟快送
                </van-checkbox>
              </van-button>
            <div>商家属性（可以多选）</div>
            <van-button type="default" >
              <van-checkbox name="0">品牌商家</van-checkbox>
            </van-button>
            <van-button type="default" ><van-checkbox name="1">外卖保&nbsp;&nbsp;&nbsp;&nbsp;</van-checkbox></van-button>
            <van-button type="default" ><van-checkbox name="2">准时达</van-checkbox></van-button>
            <van-button type="default" ><van-checkbox name="3">新店&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</van-checkbox></van-button>
            <van-button type="default" ><van-checkbox name="4">在线支付</van-checkbox></van-button>
            <van-button type="default" ><van-checkbox name="5">开发票</van-checkbox></van-button>
          </van-checkbox-group>
        </van-dropdown-item>
      </van-dropdown-menu>

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
              <van-tag plain :color="v.supports[2] ? 'gray' : 'transparent'">{{v.supports[2] ? v.supports[2].icon_name : ''}}</van-tag>
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
        name: "storeClassify",
      data() {
        return {
          loading: true,
          shop:[],
          title:"",
          allShopC:[],
          name:[],
          value:0,
          result: ['a', 'b'],
          name1:[
            {text:"智能排序",value:0},
            {text:"距离最近",value:1},
            {text:"销量最高",value:2},
            {text:"起送价最低",value:3},
            {text:"配送速度最快",value:4},
            {text:"评分最高",value:5},

            ],
          activeIndex: 0,
        }
      },
      mounted() {
        this.loading = false;
      },
      methods: {
        onClickLeft() {
          console.log(123);
        },
      },
      created(){
          this.title=this.$route.query.title;
        this.axios.get("https://elm.cangdu.org/v2/index_entry").then((res)=>{
          for (let i=0;i<res.data.length;i++){
            if (i<res.data.length/2){
              this.data1.push(res.data[i])
            }else {
              this.data2.push(res.data[i])
            }
          }
        }).catch((err)=>{
          console.log(err);
        });
        this.axios.get("https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762").then((res)=>{
          this.shop = res.data;
        }).catch((err)=>{
          console.log(err);
        });
        this.axios.get("https://elm.cangdu.org/shopping/v2/restaurant/category").then((res)=>{
          this.allShopC = res.data;
          for (let i = 0; i<this.allShopC.length;i++){
            this.name.push({text:this.allShopC[i].name+(this.allShopC[i].count)});
            // this.name.push({children:[{text:this.allShopC[i].sub_categories[i+1].name}]})
          }
          console.log(this.allShopC);

        }).catch((err)=>{
          console.log(err);
        })
      },
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

<template>
    <div id="restaurant">
      <router-link :to="{path:'/Particulars',query:{num:pId}}">
      <van-card
        desc="商家配送/分钟送达/配送费￥5"
        :title="data1.name"
        :thumb="'//elm.cangdu.org/img/'+data1.image_path"

      >
        <div slot="tags">
          <span>公告:{{data1.promotion_info}}</span>
        </div>

      </van-card>
      </router-link>
      <!--上部导航栏-->
      <van-tabs v-model="active" @click="show1=true">
        <van-tab title="商品">
          <!--左侧导航栏-->
          <div class="res1">
          <van-sidebar v-model="activeKey" >
            <van-sidebar-item :title="i.name" v-for="(i,num) in sId" :key="num" @click="skip" :href="'#a'+num"/>
          </van-sidebar>
          </div>
          <!--右侧食物列表-->
          <div class="res">
          <div class="res2" :id="'a'+num" v-for="(i,num) in sId" :key="num">
            <van-panel :title="i.name" :desc="i.description" status="...">
              <div v-for="(item,index) in sIdFoods[num]" :key="index">

                <van-card
                  :price="item.specfoods.length > 0 ?  item.specfoods[0].price:''"
                  :title="item.name"
                  :thumb="'//elm.cangdu.org/img/'+item.image_path"
                >
                  <div slot="desc">
                    <p>{{item.description}}</p>
                    <p>{{item.tips}}</p>
                  </div>
                  <div slot="tags">
                    <van-tag plain type="danger" :color="item.activity ? 'red' : 'transparent'">{{item.activity != null  ? item.activity.image_text : ''}}</van-tag>
                  </div>
                  <div slot="footer">
                    <van-tag round type="primary" @click="addNum($event, item.item_id)">
                      {{item.specifications.length > 0 && item.specifications[0].name !=undefined ?  "选"+ item.specifications[0].name :'+' }}
                    </van-tag>
                    <!--规格显隐(未实现)-->
                    <!--<van-popup v-model="item.item_id == show"  closeable>-->
                      <!--<h5>{{item.specfoods[0].name}}</h5>-->
                    <!--</van-popup>-->
                  </div>
                </van-card>
              </div>
            </van-panel>
          </div>
          </div>
        </van-tab>
        <!--评论页-->
        <van-tab title="评论">
          <div id="div2" v-if="show1">
          <van-row>
            <van-col span="12">
              <h3>{{score.service_score}}</h3>
              <p>综合评价</p>
              <span>高于周边商家{{(score.compare_rating*100)}}%</span>
            </van-col>
            <van-col span="12">
              <div>
                <span>服务态度</span>
                <van-rate
                  v-model="score.service_score-0"
                  void-icon="star"
                  void-color="#eee"
                  :allow-half=true
                  size="10px"
                />
                <span>{{score.service_score}}</span>
              </div>
              <div>
                <span>菜品评价</span>
                <van-rate
                  v-model="score.food_score-0"
                  void-icon="star"
                  void-color="#eee"
                  :allow-half=true
                  size="10px"
                />
                <span>{{score.food_score}}</span>
              </div>
              <div>
                <span>送达时间</span>
                <span>{{score.deliver_time}}分钟</span>
              </div>
            </van-col>
          </van-row>
          </div>
        </van-tab >
        <div id="eval" v-if="show1">
          <van-tag color="cyan" size="large " v-for="(i,index) in evaluate" @click="color='blue'" style="margin: 0 3px">{{i.name}}({{i.count}})</van-tag>

          <van-card
            v-for="(i,index) in detail"
            :key="index"
            :thumb="i.avatar != '' ? 'https://fuss10.elemecdn.com/'+i.avatar+'.jpeg' : '//elm.cangdu.org/img/default.jpg'"
          >
            <div slot="desc" >
              <p>{{i.username}}</p>
              <van-rate
                v-model="i.rating_star-0"
                void-icon="star"
                void-color="#eee"
                :allow-half=true
                size="10px"
              />
              <div id="deat">
                <img :src="i.item_ratings.length>0 && i.item_ratings[0].image_hash!=undefined  ?  ('https://fuss10.elemecdn.com/'+i.item_ratings[0].image_hash+'.jpeg'):'' ">
                <img :src="i.item_ratings.length>1 ?  'https://fuss10.elemecdn.com/'+i.item_ratings[1].image_hash+'.jpeg':'' ">
              </div>
            </div>
            <div slot="tags">
              <van-tag plain :color="i.item_ratings.length>0 ? 'grey':'transparent'">{{i.item_ratings.length>0 ? i.item_ratings[0].food_name:''}}</van-tag>
              <van-tag plain  :color="i.item_ratings.length>1 ? 'grey':'transparent'">{{i.item_ratings.length>1 ? i.item_ratings[1].food_name:''}}</van-tag>
            </div>
          </van-card>
        </div>
      </van-tabs>

      <van-tabbar v-model="num">
        <van-tabbar-item icon="shopping-cart-o"></van-tabbar-item>
        <van-tabbar-item>配送费￥5</van-tabbar-item>
        <van-tabbar-item :to="{path:''}"><h2>还差20起送</h2></van-tabbar-item>
      </van-tabbar>
    </div>
</template>

<script>
    export default {
        name: "Restaurant",

      data(){
          return {
            pId:"",
            data1:[],
            active:0,
            activeKey: 0,
            sId:[],
            sIdFoods:[],
            value: 1,
            num:1,
            evaluate:[],
            score:[],
            detail:[],
            show: "",
            show1:false,
            show2:false
          }
      },
      methods:{
          addNum(event, id){
            console.log(event, id);
            if (event.srcElement.innerText == "选规格"){
              this.show = id;
            } else {
              console.log(2);

            }
          },
        skip(index){
          console.log(index);
        },
        abc(i) {

          console.log("a"+i);
        }

      },
      created(){
        this.pId = this.$route.query.pId;
        this.axios.get("https://elm.cangdu.org/shopping/restaurant/"+this.pId).then((res)=>{
          this.data1 = res.data;
        }).catch((err)=>{
          console.log(err);
        });
        this.axios.get("https://elm.cangdu.org/shopping/v2/menu?restaurant_id="+this.pId).then((res)=>{

          this.sId=res.data
          for (let i=0;i<this.sId.length;i++){
            if (!this.sId[i].foods) {
              continue;
            }
            this.sIdFoods.push(this.sId[i].foods)

          }
          console.log(this.sIdFoods[0][0].specfoods[0].name)
        }).catch((err)=>{
          console.log(err);
        });
        this.axios.get("https://elm.cangdu.org/ugc/v2/restaurants/"+this.pId+"/ratings/tags").then((res)=>{
          this.evaluate = res.data;
        }).catch((err)=>{
          console.log(err);
        });
        this.axios.get("https://elm.cangdu.org/ugc/v2/restaurants/"+this.pId+"/ratings/scores").then((res)=>{
          // this.score = res.data;
          let keys = Object.keys(res.data);
          for (let i = 0; i < keys.length; i++) {
            res.data[keys[i]] = (res.data[keys[i]]-0).toFixed(1);
          }
          this.score = res.data;
        }).catch((err)=>{
          console.log(err);
        });
        this.axios.get("https://elm.cangdu.org/ugc/v2/restaurants/"+this.pId+"/ratings").then((res)=>{
          this.detail=res.data;
          // console.log(this.detail);
        }).catch((err)=>{
          console.log(err);
        })
      },

    }
</script>

<style scoped>

  html,body{
    width: 100%;
    height: 100%;
    font-size: 20px;
  }
  .van-card__title{
    font-size: 17px;
    font-weight: 600;
    margin: 10px 0;
  }
  .res1{
    display: inline-block;
    width: 22%;
    float: left;
    height: 100%;
  }
  .res{
    display: inline-block;
    width: 77%;
    height: 35rem;
    float: right;
    overflow: scroll;
  }
  .van-cell{
    font-size: 12px;
  }
  .van-icon{
    border: 1px solid blue;
  }
#div2{
  font-size: 0.5rem;
  background-color: white;
}
  .van-col{
    text-align: center;
  }
  #eval{
    background-color: white;
    margin-top: 10px;
  }
#deat{
  width: 50%;
}
  #deat img{
    width: 50%;
    float: left;
  }


</style>

<template>
    <div id="app">
      <div id="header">
        <van-nav-bar
          :title="name"
          right-text="切换城市"
          left-arrow
          @click-left="onClickLeft"
          @click-right="onClickRight"
        />
      </div>

      <div id="diZhi">
        <van-cell-group>
          <van-field
            v-model="huoQu"
            center
            clearable
            placeholder="输入学校、商务楼、地址"
            @click-right-icon="noFind"/>
        </van-cell-group>
        <van-button type="primary" size="large" @click="goToFind()">提交</van-button>
      </div>

      <div id="shangP">
        <ul></ul>
        <p class="p_1">搜索历史</p>
        <nav>{{getcity}}</nav>
        <ul></ul>
        <van-cell title="很抱歉!无搜索结果" size="large"  style="margin: 0 ;display: none"/>
        <div v-for="(v,index) in findS" :key="index">
          <van-cell :title="v.name" size="large" :label="v.address" style="margin: 0"/>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
      name: "findCity",
      computed:{
        getcity(){
          return this.name= this.$route.query.name,this.id=this.$route.query.id;
        }
      },
      data(){
          return {
            isIf1:false,
            isIf2:true,
            findS:[],
            searchS:[],
            huoQu:'',
            name:"",
            id:""
          }
        },
      methods:{
        onClickLeft(){
          this.$router.push({path:'/home'});
        },
        onClickRight(){
          this.$router.push({path:'/home'});
        },
        goToFind(){
          this.axios.get(`https://elm.cangdu.org/v1/pois?type=search&city_id=${this.id}&keyword=${this.huoQu}`
          ).then((response) => {
            this.findS = response.data;
            console.log(this.findS);
          });
        },
        noFind(){
          this.searchS.push(this.huoQu);
          console.log(this.searchS);
        }
      }
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

  .van-nav-bar{
    background: #3190e8;
    color: white;
  }
  .van-icon-arrow-left {
    color: white;
    font-size: 1.2rem;
  }
  .van-nav-bar__title{
    color: white;
    font-size: 0.9rem;
    font-weight: 600;
  }
  .van-nav-bar__text{
    color: white;
  }
  .van-cell{
    border: 1px solid #e4e4e4;
    padding: 0.2rem 0.4rem;
    font-size: 0.8rem;
    color: #333;
    /*height: 2rem;*/
    margin-bottom: 0.5rem;
  }
  .van-button{
    background-color: #3190e8;
    height: 1.6rem;
    line-height: 0;
    /*position: relative;*/
  }
  .van-nav-bar__text:hover{
    background: #3190e8;
  }

  #diZhi{
    /*height: 4.3rem;*/
    background-color: #fff;
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    padding:0.5rem 1rem;
    margin-top: 0.5rem;
  }
  .p_1{
    font-size: 0.6rem;
    padding-left: 0.7rem;
  }
  nav{
    display: none;
  }
  ul{
    width: 100%;
    height: 0.1rem;
    background: rgba(0,0,0,0.3);
  }



</style>

<template>
  <div id="app">
    <div id="head">
      <router-link :to="{path:'/home'}">
        <span id="head_01" style="color: white">ele.me</span>
      </router-link>
      <router-link :to="{path:'/logIn'}">
        <i id="head_02" style="color: white;font-size: 1.2rem" class="iconfont icon-wode"></i>
      </router-link>
    </div>

    <div id="guess" class="mgin">
      <div class="van1">
        <span id="span1">当前定位城市</span>
        <span id="span2">定位不准时,请在商品列表中选择</span>
      </div>
      <van-cell title=" " is-link/>
    </div>

    <div class="mgin">
      <van-cell value="热门城市" />
      <van-row>
        <van-col span="6" class="van2"  v-for="(a,b) in hotCity" :key="b">
          <router-link :to="{path:'/findCity'}" style="line-height: 2rem;color: #3190e8; font-size: 0.7rem">
            {{a.name}}
          </router-link>
        </van-col>
      </van-row>
    </div>


      <div class="mgin"  v-for="(v,i) in cityS" :key="i">
        <h2 class="h_1">{{v}}</h2>
        <van-row>
          <van-col span="6" class="van2 van-ellipsis" v-for="(x,y) in ziMu[v]" :to="{path:'/findCity',query:x}" :key="y">
            <router-link :to="{path:'/findCity'}" style="line-height: 2rem;color: rgba(0,0,0,0.7);font-size: 0.6rem">
              {{x.name}}
            </router-link>
          </van-col>
        </van-row>
      </div>
  </div>
</template>

<script>

  export default {
    name: "home",
    data(){
      return {
        hotCity:[],
        cityS:[],
        ziMu:[]
      }
    },
    created(){
      //    发起网络请求
      this.axios.get("https://elm.cangdu.org/v1/cities?type=hot").then((response) => {
        this.hotCity=response.data;
        console.log(this.hotCity);
      });
      this.axios.get("https://elm.cangdu.org/v1/cities?type=group").then((response) => {
        let cityS = [];
        this.ziMu = response.data;
        for (let v in response.data) {
          cityS.push(v)
        }
        cityS.sort();
        this.cityS = cityS;
      });
    }
  }
</script>

<style scoped>
  /*@import 'http://at.alicdn.com/t/font_1368034_uj0sh6yt57p.css';*/
  /*@import 'http://at.alicdn.com/t/font_1368034_uj0sh6yt57p.js';*/

  .van1{
    border-bottom: 1px solid rgba(0,0,0,0.3);
    background: white;
    line-height: 2rem;
  }

  .van2{
    border: 1px solid rgba(0,0,0,0.1);
    text-align: center;
    background: white;
  }

  #head{
    background: #3190e8;
    width: 100%;
    height: 1.95rem;
    /*clear: both;*/
    color: white;
  }

  #head_01{
    display: block;
    float: left;
    padding-left: 1rem;
    padding-top: 0.45rem;
  }

  #head_02{
    display: block;
    float: right;
    padding-right: 1rem;
    padding-top: 0.45rem;
  }

  #span1{
    font-size: 0.8rem;
    color: rgba(0,0,0,0.8);
    margin-left: 0.9rem;
  }

  #span2{
    font-size: 0.6rem;
    color: rgba(0,0,0,0.6);
    margin-left: 2.2rem;
  }
  .mgin{
    margin-bottom: 0.6rem;
  }
  .h_1{
    background: white;
    padding-left: 0.7rem;
  }
  @font-face {font-family: "iconfont";
    src: url('//at.alicdn.com/t/font_1368034_uj0sh6yt57p.eot?t=1570786407437'); /* IE9 */
    src: url('//at.alicdn.com/t/font_1368034_uj0sh6yt57p.eot?t=1570786407437#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAQ8AAsAAAAACJAAAAPuAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqEMINyATYCJAMUCwwABCAFhG0HSBt+B1GULkqe7AtsG/a0gawsM0QRolWGgJMRZwig8AIRAMC6ARAPffvxu7Oz+76IJDHEup9OIpFJP+GhkiiF0qFUQlmsi76hvGy2JoOKKUCcFBz41Q/c1KUeqMSj5gKNDBPuriPrHVJOUQrbj81J1PhWZJX19z/HUi+fH1j+azuXyrBuwBM8sMxliow3mk3UN4xdXMbVBKbt00B7cPfyDkOVtigQF5EdDGN6tQQXJlVDzs78E+2ayfKmPMRb9+fjmxsxpGhJW/nwyW0CF13Xzck48dhGEPRnBbOPxCVAJZ7m2i90/Pgl9KalaNcdIP9uUlG6ztsVuu44AsQrUk7r//AoQqrEQEufBXdQotKByaLQeVkEXYFF0nWFN+Y6DUxjwDt8R9gDeez4aWVTh09EiUN43FKFGrbYeFyuCnNN2/gTRW5o/n5NaTiJkBRKUQQ8068A4dD8uOjCjTmFzg0J5b49ieMQTsDEJ/RoSGv1FsejB1fFersF9k2mRVc0B5SX1JeKYubLVWMXms4q1BDuOYg/VeJCl9Y2FvTPNy7SaCSJ4B8hUB6JitEmKZSXUIiGIGAc99BJJJZpcQgVUlQyn7W1nIGcJYGd3OfPsXF9I/1xzOPhrwc4jJl+MlYFUgviWbXwNnMfszwTdrG0Zgj2UEswj7fc2Pi3p/6jnEfZLEiaYWa8U7bnT8Eb7rPVs6T7nvl5FaS4SDaiAqhPrLenohf/4ku1VMJoPfrzn6OOh7vVLzbawYa+IIoYGBugqL1xPcr99KnzKWKGPO1EUgN0NrBu1wGwLMwryOD5vXeVsYOe5581UJSXPwHo8vTMrGrbqLs3gjf6+t3dektCTznwBPDqWvd1XattUZqOtx3f2GgSh85BoXZ8m0MHvKY9Kz8kMMpPmQKM56vcBGAs/yf6H/yNyzfExMLnT35Mslfw8bZg1zeqoB3/ZSrUFrx1Qc2eKos0Q6si3zTkZ7dMoLnXA88WvOCad+1e9r4f5VrtdMKktRCKCXuQJh0gK/YSNDNuwWDSbZh2znn/jBWZOqJO4UwNgLBoDYp57yEteoSs2HfQrPsGg8XowLRHsXzijKOIU9dKzijBrz+MXspgmGzKy3wlbnKnUZGL/yStYwgPtHSSqXsqSftYU3/zoVnAoFLgHbge5blgpZKSt92xWXW0p43lfdKulwKm3KeIY0gCRfmDEniiFOzhZir1/a8Ia+QcLWkosX8iqhZHR7q06NRA3svLWg3nMj7LN3Yomwl4HkaJAnKCVpLrcYHS86eliGd2xbeIVo5oo0FYXfnu+MriAvKYFrSPalEio0aLQXs2diX3ilgbDdLoSpOm+yMJAQAAAA==') format('woff2'),
    url('//at.alicdn.com/t/font_1368034_uj0sh6yt57p.woff?t=1570786407437') format('woff'),
    url('//at.alicdn.com/t/font_1368034_uj0sh6yt57p.ttf?t=1570786407437') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('//at.alicdn.com/t/font_1368034_uj0sh6yt57p.svg?t=1570786407437#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-wode:before {
    content: "\e631";
  }
  .icon-right1:before {
    content: "\e600";
  }
</style>

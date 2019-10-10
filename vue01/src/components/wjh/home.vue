<template>
  <div id="home">
    <ul>
      <li>1楼: 吴家辉真帅!</li>
      <li>2楼: 一楼说的对!</li>
      <li>3楼: 三楼表示赞同</li>
    </ul>
    <img src="../../assets/wjh/wjh_girl.jpg" height="400" width="600"/>
  </div>

</template>

<script>
    export default {
        name: "home"
    }
</script>

<style scoped>
#home{
  width: 100%;
  height: 60%;
  background: blueviolet;
  list-style: none;
}
  ul{
    font-size: 20px;
    padding-top: 5px;
    padding-left:50px;
  }
  img{
    margin-top: 5px;
    margin-left:50px;
  }
</style>

<template>
  <div id="header">
    <router-link :to="{path:'/home'}">主页</router-link>
    <router-link :to="{path: '/pageOne'}">页面一</router-link>
    <router-link :to="{path:'/yim'}">页面二</router-link>
  </div>

</template>

<script>
    export default {
        name: "MyHeader"
    }
</script>

<style scoped>
#header{
  width: 100%;
  height:20%;
  background: aqua;
}
</style>

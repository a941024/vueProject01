<template>
  <div id="app">
    <MyHeader></MyHeader>
    <router-view/>
    <MyFotter></MyFotter>
  </div>
</template>

<script>

import MyHeader from "./components/MyHeader";
import MyFotter from "./components/MyFotter";
export default {
  name: 'App',
  components: {MyFotter, MyHeader}
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
  }
  html,body,#app{
    width: 100%;
    height: 100%;
  }
</style>

<template>
  <div id="app">
    <router-view/>
    <!--<MyFoot></MyFoot>-->
  </div>
</template>

<script>

// import MyFoot from "./components/MyFoot";
export default {
  name: 'App',
  // components: {MyFoot}
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
  }
  html,
  body {
    width: 100%;
    height: 100%;
    font-size: 20px;
    background-color: #f2f2f2;
  }
</style>

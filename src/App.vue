<template>
  <div id="app">
    <router-view class="main" />
    <router-view class="left" name="title"></router-view>
    <router-view class="right" name="image"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  text-align: center;;
}
.left,.right{
  width: 40%;
  display: inline-block; 
  border: 1px solid #e6e6e6;
}
</style>

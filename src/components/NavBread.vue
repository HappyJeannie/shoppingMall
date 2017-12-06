<template>
  <div>
    <div class="nav-breadcrumb-wrap">
      <div class="container">
        <nav class="nav-breadcrumb">
          <a href="/">Home</a>
          <!-- 以下Goods会随着页面变化而改变值，即此处应为动态数据，所以预留插槽 -->
          <!-- <span>Goods</span> -->
          <slot></slot>
        </nav>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- 此页面的style最好删除，不然在打包发布的时候会在页面生成空的style标签 
<style scoped>


</style>-->

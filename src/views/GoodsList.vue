<template>
  <div>
    这是商品列表页面
    <div>{{$route.params.goodsId}}</div>
    <div>{{$route.params.name}}</div>
    <router-link to="title">商品标题</router-link>
    <router-link to="image">商品图片</router-link>
    <div>
      <router-view></router-view>
    </div>
    <router-link to="/cart">购物车</router-link>
    <button @click="jump">到购物车</button>
    <router-link :to="{name:'cart',params:{a:123}}">名称跳转</router-link>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    jump(){
      //this.$router.push('/cart');
      /*this.$router.push({
        path:"/cart"
      });*/
      this.$router.push({
        path:"/cart?a=123"
      });
    }
  }
}
</script>

<style>

</style>

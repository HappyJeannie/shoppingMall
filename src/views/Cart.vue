<template>
  <div>
   	这个是购物车页面
   	<span>{{$route.query.a}}</span>
   	<button @click="back">后退</button>
   	<span>{{$route.params.a}}</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods:{
  	back(){
  		this.$router.go(-1);
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	
</style>

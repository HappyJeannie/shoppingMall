<template>
  <div>
   	<button @click="increment">+</button>
   	<button @click="decrement">-</button>
   	<p><span>{{num}}</span></p>
  </div>
</template>

<script>
export default {
  data () {
    return {
    	num:0
    }
  },
  methods:{
  	increment(){
  		this.num++;
  		import('./../router/index');
  	},
  	decrement(){
  		this.num--;
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

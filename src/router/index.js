import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GoodsList from '@/views/GoodsList'
import Title from '@/views/Title'
import Image from '@/views/Image'
import Cart from '@/views/Cart'
import Count from '@/views/Counter'

Vue.use(Router)
console.log('router');

export default new Router({
  routes: [
    // {
    //   path: '/goods',
    //   name: 'GoodsList',
    //   component: GoodsList,
    //   children:[
    //   	{
    //   		path:"title",
    //   		name:"title",
    //   		component:Title
    //   	},
    //   	{
    //   		path:"image",
    //   		name:"image",
    //   		component:Image
    //   	}
    //   ]
    // },
    {
    	path:'/',
    	name:'GoodsList',
    	components : {
    		default : GoodsList,
    		title : Title,
    		image : Image
    	}
    },
    {
    	path:"/cart",
    	name:"cart",
    	component:Cart
    },
    {
    	path:"/count",
    	name:"count",
    	component:Count
    }
  ]
})
//编程式路由，即通过js来实现页面的跳转
//$router.puch("name");
//$router.push({path:"name"});
//$router.push({path:"name?a=123"});或者$router.push({path:"name",query:{a:123}});
//$router.go(1)   此种方法需要使用history模式

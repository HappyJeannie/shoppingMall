<template>
  <!--  <div>
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
  </div> -->
  <div>
    <!-- 引入组件都必须是小写，如果原来是驼峰写法，则改成短横线相连 -->
    <nav-header></nav-header>
    <nav-bread>
      <span>Goods</span>
    </nav-bread>
    <div class="accessory-result-page accessory-page">
      <div class="container">
        <div class="filter-nav">
          <span class="sortby">Sort by:</span>
          <a href="javascript:void(0)" class="default cur">Default</a>
          <a href="javascript:void(0)" class="price">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
          <a href="javascript:void(0)" class="filterby stopPop" @click="showFilterPop">Filter by</a>
        </div>
        <div class="accessory-result">
          <!-- filter -->
          <div class="filter stopPop" id="filter" :class="{'filterby-show':filterBy}">
            <dl class="filter-price">
              <dt>Price:</dt>
              <dd @click="priceChecked = 'all'"><a href="javascript:void(0)" :class="{'cur':priceChecked =='all'}">All</a></dd>
              <dd v-for="(price,index) in priceFilter" @click="setPriceFilter(index)">
                <a href="javascript:void(0)" :class="{'cur':priceChecked == index }">{{price.startPrice}} - {{price.endPrice}}</a>
              </dd>
            </dl>
          </div>
          <!-- search result accessories list -->
          <div class="accessory-list-wrap">
            <div class="accessory-list col-4">
              <ul>
                <li v-for="(item,index) in goodsList">
                  <div class="pic">
                    <a href="#"><img v-lazy="'/static/'+ item.productImg" alt=""></a>
                  </div>
                  <div class="main">
                    <div class="name">{{item.productName}}</div>
                    <div class="price">{{item.productPrice}}</div>
                    <div class="btn-area">
                      <a href="javascript:;" class="btn btn--m">加入购物车</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="md-overlay" v-show="overLayFlag" @click="colsePop"></div>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import './../assets/css/base.css';
import './../assets/css/product.css';
import './../assets/css/login.css';
import './../assets/css/checkout.css';
import NavHeader from '@/components/NavHeader.vue';
import NavFooter from '@/components/NavFooter.vue';
import NavBread from '@/components/NavBread.vue';
import axios from 'axios';
export default {
  data() {
    return {
      goodsList:[],
      priceFilter:[
        {
          startPrice:"0.00",
          endPrice : "500.00"
        },
        {
          startPrice:"500.00",
          endPrice : "1000.00"
        },
        {
          startPrice:"1000.00",
          endPrice : "2000.00"
        }
      ],
      priceChecked:'all',
      filterBy:false,
      overLayFlag:false
    }
  },
  methods: {
    jump() {
      //this.$router.push('/cart');
      /*this.$router.push({
        path:"/cart"
      });*/
      this.$router.push({
        path: "/cart?a=123"
      });
    },
    getGoodsList(){
      var that = this;
      //获取本地数据
      axios.get("/mock/goods.json").then((res)=>{
        console.log(res);
        var data = res.data;
        that.goodsList = res.data.result;
      });
    },
    showFilterPop(){
      //手机端点击显示弹窗
      this.filterBy=true;
      this.overLayFlag=true;
    },
    colsePop(){
      //手机端点击关闭弹窗
      this.filterBy=false;
      this.overLayFlag=false;
    },
    setPriceFilter(index){
      this.priceChecked = index ;
      this.filterBy=false;
      this.overLayFlag=false;
    }
  },
  components:{
    NavHeader : NavHeader,
    NavFooter : NavFooter,
    NavBread : NavBread
  },
  mounted : function(){
    this.getGoodsList();
  }
}

</script>
<style>


</style>

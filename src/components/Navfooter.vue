<template>
  <div>
    <footer class="footer">
      <div class="footer__wrap">
        <div class="footer__secondary">
          <div class="footer__inner">
            <div class="footer__region">
              <span>Region</span>
              <select class="footer__region__select">
                <option value="en-US">USA</option>
                <option value="zh-CN">China</option>
                <option value="in">India</option>
              </select>
            </div>
            <div class="footer__secondary__nav">
              <span>Copyright © 2017 Summer All Rights Reserved.</span>
              <a href="/">
            About Us
          </a>
              <a href="/">
            Terms &amp; Conditions
          </a>
              <a href="/">
            Privacy Policy
          </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
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

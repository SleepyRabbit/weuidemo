<template>
  <div class="list">
      <!--<div class="page__hd">-->
        <!--<h1 class="page__title">Flex</h1>-->
        <!--<p class="page__desc">Flex布局</p>-->
      <!--</div>-->

      <div class="weui-flex">
        <div class="weui-flex__item"><div class="placeholder">weui</div></div>
      </div>
      <div class="weui-flex">
        <div class="weui-flex__item"><div class="placeholder">weui</div></div>
        <div class="weui-flex__item"><div class="placeholder">weui</div></div>
      </div>
      <div class="weui-flex">
        <div class="weui-flex__item"><div class="placeholder">weui</div></div>
        <div class="weui-flex__item"><div class="placeholder">weui</div></div>
        <div class="weui-flex__item"><div class="placeholder">weui</div></div>
      </div>
      <div class="weui-flex">
        <div class="weui-flex__item"><div class="placeholder">weui</div></div>
        <div class="weui-flex__item"><div class="placeholder">weui</div></div>
        <div class="weui-flex__item"><div class="placeholder">weui</div></div>
        <div class="weui-flex__item"><div class="placeholder">weui</div></div>
      </div>

      <!--<div class="page__ft">-->
        <!--<a href="javascript:home()"><img src="../../static/images/icon_footer_link.png" /></a>-->
      <!--</div>-->
  </div>
</template>

<script>
  import weui from '../../static/js/weui.min.js'

  export default {
  name: 'list',
  data () {
    return {
    }
  },
  methods: {
  },
  created: function () {
    this.$nextTick(function() {
      }, 100);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

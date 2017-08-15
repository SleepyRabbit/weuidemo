<template>
  <div class="about">

    <div class="weui-footer">
      <p class="weui-footer__text">Copyright © 2008-2016 weui.io</p>
    </div>

    <div class="weui-footer">
      <p class="weui-footer__links">
        <a href="javascript:void(0);" class="weui-footer__link">底部链接</a>
      </p>
      <p class="weui-footer__text">Copyright © 2008-2016 weui.io</p>
    </div>

    <div class="weui-footer">
      <p class="weui-footer__links">
        <a href="javascript:void(0);" class="weui-footer__link">底部链接</a>
        <a href="javascript:void(0);" class="weui-footer__link">底部链接</a>
      </p>
      <p class="weui-footer__text">Copyright © 2008-2016 weui.io</p>
    </div>
  </div>
</template>

<script>
  import weui from '../../static/js/weui.min.js'

  export default {
  name: 'about',
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

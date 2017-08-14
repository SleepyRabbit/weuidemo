<template>
  <div class="list">
      <!--<div class="page__hd">-->
        <!--<h1 class="page__title">Flex</h1>-->
        <!--<p class="page__desc">Flex布局</p>-->
      <!--</div>-->

      <!--<div class="weui-flex">-->
        <!--<div class="weui-flex__item"><div class="placeholder">weui</div></div>-->
      <!--</div>-->
      <!--<div class="weui-flex">-->
        <!--<div class="weui-flex__item"><div class="placeholder">weui</div></div>-->
        <!--<div class="weui-flex__item"><div class="placeholder">weui</div></div>-->
      <!--</div>-->
      <!--<div class="weui-flex">-->
        <!--<div class="weui-flex__item"><div class="placeholder">weui</div></div>-->
        <!--<div class="weui-flex__item"><div class="placeholder">weui</div></div>-->
        <!--<div class="weui-flex__item"><div class="placeholder">weui</div></div>-->
      <!--</div>-->
      <!--<div class="weui-flex">-->
        <!--<div class="weui-flex__item"><div class="placeholder">weui</div></div>-->
        <!--<div class="weui-flex__item"><div class="placeholder">weui</div></div>-->
        <!--<div class="weui-flex__item"><div class="placeholder">weui</div></div>-->
        <!--<div class="weui-flex__item"><div class="placeholder">weui</div></div>-->
      <!--</div>-->

      <!--<div class='demos-content-padded'>-->
        <!--<a href="javascript:;" class="weui-btn weui-btn_primary">主按钮</a>-->
        <!--<a href="javascript:;" class="weui-btn weui-btn_disabled weui-btn_primary">禁用按钮</a>-->
        <!--<a href="javascript:;" class="weui-btn weui-btn_warn">警告按钮</a>-->
        <!--<a href="javascript:;" class="weui-btn weui-btn_disabled weui-btn_warn">禁用按钮</a>-->
        <!--<a href="javascript:;" class="weui-btn weui-btn_default">默认按钮</a>-->
        <!--<a href="javascript:;" class="weui-btn weui-btn_disabled weui-btn_default">禁用按钮</a>-->
        <!--<a href="javascript:;" class="weui-btn weui-btn_plain-default">扁平默认按钮</a>-->
        <!--<a href="javascript:;" class="weui-btn weui-btn_plain-primary">扁平主按钮</a>-->

        <!--<div class="button_sp_area">-->
          <!--<a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_primary">按钮</a>-->
          <!--<a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_default">按钮</a>-->
        <!--</div>-->

        <!--<p>-->
          <!--<a href="javascript:;" class="weui-btn weui-btn_primary weui-btn_loading">正在加载...</a>-->
          <!--<a href="javascript:;" class="weui-btn weui-btn_warn weui-btn_loading">正在加载...</a>-->
          <!--<a href="javascript:;" class="weui-btn weui-btn_default weui-btn_loading">正在加载...</a>-->
        <!--</p>-->
      <!--</div>-->

      <div class='demos-content-padded'>
        <div class="weui-slider" id='slider1'>
          <div class="weui-slider__inner">
            <div style="width: 0;" class="weui-slider__track"></div>
            <div style="left: 0;" class="weui-slider__handler"></div>
          </div>
        </div>
        <br>
        <div class="weui-slider-box" id='slider2'>
          <div class="weui-slider">
            <div id="sliderInner" class="weui-slider__inner">
              <div id="sliderTrack" style="width: 75%;" class="weui-slider__track"></div>
              <div id="sliderHandler" style="left: 75%;" class="weui-slider__handler"></div>
            </div>
          </div>
          <div id="sliderValue" class="weui-slider-box__value">75</div>
        </div>
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
        $('#slider1').slider();
        $('#slider2').slider(function (per) {
          console.log(per);
        });
      }, 100);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<template>
  <div class="detail box flex flex-direction-column">

    <div class="detail-header flex flex-direction-column flex-justify-content-center">
      <div class="weui-panel__bd">~真.赛车~</div>
    </div>

    <div class="flex-grow-1 detail-container box flex flex-justify-content-center">
      <div class="container flex flex-direction-column">

          <div class="container-header flex">
            <img src="../../static/images/swiper-1.jpg" alt="">
          </div>

          <div class="container-content flex-grow-1 overflow-y-auto">
            <div class="box">
              <p>Description:</p>
              <p>没时间解释了，快排队开车吧~~~~</p>
              <p>Description:</p>
              <p>没时间解释了，快排队开车吧~~~~</p>
              <p>Description:</p>
              <p>没时间解释了，快排队开车吧~~~~</p>
            </div>
          </div>

          <div class="container-footer flex flex-direction-column flex-justify-content-center">
            <!--<p>尚有空闲位置：11/12</p>-->
            <div class="weui-cell__ft">尚有空闲位置：11/12</div>
          </div>
        <!--</div>-->
      </div>

    </div>

    <div class="detail-footer flex flex-direction-column flex-justify-content-center">
      <a href="#" class="a-btn weui-btn weui-btn_primary">参与</a>
    </div>

  </div>
</template>

<script>
  import weui from '../../static/js/weui.min.js'

  export default {
  name: 'detail',
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
  .detail {
  }

  .detail-header {
    position: relative;
    width: 100%;
    height: 10%;
    padding: 0 10px;
    border-bottom: 1px solid rgb(148,177,219);
  }

  .detail-container {
    /*background-color: antiquewhite;*/
  }

  .container {
    margin-top: 5px;
    height: 100%;
    width: 96%;
    background-color: beige;
    border-left: 1px solid rgb(213,213,213);
    border-right: 1px solid rgb(213,213,213);
    border-bottom: 1px solid rgb(213,213,213);
  }

  .container-header {
    width: 100%;
    height: 50%;
    background-color: darkgrey;
  }

  img {
    width: 100%;
    /*height: 10%;*/
  }

  .container-content {
    width: 100%;
    padding: 5px;
  }

  .container-footer {
    width: 100%;
    height: 6%;
    padding: 0 10px;
  }

  .detail-footer {
    width: 100%;
    height: 25%;
    /*border-top: 1px solid rgb(148,177,219);*/
  }

  .a-btn {
    width: 30%;
  }
</style>

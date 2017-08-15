<template>
  <div class="list box flex flex-direction-column">

    <div class="list-header flex overflow-y-hidden">
      <div class="weui-flex__item flex flex-direction-column flex-justify-content-center">
        <router-link to="/detail" class="flex flex-justify-content-center">关注</router-link>
      </div>
      <div class="weui-flex__item flex flex-direction-column flex-justify-content-center">
        <router-link to="/list1" class="flex flex-justify-content-center">热门</router-link>
      </div>
      <div class="weui-flex__item flex flex-direction-column flex-justify-content-center">
        <router-link to="/detail" class="flex flex-justify-content-center">最新</router-link>
      </div>
    </div>

    <div class="flex-grow-1 overflow-y-auto box flex flex-direction-column">

      <div class="container">
        <div class="container-box flex flex-direction-column">
          <div class="weui-panel__bd">~真.赛车~</div>
          <div class="flex-grow-1 box flex">
            <a href="#/detail" class="flex"><img src="../../static/images/swiper-1.jpg" alt=""></a>
          </div>
          <div class="weui-cell__ft">尚有空闲位置：11/12</div>
        </div>
      </div>



      <div class="container">
        <div class="container-box flex flex-direction-column">
          <div class="weui-panel__bd">~坦克大战~</div>
          <div class="flex-grow-1 box flex">
            <a href="#/list1" class="flex"><img src="../../static/images/swiper-2.jpg" alt=""></a>
          </div>
          <div class="weui-cell__ft">尚有空闲位置：10/12</div>
        </div>
      </div>

      <div class="container">
        <div class="container-box flex flex-direction-column">
          <div class="weui-panel__bd">~抓娃娃~</div>
          <div class="flex-grow-1 box flex">
            <a href="" class="flex"><img src="../../static/images/swiper-4.jpg" alt=""></a>
          </div>
          <div class="weui-cell__ft">尚有空闲位置：7/12</div>
        </div>
      </div>

    </div>


    <div class="list-footer overflow-y-hidden">
      <div class="weui-grids">
        <a href="" class="weui-grid js_grid">
          <div class="weui-grid__icon">
            <img src="../../static/images/icon_nav_button.png" alt="">
          </div>
          <p class="weui-grid__label">
            Button
          </p>
        </a>
        <a href="" class="weui-grid js_grid">
          <div class="weui-grid__icon">
            <img src="../../static/images/icon_nav_cell.png" alt="">
          </div>
          <p class="weui-grid__label">
            List
          </p>
        </a>
      </div>
    </div>


  </div>
</template>

<script>
  import weui from '../../static/js/weui.min.js'


  export default {
  name: 'list',
  data () {
    return {
        d_slider1: 0,
    }
  },
  methods: {
  },
  created: function () {
    this.$nextTick(function() {
//      $.toptip('操作成功', 'success');
      }, 100);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .list {
  }

  .list-header {
    width: 100%;
    height: 10%;
    padding: 0 20%;
    border-bottom: 1px solid rgb(148,177,219);
  }

  .container {
    width: 100%;
    height: 40%;
    padding: 5px 10px;
    margin-bottom: 5px;
    border-bottom: 1px solid rgb(213,213,213);
  }

  .container-box {
    width: 100%;
    height: 100%;
  }

  .container a {
    width: 100%;
  }

  .container img {
    width: 100%;
  }

  .list-footer {
    width: 100%;
    height: 20%;
  }

</style>

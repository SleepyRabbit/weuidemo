<template>
  <div class="detail">
    <h1>{{ msg }}</h1>
    <h2>{{ d_showPicker }}</h2>
    <!--<button>Alert</button>-->
    <a href="javascript:;" class="weui-btn weui-btn_warn" @click="onAlert">警告类操作 Normal</a>
    <!--<a href="javascript:;" id='show-actions' class="weui_btn weui_btn_primary" @click="onDisplay">显示 ActionSheet</a>-->
    <!--<a href="javascript:;" id='show-actions-bg' class="weui_btn weui_btn_primary">自定义背景色</a>-->

    <div class="page__hd">
      <h1 class="page__title">Picker</h1>
      <p class="page__desc">多列选择器，需要配合js实现</p>
    </div>

    <div class="page__bd page__bd_spacing">
      <a href="javascript:;" class="weui-btn weui-btn_default" @click="onPicker()">单列选择器</a>
    </div>

    <!--<div class="page__bd page__bd_spacing">-->
      <!--<a href="javascript:;" class="weui-btn weui-btn_default" id="showPicker">单列选择器</a>-->
      <!--<a href="javascript:;" class="weui-btn weui-btn_default" id="showDatePicker">日期选择器</a>-->
    <!--</div>-->

    <button @click="getScene">Get</button>

  </div>
</template>

<script>
  import weui from '../../static/js/weui.min.js'

  export default {
  name: 'detail',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      d_showPicker: 1,
      d_showDatePicker: 0,
    }
  },
  methods: {
    getScene: function () {
      this.$http.get('/api/v1/scenes/9527').then(res => {
          console.log(res);
      }, res => {
          console.log("get failed!");
      })
    },
    onPicker: function () {
      weui.picker([{
        label: '飞机票',
        value: 0
      }, {
        label: '火车票',
        value: 1
      }, {
        label: '的士票',
        value: 2
      },{
        label: '公交票 (disabled)',
        disabled: true,
        value: 3
      }, {
        label: '其他',
        value: 4
      }], {
        onChange: result => {
//            console.log(result);
        },
        onConfirm: (result) => {
          this.d_showPicker = result[0].value;
        }
      });
    },
    handleClickUploadList: function () {

    },
    onAlert: function () {
      weui.alert('alert');
    },
    onDisplay: function () {
      console.log("display");
    },
    onChange: function (result) {
            console.log(result);
    }
  },
  created: function () {
    this.$nextTick(function() {
      }, 100);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

/*
入口JS: 创建Vue的实例
 */
import Vue from 'vue'
import App from './App.vue'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { // 将组件映射成标签
    App
  },
  template: '<App />' // 使用组件标签
})

<template>
  <div>
    <h2>第一个vue项目</h2>
    <img class="logo" src="./assets/logo.png" alt="logo">
    <HelloWorld/><!--使用组件标签-->
  </div>
</template>
<script>
  import HelloWorld from './components/HelloWorld.vue'
  export default { // 默认暴露一个配置对象
    components: { // 注册成标签
      HelloWorld
    }
  }
</script>
<style>
  .logo {
    width: 100px;
    height: 100px;
  }
</style>
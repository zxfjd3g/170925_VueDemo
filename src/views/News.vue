<template>
  <ul>
    <li v-for="(news, index) in newsArr" :key="index">{{news}}</li>
  </ul>
</template>

<script>
  export default {
    data () {
      return {
        newsArr: ['news01', 'news02', 'news03']
      }
    }
  }
</script>

<style>

</style>
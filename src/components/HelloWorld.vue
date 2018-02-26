<template>
  <div>
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'Vue真好学!'
      }
    }
  }
</script>

<style scoped>
  h2 {
    color: red;
  }
</style>
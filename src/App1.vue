<template>
  <div>
    <p v-if="!repoName">loading...</p>
    <p v-else>most star repo is <a :href="repoUrl">{{repoName}}</a></p>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        repoName: '',
        repoUrl: '',
        searchName: 'v'
      }
    },

    mounted () {
      // 使用vue-resource发送ajax请求异步获取数据
      const url = `https://api.github.com/search/repositories?q=${this.searchName}&sort=stars`
      /*this.$http.get(url)
        .then(
          response => {
            // 得到响应数据
            const result = response.data
            // 得到仓库对象
            const repo = result.items[0]
            // 更新数据
            this.repoName = repo.name
            this.repoUrl = repo.html_url
          },
          response => {
            console.log('error ', response.statusText)
            alert('请求失败!')
          }
        )*/

      axios.get(url)
        .then(
          response => {
            // 得到响应数据
            const result = response.data
            // 得到仓库对象
            const repo = result.items[0]
            // 更新数据
            this.repoName = repo.name
            this.repoUrl = repo.html_url
          }
        )
        .catch(
          error => {
            alert(error.message)
          }
        )
    }
  }
</script>

<style>

</style>
<template>
  <div>
    <h2 v-if="firstView">请输入关键字搜索</h2>

    <h2 v-if="loading">LOADING...</h2>

    <h2 v-if="errorMsg">{{errorMsg}}</h2>

    <div class="row">
      <div class="card" v-for="(user, index) in users" :key="index">
        <a :href="user.url" target="_blank">
          <img :src="user.avatar" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  import axios from 'axios'

  export default {
    data () {
      return {
        firstView: true,
        loading: false,
        errorMsg: '',
        users: []
      }
    },

    mounted () {
      // 订阅消息(search)
      PubSub.subscribe('search', (message, searchName) => { // 需要发送新的ajax请求
        // 请求之前, 更新状态
        this.firstView = false
        this.loading = true
        this.users = []
        this.errorMsg = ''
        // 发请求
        const url = `https://api.github.com/search/users?q=${searchName}`
        axios.get(url)
          .then(response => {
            // 请求返回(成功)
            const result = response.data
            this.loading = false
            this.users = result.items.map(item => ({
              url: item.html_url,
              avatar: item.avatar_url,
              name: item.login
            }))
          })
          .catch(error => {
            // 请求返回(失败)
            this.loading = false
            this.errorMsg = '请求失败!'
          })
      })
    }
  }
</script>

<style>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>
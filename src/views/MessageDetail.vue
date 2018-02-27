<template>
  <ul>
    <p>{{$route.params.id}}</p>
    <li>id: {{message.id}}</li>
    <li>title: {{message.title}}</li>
    <li>content: {{message.content}}</li>
  </ul>
</template>

<script>
  const allMessages = [
    {id: 1, title: 'message01', content: 'message content 00001'},
    {id: 3, title: 'message03', content: 'message content 00003'},
    {id: 5, title: 'message05', content: 'message content 00005'},
  ]
  export default {
    data () {
      return {
        message: {}
      }
    },
    mounted() { // 只执行一次
      // 得到请求参数中的id
      const id = this.$route.params.id*1
      this.showUI(id)
    },

    watch: {
      $route: function (newValue) { // 传递过来了新的参数
        // 得到请求参数中的id
        const id = newValue.params.id*1
        this.showUI(id)
      }
    },

    methods: {
      showUI (id) {
        // 查找到对应的message对象
        const message = allMessages.find(m => m.id===id)
        // 更新状态
        this.message = message
      }
    }
  }
</script>

<style>

</style>
<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addTodo="addTodo"/>
      <TodoMain :todos="todos" :deleteTodo="deleteTodo"/>
      <TodoFooter/>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Main from './components/Main.vue'
  import Footer from './components/Footer.vue'

  export default {
    data () {
      return {
        todos: [
          {title: '吃饭', completed: false},
          {title: '睡觉', completed: true},
          {title: '打代码', completed: false}
        ]
      }
    },

    methods: {
      // 添加todo
      addTodo (todo) {
        this.todos.unshift(todo)
      },
      // 删除todo
      deleteTodo (index) {
        this.todos.splice(index, 1)
      }
    },

    components: {
      TodoHeader: Header,
      TodoMain: Main,
      TodoFooter: Footer
    }
  }
</script>

<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
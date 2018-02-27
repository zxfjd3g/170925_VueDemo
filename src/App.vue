<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addTodo="addTodo"/>
      <TodoMain :todos="todos" :deleteTodo="deleteTodo"/>
      <TodoFooter :todos="todos" :selectAll="selectAll" :deleteComputed="deleteComputed"/>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Main from './components/Main.vue'
  import Footer from './components/Footer.vue'
  import storageUtil from './utils/stotageUtil'

  export default {
    data () {
      return {
        // 从localStorage中读取保存todos数据
        todos: storageUtil.readTodos()
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
      },
      // 全选或全不选
      selectAll (check) {
        this.todos.forEach(todo => todo.completed = check)
      },
      //删除完成的
      deleteComputed () {
        // 过滤产生新的数组并更新
        this.todos = this.todos.filter(todo => !todo.completed)
      }
    },

    watch: {
      todos: {
        deep: true, //深度监视
        /*handler: function (newValue) { // 最新的todos
          // 将todos保存localStorage (todos的JSON数据)
          // window.localStorage.setItem('todos_key', JSON.stringify(newValue))
          storageUtil.saveTodos(newValue)
        }*/
        handler: storageUtil.saveTodos
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
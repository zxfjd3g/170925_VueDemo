<template>
  <div class="todo-footer">
    <label>
      <slot name="selectAll"></slot>
      <!--<input type="checkbox" v-model="allComplete"/>-->
    </label>
    <span>
      <slot name="size"></slot>
      <!--<span>已完成{{completeSize}}/ 全部{{todos.length}}</span>-->
    </span>
    <slot name="clearCompleted"></slot>
    <!--<button class="btn btn-danger" v-show="completeSize>0" @click="deleteComputed">清除已完成任务</button>-->
  </div>
</template>

<script>
  export default {

  }
</script>

<style>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
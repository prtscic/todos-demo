<script setup>
import useStore from '../store'
const { todos, filter } = useStore()
</script>

<template>
  <footer class="footer" v-if="todos.isShowFooter">
    <span class="todo-count"><strong>{{todos.leftTodo}}</strong> item left</span>
    <ul class="filters">
      <li 
      v-for="item in filter.filterList" 
      :key="item"
      @click="filter.changeActiveName(item)"
      >
        <a :class="{selected:item === filter.activeName}" href="#/">{{item}}</a>
      </li>
    </ul>
    <button 
    class="clear-completed" 
    v-if="todos.isShowClear"
    @click="todos.clear"
    >Clear completed</button>
  </footer>
</template>

<style lang="less" scoped></style>

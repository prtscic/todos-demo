<script setup>
import { watch } from 'vue'
import useStore from '../store'
const { todos, filter } = useStore()
todos.$subscribe(() => {
  // console.log('数据变化')
  localStorage.setItem('todoList-pinia',JSON.stringify(todos.list))
})
</script>

<template>
  <section class="main">
    <input 
    id="toggle-all" 
    class="toggle-all" 
    type="checkbox" 
    :checked="todos.isCheck"
    @change="todos.toggleAll(!todos.isCheck)"
    >
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li 
      :class="{completed: item.isDone}"
      v-for="item in filter.showList"
      :key="item.id"
      >
        <div class="view">
          <input 
          class="toggle" 
          type="checkbox" 
          :checked="item.isDone" 
          @change="todos.changeDone(item.id)"
          />
          <label>{{item.name}}</label>
          <button 
          class="destroy"
          @click="todos.delTodo(item.id)"
          ></button>
        </div>
        <input 
        class="edit" 
        value="Create a TodoMVC template" 
        />
      </li>
    </ul>
  </section>
</template>

<style lang="less" scoped></style>

<script setup>
import { ref } from 'vue';
import useStore from '../store'
const { todos } = useStore()
const name = ref('')
const addTodoFn = () => {
  if(!name.value.trim()) return alert('请输入项目')
  todos.addTodo(name.value)
  name.value = ''
}
</script>

<template>
  <header class="header">
    <h1>todos</h1>
    <input 
    class="new-todo" 
    placeholder="What needs to be done?" 
    autofocus
    v-model="name"
    @keydown.enter="addTodoFn" 
    />
  </header>
</template>

<style lang="less" scoped></style>

import { defineStore } from "pinia";
export default defineStore('todos', {
    state() {
        return {
            list:JSON.parse(localStorage.getItem('todoList-pinia')) || []
        }
    },
    actions:{
        // 删除
        delTodo(id) {
            this.list = this.list.filter(item => item.id !== id)
        },
        // 修改状态
        changeDone(id) {
            const todo = this.list.find(item => item.id === id)
            todo.isDone = !todo.isDone
        },
        // 添加
        addTodo(name) {
            this.list.unshift({
                id: Date.now(),
                name,
                isDone:false
            })
        },
        // 清除已完成
        clear() {
            this.list = this.list.filter(item => !item.isDone)
        },
        //全选反选修改
        toggleAll(bool) {
            this.list.forEach(item => item.isDone = bool)
        }
    },
    getters:{
        // 未完成数量
        leftTodo() {
            return this.list.filter(item => !item.isDone).length
        },
        // 是否显示清除已完成按钮 
        isShowClear() {
            return this.list.some(item => item.isDone)
        },
        // 是否显示底部组件
        isShowFooter() {
            return this.list.length
        },
        // 全选
        isCheck() {
            return this.list.every(item => item.isDone)
        },

    }
})
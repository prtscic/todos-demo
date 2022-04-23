import { defineStore } from "pinia";
import useTodoStore from './todos'
export default defineStore('filter',{
    state() {
        return {
            filterList:['All','Active','completed'],
            activeName:'All'
        }
    },
    actions:{
        // 类名高亮
        changeActiveName(active) {
            this.activeName = active
        }
    },
    getters:{
        // 不同按钮返回不同数组
         showList() {
            const todos = useTodoStore()
            if(this.activeName === 'All') return todos.list
            if(this.activeName === 'Active') return todos.list.filter(item => !item.isDone)
            if(this.activeName === 'completed') return todos.list.filter(item => item.isDone)
        }
    }
})

<template>
    <div class="task">
      <h3>{{ task.title }}</h3>
      <div class="icons">
        <i class="material-symbols-outlined" @click="taskStore.deleteTask(task.id)">delete</i>
        <i class="material-symbols-outlined"  @click="taskStore.toogleFav(task.id)">favorite</i>
      </div>
    </div>
</template>

<script>
import { useTaskStore } from '@/stores/TaskStore';

    export default {
        props:["task"],
        setup(){
          const taskStore=useTaskStore()
          return {taskStore}
        }
    }
</script>

<style lang="scss" scoped>

</style>







import { defineStore } from "pinia";


export const useTaskStore=defineStore('taskStore',{
    state:() =>({
        tasks:[],
        name:'saurabh'
    }),
    getters:{
        favs(){
            return this.tasks.filter(t=>t.isFav)
        },
        favCount(){
            return this.tasks.reduce((p,c)=>{
                return c.isFav ? p+1 :p
            },0)
        },
        totalCount:(state)=>{
            return state.tasks.length
        }
    },
    actions:{
        addTask(task){
           
            this.tasks.push(task)
        },
        deleteTask(id){
            this.tasks=this.tasks.filter(t=>{
                return t.id !==id
            })
        
        },
      toogleFav(id){
            const task= this.tasks.find(t =>t.id === id) 
            task.isFav =!task.isFav
            
        }
    }
})

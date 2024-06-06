import {defineStore} from 'pinia'

export const todolist=defineStore('todolist',{
    state:()=>({
        listTodo:[
            {name:'makan',waktu:new Date()},
            {name:'minum',waktu:new Date()},
            {name:'tidur',waktu:new Date()},
        ],
        search:''
    }),
    getters:{
        getList(){
            return this.listTodo
        }
    },
    actions:{
        addTodo(newTodo){
            const newData={name:newTodo,waktu:new Date()}
            return this.listTodo.push(newData)
        },
        deleteTodo(index){
             this.listTodo.splice(index,1)
    },
    deleteAll(){
        this.listTodo.length=0
    },
    editData(index){
       const datas=prompt('masukkan data')
       const newData={name:datas,waktu:new Date()}
       this.listTodo[index]=newData
    },
    }
})
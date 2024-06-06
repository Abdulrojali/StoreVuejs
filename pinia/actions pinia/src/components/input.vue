<script>
import {todolist} from '../store/todolist'
import DeleteAll from './deleteAll.vue'
export default{
    data(){
        return{
            listData:''
        }
    },
    setup(){
        const todo=todolist()
        return{todo}
    },
    components:{
        DeleteAll
    }
}
</script>

<template>
    <div class="container">
        <div class="content">
            <input type="text" placeholder="masukkan list anda" v-model="listData">
            <div class="btn">
                <button @click="todo.addTodo(listData)">add</button>
                <DeleteAll class="delete"></DeleteAll>
            </div>
        </div>
    </div>
</template>

<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .content{
    width: 100%;
    display: flex;
    justify-content:center;
    align-items: center;
    gap: 30px;
    padding: 10px 0;
  }
  input{
    width: 30%;
    padding: 8px 15px;
  }
  button{
    padding: 6px 8px;
    border: none;
    background-color: green;
    color: white;
    cursor: pointer;
  }
  .delete{
    background-color: red;
  }
  .btn{
    display: flex;
    gap: 10px;
  }
  button:hover{
    opacity: .7;
  }
  </style>
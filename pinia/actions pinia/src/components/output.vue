<script>
import {todolist} from '../store/todolist'
import edit from './edit.vue'
export default{
    setup(){
        const todo=todolist()
        return{todo}
    },
    components:{
    edit
}
}
</script>

<template>
    <div class="list">
        <h3>list todo</h3>
        <table>
            <tr class="fistTr">
            <td>no</td>
            <td>name</td>
            <td>waktu</td>
            <td>button</td>
            </tr>
            <tr v-for="(data,index) in todo.getList" :key="index">
            <td><p>{{ index }}</p></td>
            <td><h5>{{data.name}}</h5></td>
            <td><p>{{ data.waktu }}</p></td>
            <td class="btn">
        <button @click="todo.deleteTodo(index)" class="delete">delete</button>
        <edit :data="index"></edit>
            </td>
            </tr>
        </table>
    </div>
</template>
<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .list{
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
  }
  td,tr{
    padding: 6px 8px;
    border: 1px solid gray;
  }
  /* td{
    border: 1px solid black;
  } */
  table{
    width: 100%;
    border: 1px solid black;
  }
  .delete{
    background-color: red;
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
  .btn{
    display: flex;
    gap: 10px;
  }
  button:hover{
    opacity: .7;
  }
</style>
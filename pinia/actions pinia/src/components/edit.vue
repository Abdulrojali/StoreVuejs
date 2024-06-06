<script>
import {todolist} from '../store/todolist'
export default{
    props:['data'],
    setup(){
        const todo=todolist()
        return{todo}
    }
}
</script>

<template>
    <button @click="todo.editData(data)">edit</button>
</template>
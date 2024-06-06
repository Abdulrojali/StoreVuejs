<script>
import {todolist} from '../store/todolist'
export default{
    setup(){
        const todo=todolist()
        return{todo}
    }
}
</script>

<template>
    <button @click="todo.deleteAll">deleteAll</button>
</template>
<script>
import inputTodo from './components/input.vue'
import outputVue from './components/output.vue';

export default{
  components:{
    inputTodo,
    outputVue,
    
  }
}
</script>

<template>
  <div class="container">
    <h1>todo inputan</h1>
    <inputTodo></inputTodo>
    <outputVue></outputVue>
  </div>
</template>

<style scoped>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.container{
  width: 100%;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
}
</style>
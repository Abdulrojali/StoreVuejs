<script>
import {couter} from './store/index'
export default{
  setup(){
    // definisi pinia store counter
    // note apabila sudah mendefinisikan sebuah store pada components data semacam state,getters,maupun actions 
    // bisa langsung di akses kedalam template dengan menginisialisasi tanda . setelah nama store yang di definisikan
    // seperti contoh di bawah ini

    // counter adalah definisi store pada modul store counter
   const counter=couter()
    return{counter}
  }
}
</script>

<template>
  <div class="container">
    <div class="content">
      <!--mendefiniskan getters  {{namaStore.namaGetters}}-->
      <h5>{{counter.getCount}}</h5>
      <!--mendefinisikan actions  @click='namaStore.namaActions'-->
      <button @click="counter.plusCount">plus</button>
      <button @click="counter.minCount">plus</button>
    </div>
  </div>
</template>
<script setup>
import {storeCount} from './store/count.js'
const counter=storeCount()
</script>

<template>
    <div class="container">
        <div class="content">{{ counter.count }}</div>
        <button @click="counter.plusCount()">++</button>
        <button @click="counter.minCount()">--</button>
    </div>
</template>
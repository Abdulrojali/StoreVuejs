import {defineStore} from 'pinia'

export const storeCount=defineStore('counter',{
    state:()=>({
            count:0
    }),
    actions:{
        plusCount(){
            this.count++
        },
        minCount(){
            this.count--
        }
    }
})

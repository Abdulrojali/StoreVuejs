import { def } from '@vue/shared'
import {defineStore} from 'pinia'

export const couter=defineStore('counter',{
    state:()=>({
        count:0
    }),
    getters:{
        getCount(){
            return this.count
        }
    },
    actions:{
        plusCount(){
            return this.count++
        },
        minCount(){
            return this.count--
        }
    }
})

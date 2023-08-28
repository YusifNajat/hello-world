<template>
    <div>
<h2>Hello {{ fullName }}</h2>
<button @click="SentEvent">Call hero</button>
    </div>
</template>

<script>
import { computed } from 'vue'
    export default {
        name:'PersonGreeting',
        props:['fname','lname'],
        emits:['CallHero'],
        setup(props,context){
         const fullName=computed(()=>{
                return `${props.fname} ${props.lname}`
            } )
            function SentEvent(){
                return context.emit('CallHero',fullName.value)
            }
            return {
                fullName,
                SentEvent
            }
        }
        // computed:{
        //     (fullName){
        //         return `${this.fname} ${this.lname}` 
        //     }
        // }
    }
</script>

<style scoped>

</style>
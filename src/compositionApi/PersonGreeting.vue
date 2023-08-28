<template>
    <div>
<h2>Hello {{ fullName }}</h2>
    </div>
</template>

<script>
import { computed } from 'vue'
    export default {
        name:'PersonGreeting',
        props:['fname','lname'],
        setup(props){
         const fullName=computed(()=>{
                return `${props.fname} ${props.lname}`
            } )
            return {
                fullName
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
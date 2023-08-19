<template>
    <div>
<input type="text" v-model="name" placeholder="name">
<input type="text" v-model="fname" placeholder="fname">
<input type="text" v-model="lname" placeholder="lname">
    </div>
</template>
<!-- wathers bakar de bo 
away hamu katek state bgordre lagare gorani har shtek la statetaka
-->
<script>
import {ref,watch} from 'vue'
    export default {
        name:"WatcherApi",
        setup(){
            const fname=ref('')
            const lname=ref('')
            watch([fname,lname],(newValues,oldValues)=>{
                console.log('newValuefname', newValues[0])
                console.log('oldValuefname', oldValues[0])
                console.log('newValuelname', newValues[1])
                console.log('oldValuelname', oldValues[1])
            },{immediate:true})
            return{
                fname,
                lname
            }
        },
        data(){
            return{
                name:''
            }
        },
        watch:{
            name(newValue,oldValue){
                console.log('newValue', newValue)
                console.log('oldValue', oldValue)
            }
        }
    }
</script>

<style scoped>

</style>
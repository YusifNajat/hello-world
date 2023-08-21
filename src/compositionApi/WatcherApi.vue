<template>
    <div>
<input type="text" v-model="name" placeholder="name">
<input type="text" v-model="fname" placeholder="fname">
<input type="text" v-model="lname" placeholder="lname">

<input type="text" v-model="firstname" placeholder="first name">
<input type="text" v-model="lastname" placeholder="last name">

<input type="text" v-model="options.op" placeholder="options">
    </div>
</template>
<!-- wathers bakar de bo 
away hamu katek state bgordre lagare gorani har shtek la statetaka
-->
<script>
import _ from 'lodash'
import {ref,watch,reactive,toRefs} from 'vue'
    export default {
        name:"WatcherApi",
        setup(){
            
const state=reactive({
    firstname:"",
    lastname:'',
    options:{
        op:''
    }
})
watch(()=>_.cloneDeep(state.options),(nvalue,ovalue)=>{
console.log('nvalue f', nvalue)
console.log('ovalue f', ovalue)
},{deep:true})

            const fname=ref('')
            const lname=ref('')
            // watch([fname,lname],(newValues,oldValues)=>{
            //     console.log('newValuefname', newValues[0])
            //     console.log('oldValuefname', oldValues[0])
            //     console.log('newValuelname', newValues[1])
            //     console.log('oldValuelname', oldValues[1])
            // },{immediate:true})
            return{
                fname,
                lname,
                ...toRefs(state)
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
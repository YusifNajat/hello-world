<template>
    <div>
<input type="text" placeholder="Full Name" ref="InputRef">
    </div>
</template>

<script>
import {ref,onMounted} from 'vue'
    export default {
        name:'TemplateRefC',
        setup(){
const InputRef=ref(null)
onMounted(()=>{
    InputRef.value.focus()
    console.log('InputRef.value.type', InputRef.value.type)
})
return {
    InputRef
}
        },
        // mounted(){
        //     this.$refs.InputRef.focus()
        // }
    }
</script>

<style scoped>

</style>
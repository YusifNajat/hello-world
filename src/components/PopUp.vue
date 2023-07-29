<template>
    <div>
<h2>This is a PopUp</h2>
<input type="text" v-model="name">
<button @click="$emit('closePopup',name)">Close PopUp</button>
    </div>
</template>

<script>
    export default {
       name:'PopUp' ,
       emits:{
        closePopup:(name)=>{
            if (!name) {
                return false
            }else {
                return true
            }
        }
       },
       data(){
        return{
            name:''
        }
       }
    }
</script>

<style scoped>

</style>
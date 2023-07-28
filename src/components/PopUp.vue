<template>
    <div>
<h2>This is a PopUp</h2>
<button @click="$emit('closePopup','yusif eng')">Close PopUp</button>
    </div>
</template>

<script>
    export default {
       name:'PopUp' ,
       emits:['closePopup']
    }
</script>

<style scoped>

</style>
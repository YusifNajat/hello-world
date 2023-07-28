<template>
    <div>
Component F child child is username - {{ username }}
    </div>
</template>

<script>
    export default {
        name:'ComponentF'  ,
        inject:['username']
    }
</script>

<style scoped>

</style>
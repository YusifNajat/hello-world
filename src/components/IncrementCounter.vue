<template>
    <div>
<button @click="Increment"> Click Counter {{ count }}</button>
    </div>
</template>

<script>
   import Count from './../components/mixin/Count'
    export default {
        name:'IncrementCounter',
        mixins:[Count]
    }
</script>

<style scoped>

</style>
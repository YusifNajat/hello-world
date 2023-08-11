<template>
    <div>
<h3 @mousemove="Increment">Hover Counter {{ count }}</h3>
    </div>
</template>

<script>
   import Count from './../components/mixin/Count'
    export default {
        name:'HoverCounter',
       mixins:[Count]
    }
</script>

<style scoped>

</style>
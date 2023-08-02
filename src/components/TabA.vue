<template>
    <div>
<h2>Tab A Component</h2>
<h2>{{ sharedData }}</h2>
    </div>
</template>

<script>
    export default {
        name:'TabA',
        inject:['sharedData']
    }
</script>

<style scoped>

</style>
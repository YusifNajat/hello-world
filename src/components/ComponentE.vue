<template>
    <div>
Component E child username {{ username }}
    </div>
</template>

<script>
    export default {
        name:'ComponentE',
        inject:['username']
    }
</script>

<style scoped>

</style>
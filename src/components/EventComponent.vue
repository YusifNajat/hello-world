<template>
    <div>
        <h2>Pop up text</h2>
        <button @click="$emit('close','kuhuhuhuy')">close PopUP</button>
    </div>
</template>

<script>
    export default {
        name:'EventComponent',
        emits:['close']
    }
</script>

<style scoped>

</style>
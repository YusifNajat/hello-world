<template>
    <div>
<h2>Tab C Component</h2>
<input type="text" v-model="name">
{{ console.log('name', name) }}
    </div>
</template>

<script>
    export default {
        name:'TabC',
        data(){
            return {
                name:''
            }
        },
        provide:{sharedData:''}
    }
</script>

<style scoped>

</style>
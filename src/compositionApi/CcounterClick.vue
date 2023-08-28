<template>
    <div>
<button @click="IncrementCount">Click Counter {{ count }}</button>
    </div>
</template>

<script>
import MixCount from '../components/mixin/Count'
    export default {
        name:'CcounClick',
        mixins:[MixCount]
    }
</script>

<style scoped>

</style>
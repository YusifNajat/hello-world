<template>
    <div>
<h3 @mouseover="IncrementCount">hover Counter {{ count }}</h3>
    </div>
</template>

<script>
import MixCount from '../components/mixin/Count'
    export default {
        name:'CcountHover',
        mixins:[MixCount]
    }
</script>

<style scoped>

</style>
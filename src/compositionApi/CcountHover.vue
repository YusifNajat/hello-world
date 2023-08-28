<template>
    <div>
<h3 @mouseover="IncrementCount">hover Counter {{ count }}</h3>
    </div>
</template>

<script>
import counterUse from "./composable/counterUse";
    export default {
        name:'CcountHover',
        setup(){
            const {count,IncrementCount}=counterUse()
            return {
                count,
                IncrementCount
            }
        }
    }
</script>

<style scoped>

</style>
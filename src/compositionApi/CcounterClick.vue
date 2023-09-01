<template>
    <div>
<button @click="IncrementCount">Click Counter {{ count }}</button>
    </div>
</template>

<script>
import counterUse from "./composable/counterUse";
    export default {
        name:'CcounClick',
        setup(){
            const {count,IncrementCount}=counterUse(100,10)
            return {
                count,
                IncrementCount
            }
        }
        // mixins:[MixCount]
        // comeny
    }
</script>

<style scoped>

</style>
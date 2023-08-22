<template>
    <div>
        <h3>Child B</h3>
        <Child_C/>
    </div>
</template>

<script>
import Child_C from '../compositionApi/Child_C.vue'
    export default {
  components: { Child_C },
        name:'Child_B'
    }
</script>

<style scoped>

</style>
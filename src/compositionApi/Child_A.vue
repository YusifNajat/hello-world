<template>
    <div>
        <h3>Child A</h3>
        <Child_B/>
    </div>
</template>

<script>
import Child_B from '../compositionApi/Child_B.vue'
    export default {
  components: { Child_B },
        name:'Child_A'
    }
</script>

<style scoped>

</style>
<template>
    <div>
<input type="text" ref="inputRef">
<get-posts  ref="postref"/>
    </div>
</template>

<script>
import GetPosts from './GetPosts.vue'
    export default {
  components: { GetPosts },
        name:'TemolateRef',
        mounted(){
            console.log('first', this.$refs.postref)
            this.$refs.inputRef.focus()
        }
    }
</script>

<style scoped>

</style>
<template>
    <div>
<h3>Parent Component</h3>
<button @click="showChild =!showChild">Show Child</button>
<child-component v-show="showChild"/>
    </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue'
    export default {
  components: { ChildComponent },
        name:'ParentComponent',
        data(){
            return{
                showChild:false
            }
        },
        beforeCreate(){
            console.log("Parent Component before create()")
        },
        created(){
            console.log("Parent Component created()")
        },
        beforeMount(){
            console.log("Parent Component before mount()")
        },
        mounted(){
            console.log("Parent Component mounted()")
        },
        beforeUpdate(){
            console.log("Parent Component before update()")
        },
        updated(){
            console.log("Parent Component updated()")
        },
        beforeUnmount(){
            console.log("Parent Component before unmounted()")
        },
        unmounted(){
            console.log("Parent Component unmounted()")
        }
    }
</script>

<style scoped>

</style>
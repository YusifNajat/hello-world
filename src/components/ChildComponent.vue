<template>
    <div>
<h3>Child Component</h3>
<sub-child-component />
    </div>
</template>

<script>
import SubChildComponent from './SubChildComponent.vue'
    export default {
  components: { SubChildComponent },
        name:'ChildComponent',
        beforeCreate(){
            console.log("Child Component before create()")
        },
        created(){
            console.log("Child Component created()")
        },
        beforeMount(){
            console.log("Child Component before mount()")
        },
        mounted(){
            console.log("Child Component mounted()")
        },
        beforeUpdate(){
            console.log("Child Component before update()")
        },
        updated(){
            console.log("Child Component updated()")
        },
        beforeUnmount(){
            console.log("Child Component before unmounted()")
        },
        unmounted(){
            console.log("Child Component unmounted()")
        }
    }
</script>

<style scoped>

</style>
<template>
    <div>
<h3>Sub Child Component</h3>
    </div>
</template>

<script>
    export default {
        name:'SubChildComponent',
        beforeCreate(){
            console.log("subChild Component before create()")
        },
        created(){
            console.log("subChild Component created()")
        },
        beforeMount(){
            console.log("subChild Component before mount()")
        },
        mounted(){
            console.log("subChild Component mounted()")
        },
        beforeUpdate(){
            console.log("subChild Component before update()")
        },
        updated(){
            console.log("subChild Component updated()")
        },
        beforeUnmount(){
            console.log("subChild Component before unmounted()")
        },
        unmounted(){
            console.log("subChild Component unmounted()")
        }
    }
</script>

<style scoped>

</style>
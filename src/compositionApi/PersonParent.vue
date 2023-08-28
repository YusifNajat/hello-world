<template>
    <div>
        <input type="text" v-model="fname" placeholder="First Name">
    <input type="text" v-model="lname" placeholder="Second Name">
<person-greeting :fname="fname" :lname="lname"/>
    </div>
</template>

<script>
import PersonGreeting from './PersonGreeting.vue'
    export default {
  components: { PersonGreeting },
        name:'PersonParent',
        data(){
    return {
      fname:'',
      lname:''
    }
  }
    }
</script>

<style scoped>

</style>
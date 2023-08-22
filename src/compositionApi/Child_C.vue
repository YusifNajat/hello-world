<template>
    <div>
<h3>Child C</h3>
<h4>{{ name }}</h4>
<h4>{{ injectCname }}</h4>
<h5>{{ injectCount }}</h5>
<h5>{{ fname }}</h5>
<h5>{{ lname }}</h5>
<button @click="InjectBtn()">Increment</button>
    </div>
</template>

<script>
import { inject,  toRefs } from 'vue';

    export default {
        name:'Child_C',
        inject:['name'],
        setup(){
           const injectCname= inject('c_name','defaul name')
           const injectCount=inject('c_count',5)
           const injectState=inject('c_state',{})
           const InjectBtn=inject('Increment')
           return {
            injectCname,
            injectCount,
            ...toRefs(injectState),
            InjectBtn
           }
        }
    }
</script>

<style scoped>

</style>
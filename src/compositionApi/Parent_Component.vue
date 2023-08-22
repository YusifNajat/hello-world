<template>
    <div>
<h3>Parent Component</h3>
<h4>{{ named }}</h4>
<h4>{{ count }}</h4>
<Child_A/>
    </div>
</template>

<script>
import { provide,ref,toRefs,reactive } from 'vue'
import Child_A from '../compositionApi/Child_A.vue'
    export default {
  components: { Child_A },
        name:'Parent_Component',
        setup(){
            const count=ref(0)
            const state=reactive({
                fname:'Amanaj',
                lname:'Adnan'
            })
            function Increment(){
                return count.value ++
            }
            provide('c_name','Ayat Eng')
            provide('c_count',count)
            provide('c_state',state)
            provide('Increment',Increment)
            return {
                count,
                ...toRefs(state)
            }
        },
        data(){
            return {
                named:'Yusif eng'
            }
        },
        provide(){
            return {
                name:this.named
            }
        }
    }
</script>

<style scoped>

</style>
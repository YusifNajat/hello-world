<template>
    <div>
<h2>{{ name }}</h2>
<button @click="SetName">Change Name</button>
<h2>{{ count }}</h2>
<button @click="Increment">Increment ccount</button>
<h2>{{ state.count_ }}</h2>
<button @click="Increment_">Increment</button>
<h2>{{ fname }} {{ lname }}</h2>
<button @click="change">Set name</button>
    </div>
</template>

<script>
import { ref,reactive ,toRefs} from 'vue';

    export default {
        name:'MethodsOfApi',
        data(){
            return{
                name:"yusif n ismael"
            }
        },
        methods:{
            SetName(){
                this.name="AYat KH Osman"
            }
        },
        setup(){
            const count=ref(0)
            const state=reactive({
                count_:0,
                fname:'yusif',
                lname:'najat'
            })
            function Increment(){
                count.value++
            }
            function Increment_(){
                state.count_++
            }
            function change(){
                state.fname='ayat'
                state.lname="khalid"
            }
            return {count,Increment,state,Increment_,...toRefs(state),change}
        }
    }
</script>

<style scoped>

</style>
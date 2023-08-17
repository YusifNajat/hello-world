<template>
    <div>
<input type="text" v-model="fname">
<input type="text" v-model="lname">
<h2>{{ fname }} {{ lname }}</h2>
<h1>Composition api</h1>
<input type="text" v-model="fname_">
<input type="text" v-model="lname_">
<h2>{{ fname_ }} {{ lname_ }}</h2>
<h1>Composition api Ref</h1>
<input type="text" v-model="Fname">
<input type="text" v-model="Lname">
<h2>{{ Fname }} {{ Lname }}</h2>
    </div>
</template>

<script>
import {ref,toRefs,reactive} from 'vue'
    export default {
        name:"VmodelComposition",
        setup(){
            const Fname=ref("")
            const Lname=ref("")
        const state=reactive({
                fname_:"",
                lname_:""
            })
return {
    ...toRefs(state),
    Fname,
    Lname
}
        },
        data(){
            return{
                fname:"",
                lname:""
            }
        }
    }
</script>

<style scoped>

</style>
<template>
    <div>
<h2>Option Api {{ fname_data }} {{ lname_data }} {{ jname_data }}</h2>
<h2>composition Api {{ fname }}</h2>

<h2>composition Api {{ fname }} {{ lname }} {{ jname }}</h2>
<h2>composition Api greeting     {{ Greeting }}</h2>

<h2>Reactive {{ State.fname }} {{ State.lname }} {{ State.jname }}</h2>
<h2>Greating Reactive {{ Greeting_ReacTive }}</h2>
    </div>
</template>

<script>
import { ref,reactive } from 'vue'
    export default {
        name:'DataComponent',
        data(){
            return {
                fname_data:'Ayat',
                lname_data:'Khalid',
                jname_data:'SogtEare Enginear'
            }
        },
        setup(){
    const fname=ref("yusf")
    const lname=ref("Najat")
    const jname=ref("Software Developer")
    const Greeting=`hello mr ${fname.value} ${lname.value} and your Job is ${jname.value}`
    const State=reactive({
        fname:'Amanj',
        lname:'Adnan',
        jname:'Laravel Developer'
    })
    const Greeting_ReacTive=`hello mr ${State.fname} ${State.lname} and your Job is ${State.jname}`
    return {
        fname,
        lname,
        jname,
        Greeting,
        State,
        Greeting_ReacTive
    }
  },
    }
</script>

<style scoped>

</style>
<template>
    <div>
<input type="text" v-model="fname">
<input type="text" v-model="lname">
<h3>Fullname is Option Computed{{ fullname }}</h3>
<input type="text" v-model="Fname">
<input type="text" v-model="Lname">
<h3>Fullname is Reactive Api {{ Fullname }}</h3>

<input type="text" v-model="reffname">
<input type="text" v-model="reflname">
<h3>Fullname is Ref Api {{ FullnameRef }}</h3>
    </div>
</template>

<script>
import { reactive, toRefs ,computed,ref} from 'vue';

    export default {
        name:"ComputedApi",
        setup(){
            const reffname=ref('')
            const reflname=ref('')
            const state=reactive({
                Fname:'',
                Lname:'',
            })
            const Fullname=computed(()=> `${state.Fname} ${state.Lname}`)
            const FullnameRef=computed(()=> `${reffname.value} ${reflname.value}`)
            return {
                Fullname,
                ...toRefs(state),
                FullnameRef,
                reffname,
                reflname
            }
        },
        data(){
            return{
                fname:'',
                lname:''
            }
        },
        computed:{
            fullname(){
            return `${this.fname} ${this.lname}`
        }
        }
    }
</script>

<style scoped>

</style>
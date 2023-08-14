<template>
    <div>
<h2>Change Data Ref {{ name }}</h2>
<h2>Change Data Reactive {{ nameRe }}</h2>
    </div>
</template>

<script>
import { reactive, ref,toRefs } from 'vue';

    export default {
        name:'DataChange',
        data(){
            return{
                name_:'yusif'
            }
        },
        setup(){
            let name=ref("yusif n isamle")
            setTimeout(() => {
                name.value="Ayat Khalid Lak"
            }, 2000);
            const state=reactive({
                nameRe:'amanj adnan omer'
            })
            setTimeout(() => {
                state.nameRe="Ayat Khalid Lak"
            }, 2000);
            return toRefs(state)
        }
    }
</script>

<style scoped>

</style>
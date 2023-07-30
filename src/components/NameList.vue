<template>
    <div>
<h3 v-for="name in names" :key="name">
    <slot :fname="name.fname" :lname="name.lname"></slot>
</h3>
    </div>
</template>

<script>
    export default {
        name:'NameList',
        data(){
            return {
                names:[{
                    fname:'yusif',lname:'najat'
                },{
                    fname:'ayat',lname:'khalid'
                },{
                    fname:'amanj',lname:'adnan'
                }]
            }
        }
    }
</script>

<style scoped>

</style>
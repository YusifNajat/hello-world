<template>
    <div>
<h2>{{ title }}</h2>
<h2>the number of likes is - {{ likes }}</h2>
<h2>are the Article is published {{ ispubleshed?'yes':'no' }}</h2>
<h2 v-for="(article,key) in articleSubjects" :key="key">
{{ article }} 
</h2>
<h2 v-for="(value,key) in atendetdetail" :key="key">
    {{ key }}-{{ value }}
</h2>
<button @click="Decress">Descress Button {{ count }}</button>
    </div>
</template>

<script>
    export default {
        props:{
            title:{
                type:String,
                required:true,
                default:'how are you im default article'
            },
            likes:Number,
            ispubleshed:Boolean,
            articleSubjects:Array,
            atendetdetail:Object,
            Decress:Function,
            count:Number
        }
    }
</script>

<style scoped>

</style>
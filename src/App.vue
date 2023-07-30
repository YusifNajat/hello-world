
<template>
  <div >
<name-list >
  <template v-slot:default="slotProps">
{{ slotProps.fname }} {{ slotProps.lname }}
  </template>
</name-list>
<name-list >
  <template v-slot:default="slotProps">
    {{ slotProps.lname }}, {{ slotProps.fname }} 
  </template>
</name-list>
<name-list >
  <template v-slot:default="slotProps">
     {{ slotProps.fname }} 
  </template>
</name-list>
  </div>
</template>
<script>
import NameList from './components/NameList.vue'
export default{
  components: {NameList  },
  name:'app',
  data(){
    return {
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.underline {
  text-decoration: underline;
}
.promoted {
  font-style: italic;
}
.new {
  color: olivedrab;
}
.sold-out {
  color: red;
}
label {
  font-weight: bold;
  display: flex;
  margin-bottom: 5px;
}

input + label {
  font-weight: bold;
  display: inline-flex;
  margin-right: 20px;
}


#heading{
  color: dodgerblue;
  font-size: 50px;
  font-weight: bold;
  background-color: gold;
}
</style>

<template>
  <h2>Root Component username is {{ name }}</h2>
<h2><CompinentC /></h2>
<h2><ComponentE/></h2>
<h2><ComponentF /></h2>
</template>
<script>
import CompinentC from './components/CompinentC.vue'
import ComponentE from './components/ComponentE.vue';
import ComponentF from './components/ComponentF.vue';
export default {
  name:'app',
  components:{
    CompinentC,
    ComponentF,
    ComponentE
},
  data(){
return {
  name:'Yusf-eng'
}
  },
  provide:
    { username:"Yusif-eng"
  }
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

input[type='text'],
textarea,
select {
  display: block;
  width: 400px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
}
#heading{
  color: dodgerblue;
  font-size: 50px;
  font-weight: bold;
  background-color: gold;
}
</style>

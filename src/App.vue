
<template>
  <div >
  <ccounter-click/>
  <ccount-hover />
  </div>
</template>
<script>
import CcounterClick from './compositionApi/CcounterClick.vue'
import CcountHover from './compositionApi/CcountHover.vue'

export default{
  components: {CcounterClick, CcountHover  },
  name:'app',

  
}
</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h4{color: dodgerblue;}
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

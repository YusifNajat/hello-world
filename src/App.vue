
<template>
  <div >
    <!-- <button @click="activeTab='tabA'">Tab A</button>
    <button  @click="activeTab='tabB'">Tab B</button>
    <button  @click="activeTab='tabC'">Tab C</button>
<keep-alive>
  <component :is="activeTab"/>
</keep-alive> -->
<teleport to="#teleport-root">
<tele-port-component />
</teleport>
  </div>
</template>
<script>
import TelePortComponent from './components/TelePortComponent.vue'
export default{
  components: {TelePortComponent  },
  name:'app',
  data(){
    return {
    }
  },

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

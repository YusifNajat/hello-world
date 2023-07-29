
<template>
  <div >
 <CardComponent>
  <h2>card component 1</h2>
 </CardComponent>
 <CardComponent>
  <h2>card component 2</h2>
  <img src="https://picsum.photos/200" alt="">
 </CardComponent>
 <CardComponent>
  <h2>card component 3</h2>
  <button>view details</button>
 </CardComponent>
  <CardComponent>
    <template v-slot:header>
      <h2>card component 1</h2>
    </template>
    <template v-slot:content>
      <img src="https://picsum.photos/200" alt="">
    </template>
    <template v-slot:footer>
      <button>view details</button>
    </template>
  </CardComponent>
  </div>
</template>
<script>
import CardComponent from './components/CardComponent.vue'
export default{
  components: { CardComponent },
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

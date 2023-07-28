
<template>
  <div>
    <button @click="showpopup=true">show pop up</button>
    <pop-up v-show="showpopup" @closePopup="closePopup_"/>
  </div>
</template>
<script>
import PopUp from './components/PopUp.vue'
export default{
  components: { PopUp },
  name:'app',
  data(){
    return {
      showpopup:false
    }
  },
  methods:{
    closePopup_(name){
      console.log('name', name)
      this.showpopup=false
    }
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

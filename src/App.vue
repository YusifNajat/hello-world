<template>
<div>
  <pre>{{JSON.stringify(formValues,null,2)}}</pre>
<div v-for="skill in formValues.staticSkills" :key="skill">
  <input type="checkbox" id="skills-code" :value="skill" v-model="formValues.skills">
  <label for="skills-code">{{skill}}</label>
</div>
</div>
</template>
<script>
export default{
  name:"app",
  data(){
    return {
     formValues:{
      staticSkills:['html','css','js','vue','react','anguler','node','laravel'],
      skills:[]
     }
    }
  },
  methods:{
    onSubmitForm(){
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
</style>

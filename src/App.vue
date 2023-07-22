<template>
<div>
  <div>
  <pre>
    {{JSON.stringify(formValue,null,2)}}
  </pre>
</div>
<form @submit.prevent="onSubmitForm">
  <div>
  <label for="name">Name</label>
  <input type="text" id="name" v-model.trim.lazy="formValue.name">
</div>
  <div>
  <label for="age">age</label>
  <input type="number" id="age" v-model.number="formValue.age">
</div>
<div>
  <label for="profile-summery">Profile Summery</label>
  <textarea id="profile-summery" v-model="formValue.profilesummery"/>
</div>
<div>
  <label for="country">Country</label>
  <select  id="country" v-model="formValue.country">
    <option value="">Choose</option>
     <option value="Iraq">Iraq</option>
      <option value="Kurdistan">Kurdistan</option>
       <option value="Erbil">Erbil</option>
  </select>
</div>
<div>
  <label for="job-location">Job Location</label>
  <select  id="job-location" multiple v-model="formValue.joblocation">
    <option value="">Choose</option>
     <option value="Iraq">Iraq</option>
      <option value="Kurdistan">Kurdistan</option>
       <option value="Erbil">Erbil</option>
  </select>
</div>
<div>
  <input type="checkbox" id="work-remotly" v-model="formValue.workremote" true-value="yes" false-value="no">
    <label for="work-remotly">Work Remotly</label>
</div>
<div>
  <label> Skill Sets</label>
    <input type="checkbox" id="html" value="html" v-model="formValue.sckillsincode">
    <label for="html">HTML</label>
       <input type="checkbox" id="java-script" value="java-script" v-model="formValue.sckillsincode">
    <label for="java-script">JS</label>
       <input type="checkbox" id="css" value="css" v-model="formValue.sckillsincode">
    <label for="css">CSS</label>
</div>
<div>
  <label> yesr of Experinse</label>
    <input type="radio" id="10-yaers" value="10-yaers" v-model="formValue.userexprence">
    <label for="10-yaers">10 yers</label>
       <input type="radio" id="2-yers" value="2-yers" v-model="formValue.userexprence">
    <label for="2-yers">two yers</label>
       <input type="radio" id="5-years" value="5-years" v-model="formValue.userexprence">
    <label for="5-years">five years</label>
</div>
<div>
  <!-- <div for="scills" v-for="scill in formValue.skills" :key="scill"> -->
        <!-- <label v-for="scill in formValue.skills" :key="scill"> 
             <input  type="checkbox" id="scills" :value="scill" v-model="formValue.sckillsincode" />
              {{scill}}</label> -->
  <!-- </div> -->
</div>
<div>
  <br/>
  <button @keyup.enter="onSubmitForm">Submit Button</button>
</div>
</form>
</div>
</template>
<script>
export default{
  name:"app",
  data(){
    return {
      formValue:{
        name:'',
        profilesummery:'',
        country:'',
        joblocation:[],
        gender:'',
        workremote:"no",
        skills:['html','css','vue','js','react','laravel'],
        sckillsincode:[],
        userexprence:'',
        age:null
      }
    }
  },
  methods:{
    onSubmitForm(){
      console.log('this.formValue', this.formValue)
    }
  }

}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
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

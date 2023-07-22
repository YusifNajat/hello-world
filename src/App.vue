<template>
<div>
<h2>fullName - {{fname}} {{lname}} </h2>
<h2>computed properies - {{fullname()}} </h2>
<h2>Tottal is {{items.reduce((acc,curr)=>acc+curr.price,0)}} </h2>
<h2>total in computed properies {{total()}}</h2>
</div>
</template>
<script>
export default{
  name:"app",
  data(){
    return {
     fname:"yusif",
     lname:"najat",
     items:[
      {name:"tv",price:100},
      {name:"phone",price:200},
      {name:"laptop",price:300}
     ]
    }
  },
  methods:{
    fullname(){
      return `${this.fname} ${this.lname}`
    },
    total(){
      return this.items.reduce((acc,curr)=>acc+curr.price,0)
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

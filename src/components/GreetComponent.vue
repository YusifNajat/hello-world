<template>
  <h2>
Hello {{name}} {{position }}
  </h2>
</template>

<script>
  export default {
    name:'GreetComponent',
    props:['name','nickname','position']
  }
</script>

<style scoped>

</style>
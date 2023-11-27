<template>
  <header>
    <h1> {{ title }}</h1>
   
  </header>
</template>

<script>
  import {ref} from 'vue'

export default {
  props:['title'],
 setup()

 {



 }
 
};
</script>

<style scoped>
/* Adding here header styling here */
header {
  background-color: #3498db;
  color: #fff;
  padding: 10px;
  text-align: center;
}

h1 {
  margin: 0;
}
</style>
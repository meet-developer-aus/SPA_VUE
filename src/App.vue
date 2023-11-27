<template>
 <div>
   

   

    <Modal @closeModal="closeModal">
      
     
    </Modal>
  </div>
  
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import  Modal from  './components/Modal.vue'
import { ref } from 'vue'

export default {
   name: 'App',
  components: {
    Modal,
  },
  setup()
  {


const closeModal=() =>{
      // Handle modal close if needed
    }

    return {closeModal}
  }
  
};
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
</style>

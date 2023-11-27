<template>
 <div>
  
<AppHeader :title="app_title" />
   
   <div class="main-content">

    <Modal @closeModal="closeModal">
      
     
    </Modal>
   </div>
<Footer />
    

  </div>
  
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import AppHeader from './components/AppHeader.vue';
import Footer from './components/Footer.vue';
import  Modal from  './components/Modal.vue'

import { ref } from 'vue'

export default {
   name: 'App',
  components: {
    Modal, AppHeader, Footer
  },
  setup()
  {
  const app_title=ref('Welcome to Accommodaiton Options App')

const closeModal=() =>{
      // Handle modal close if needed
    }

    return {closeModal, app_title}
  },
  props: true
  
};
</script>
<style>
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
}

/* Main content styles done as follow*/
.main-content {
  min-height: calc(100vh - 60px); /* Adjustments on based on header and footer height */
  padding-top: 60px; /* Adjusting on header height */
  padding-bottom: 60px; /* Adjustmnts based on footer height */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 /* margin-top: 60px; */
}
</style>

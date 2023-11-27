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
import axios from 'axios'
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
  props: true,
   mounted() {
    //  Making a GET request to php backend 
    axios.get('http://localhost:8000/')
      .then(response => {
      
       const regionData = response.data.region.Region;
console.log('Region Data:', regionData);
// Storing region data in local storage
    localStorage.setItem('regionData', JSON.stringify(regionData));

// Accessing Area data
const areaData = response.data.area.Area;
console.log('Area Data:', areaData);
// Sarea data store in local storage
    localStorage.setItem('areaData', JSON.stringify(areaData));

    


// Access Location data from respose
const locationData = response.data.location.Location;
console.log('Location Data:', locationData);
// location data storing on to local storage
    localStorage.setItem('locationData', JSON.stringify(locationData));
       

      })
      
      .catch(error => {
        // Handling errors
        this.error = error.message;
      });
  },
  
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

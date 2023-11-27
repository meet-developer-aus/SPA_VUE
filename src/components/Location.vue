<template>

  <div class="Location">
    

    <label for="location">Location</label>
    <select v-model="selectedLocation" @change="onLocationChange" id="location">
      <option value="">Select location</option>
      <option v-for="location in locations" :key="location.LocationId" :value="location.LocationId">{{ location.Name }}</option>
    </select>


  </div>
</template>

<script>
import {ref, watchEffect } from 'vue'

import locationJson from '../../data/location.json'


export default { 
 
    props: [ 'myAreaId','RegionId'],
  

    setup(props){
 const selectedLocation=ref(null)

 // pull from local storage of browser
     const storedLocationData = localStorage.getItem('locationData');
    const locationJson= storedLocationData ? JSON.parse(storedLocationData) : null;
    console.log('Location Data:',locationJson);

  const locations=ref(null)
   locations.value=locationJson.filter((mylocation)=> mylocation.AreaId==props.myAreaId )
   console.log(locations)


 watchEffect(() => {
      console.log('AreaId changed:', props.myAreaId);
      locations.value = locationJson.filter((mylocation) => mylocation.AreaId== props.myAreaId);
    });
      
        
const onLocationChange=() =>{
      // Reset selected location when the area changes
      console.log('Selected Location:', selectedLocation.value);
    
    }


  



return{  locations, onLocationChange, selectedLocation}
    },
   
    

}
</script>

<style>

</style>
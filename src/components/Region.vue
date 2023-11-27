<template>
  <div class="Region">
    <div class="dropdown-container">
      <label for="region">Region</label>
      <select v-model="selectedRegion" @change="onRegionChange" id="region">
        <option value="">Select a region</option>
        <option v-for="region in regions" :key="region.RegionId" :value="region.RegionId">{{ region.Name }}</option>
      </select>
    </div>

    <div class="dropdown-container">
      <Area :RegionId="selectedRegion"  />
    </div>
 
  </div>
</template>

<script>
import {ref } from 'vue'
import regionJson from '../../data/region.json'
import  Area from './Area.vue'
export default {
    components: {
   Area
  },
   props: true,

    setup(){

const regions= regionJson;
//const showArea=ref(null)

      const selectedRegion=ref(null)
const onRegionChange = () => {
     
    
      console.log('Selected Region:', selectedRegion.value);

      
     
     // showArea.value = true;
    };


return{ regions, onRegionChange,selectedRegion}
    }
   
    

}
</script>

<style scoped>
.Region {
  display: flex;
}

.dropdown-container {
  margin-right: 10px; /* Adjust spacing between dropdowns */
}
</style>
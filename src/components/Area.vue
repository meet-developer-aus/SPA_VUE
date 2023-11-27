<template>
  <div class="Area">
    

    <label for="area">Area</label>
    <select v-model="selectedArea" @change="onAreaChange" id="area">
      <option value="">Select area</option>
      <option v-for="area in areas" :key="area.AreaId" :value="area.AreaId">{{ area.Name }}</option>
    </select>

  <div class="dropdown-container">
      <Location :myAreaId="selectedArea"  :RegionId="RegionId"/>
    </div>
    
  </div>
</template>

<script>
import {ref, watchEffect } from 'vue'

import areaJson from '../../data/area.json'
import  Location from './Location.vue'

export default { 
 
    props: [ 'RegionId'],
  components: {
   Location
  },
   //props: true,
    setup(props){
  // const showLocation=ref(false)

  const areas=ref(null)
   areas.value=areaJson.filter((myarea)=> myarea.DomesticRegionId==props.RegionId )
   console.log(areas)
 

 watchEffect(() => {
      console.log('RegionId changed:', props.RegionId);
      areas.value = areaJson.filter((myarea) => myarea.DomesticRegionId == props.RegionId);
    });
      
         const selectedArea=ref(null)
const onAreaChange=() =>{
      // Reset selected area when the region changes
      console.log('Selected Area:', selectedArea.value);
      // showLocation.value=true
    
    }


  



return{  areas, onAreaChange, selectedArea}
    }
 
    

}
</script>

<style scoped>

.DropdownsContainer {
  display: flex;
}

.Area,
.Location {
  margin-right: 10px;
}

</style>>

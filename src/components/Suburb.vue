<template>
  
   <div class="Suburb">
    <label for="suburb">Suburb</label>
    <select v-model="selectedSuburb" @change="onSuperbChange" id="superb" class="dropdown">
      <option value="">Select Suburb</option>
      <option v-for="suburb in suburbs" :key="suburb.SuburbId" :value="suburb.SuburbId">
        {{ suburb.Name }}
      </option>
    </select>

    
    
  </div>
</template>

<script>
import { ref, watch } from "vue";
export default {
    props: {
    myAreaId: String,
    RegionId: String
  },

setup(props)
{

const selectedSuburb=ref(null)
//const  locations=ref(null)

  
    const suburbs = ref([]);

// pull from local storage of browser and locationData has suburb detials specific to area
    const storedLocationData = localStorage.getItem("locationData");
    const locationJson = storedLocationData ? JSON.parse(storedLocationData) : null;
// watcheffect is used to check the prop value may get delayed due to asynchnonouses call, so tacking to move further

//const allSuburbs = [];
watch(() => props.myAreaId, (newValue, oldValue) => {
  console.log('someReactiveData changed:', newValue);
      var locations= locationJson.filter((mylocation) => mylocation.AreaId === props.myAreaId);
 locations.forEach(function(location, index) {


  if (location.Suburbs && location.Suburbs.suburb) {
    // If Suburbs property exists and contains suburbs
    suburbs.value.push(...location.Suburbs.suburb);
  }
//  console.log(location.Suburbs.suburb)


});



console.log(suburbs)
//incase change in region, set the suburb to remove existing vlaue if any
watch(() => props.RegionId, (newValue, oldValue) => {
suburbs.value=[];

})






});




return {selectedSuburb, suburbs}
}
}
</script>

<style>

</style>
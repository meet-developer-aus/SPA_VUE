<template>
  <div class="Location">
    <label for="location2">Location</label>
    <select v-model="selectedLocation" @change="onLocationChange" id="location1" class="dropdown">
      <option value="">Select location</option>
      <option v-for="location in locations" :key="location.AreaId" :value="location.AreaId">
        {{ location.Name }}
      </option>
    </select>

    <!-- Nested dropdown for suburbs -->
    <div v-if="selectedLocation">
      <label for="suburb">Suburb</label>
      <select v-model="selectedSuburb" id="suburb" class="dropdown">
        <option value="">Select suburb</option>
        <option v-for="suburb in getSuburbs()" :key="suburb.SuburbId" :value="suburb.SuburbId">
          {{ suburb.Name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";

export default {
  props: {
    myAreaId1: String,
    RegionId: String
  },
  setup(props) {
    const selectedLocation = ref(null);
    const selectedSuburb = ref(null);

    // pull from local storage of browser
    const storedLocationData = localStorage.getItem("locationData");
    const locationJson = storedLocationData ? JSON.parse(storedLocationData) : null;

    const locations = ref(null);

    watchEffect(() => {
      console.log("AreaId changed******:", props.myAreaId1);

      locations.value = locationJson.filter((mylocation) => mylocation.AreaId === props.myAreaId1);
      console.log(locations.value);

    });

    const onLocationChange = () => {
      console.log("Selected Location:", selectedLocation.value);
      // Additional logic or actions based on the selected location
    };
    

    // Function to get suburbs, checks if selectedLocation is defined
    const getSuburbs = () => {

      
      return selectedLocation && selectedLocation.Suburbs ? selectedLocation.Suburbs.suburb : [];
    };

    return { locations, onLocationChange, selectedLocation, selectedSuburb, getSuburbs };
  }
};
</script>

<style>

</style>

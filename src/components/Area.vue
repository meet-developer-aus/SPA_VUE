<template>
  <div class="Area">
    <label for="area">Area</label>
    <select
      v-model="selectedArea"
      @change="onAreaChange"
      id="area"
      class="dropdown">
      <option value="">Select area</option>
      <option v-for="area in areas" :key="area.AreaId" :value="area.AreaId">
        {{ area.Name }}
      </option>
    </select>

    <div class="dropdown-container">
      <br />
      <Location :myAreaId1="selectedArea" :RegionId="RegionId" />
    </div>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";

import Location from "./Location.vue";
import { getItemFromLocalStorage } from "../composables/localStorageUtils";
export default {
  props: {RegionId: String},
  components: {
    Location,
  },
  setup(props) {
    // const showLocation=ref(false)
    // Accessing Area data from localStorage
    // pull from local storage of browser
    
    // console.log(areas);
 const areas = ref(null);
    watchEffect(() => {

      const storedAreaData = localStorage.getItem("areaData");
    const areaJson = storedAreaData ? JSON.parse(storedAreaData) : null;
    //console.log("Area Data:", areaJson);

   
    areas.value = areaJson.filter(
      (myarea) => myarea.DomesticRegionId == props.RegionId
    );
      // console.log("RegionId changed:", props.RegionId);
      areas.value = areaJson.filter(
        (myarea) => myarea.DomesticRegionId == props.RegionId
      );
    });

    const selectedArea = ref(null);
    const onAreaChange = () => {
      // Reset selected area when the region changes
      // console.log("Selected Area:", selectedArea.value);
      // showLocation.value=true
    };

    return { areas, onAreaChange, selectedArea };
  },
};
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

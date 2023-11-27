<template>
  <div class="Region">
    <div class="dropdown-container">
      <label for="region">Region</label>
      <select
        v-model="selectedRegion"
        @change="onRegionChange"
        id="region"
        class="dropdown"
      >
        <option value="">Select a region</option>
        <option
          v-for="region in regions"
          :key="region.RegionId"
          :value="region.RegionId"
        >
          {{ region.Name }}
        </option>
      </select>
    </div>

    <div class="dropdown-container">
      <Area :RegionId="selectedRegion" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

import Area from "./Area.vue";
import { getItemFromLocalStorage } from "../composables/localStorageUtils";
export default {
  components: {
    Area,
  },

  setup() {
    const regions = ref(null);

    // pull from local storage of browser
    const storedRegionData = localStorage.getItem("regionData");
    regions.value = storedRegionData ? JSON.parse(storedRegionData) : null;
    //console.log("Region Data:", regions.value);

    //const showArea=ref(null)

    const selectedRegion = ref(null);
    const onRegionChange = () => {
      //console.log("Selected Region:", selectedRegion.value);

      // showArea.value = true;
    };

    return { regions, onRegionChange, selectedRegion };
  },
};
</script>

<style scoped>
.Region {
  display: flex;
}

.dropdown-container {
  margin-right: 10px; /* Adjust spacing between dropdowns */
}
</style>
<template>
  <div>
    <AppHeader :title="app_title" />

    <div class="main-content">
      
      <!-- Conditionally render the Modal component based on showModal value -->
      <Modal v-if="showModal" @closeModal="closeModal">
        <!-- Content of the Modal -->
      </Modal>
    </div>

    <Footer />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import Footer from "./components/Footer.vue";
import Modal from "./components/Modal.vue";
import axios from "axios";
import { ref, onMounted } from "vue";

export default {
  name: "App",
  components: {
    Modal,
    AppHeader,
    Footer,
  },
  
  setup() {
    const showModal = ref(false);
    const app_title = ref("Welcome to Accommodation Options App");

    const closeModal = () => {
      // Handle modal close if needed
    };

    return { closeModal, app_title, showModal };
  },

  mounted() {
    // Check if the data exists in localStorage and is less than 24 hours old
    if (process.env.NODE_ENV === 'development') {
  // Code to run in development mode
  console.log('Development mode');
} else if (process.env.NODE_ENV === 'production') {
  // Code to run in production mode
  console.log('Production mode');
} else {
  // Code for other environments (if needed)
  console.log('Other environment');
}

    const storedTimestamp = localStorage.getItem("timestamp");
const currentTime = new Date().getTime();
const twentyFourHours = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

console.log(currentTime)
console.log(storedTimestamp)
// check keys exists for regiondata, area data, location data and it is less than 24 hours
if (localStorage.getItem("regionData") &&
    localStorage.getItem("areaData") &&
    localStorage.getItem("locationData") && storedTimestamp && currentTime - parseInt(storedTimestamp) < twentyFourHours) {
 
     console.log("Data is fresh, showing Modal");
      // Data is fresh, retrieve it from localStorage
      const regionData = JSON.parse(localStorage.getItem("regionData"));
      const areaData = JSON.parse(localStorage.getItem("areaData"));
      const locationData = JSON.parse(localStorage.getItem("locationData"));

      console.log("Region Data:", regionData);
      console.log("Area Data:", areaData);
      console.log("Location Data:", locationData);
      this.showModal = true; // Set showModal to true to display the Modal
    } 
    
    else {
      if (!storedTimestamp) {
  localStorage.setItem("timestamp", new Date().getTime());
}
      console.log("Data is not fresh, fetching from the backend");
      // Data is not fresh, fetch from the backend which mapped in docker service as phpbackend

      axios.defaults.withCredentials = true;

      axios
        .get("http://phpbackend:80/index.php/api") 
        .then((response) => {
          // Process and store data in local storage
          const regionData = response.data.region.Region;
          const areaData = response.data.area.Area;
          const locationData = response.data.location.Location;

          localStorage.setItem("regionData", JSON.stringify(regionData));
          localStorage.setItem("areaData", JSON.stringify(areaData));
          localStorage.setItem("locationData", JSON.stringify(locationData));

          console.log("Region Data:", regionData);
          console.log("Area Data:", areaData);
          console.log("Location Data:", locationData);

         showModal.value = true; // Set showModal to true to display the Modal
        })
        .catch((error) => {
          console.error("Error fetching data:", error.message);
          // Handle errors
        });
    }
  },
};
</script>

<style>
/*  styles  */
</style>

<template>
  <div></div>
  <div class="modal-overlay" v-if="isVisible">
    <div class="modal">
      <div class="modal-header">
        <h2>{{ title }}</h2>
        <button @click="closeModal">&times;</button>
      </div>
      <div class="modal-content">
        <Region />

        <slot></slot>
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from "vue";
import Region from "./Region.vue";
export default {
  name: "Modal",

  components: { Region },
  setup() {
    let isVisible = ref(true);
    const title = ref("Accommodation Options in Sydney");

    //  const openModal=() =>{
    //       isVisible.value = true;
    //     }

    const closeModal = () => {
      isVisible.value = false;
    };

    return {
      isVisible,
      title,
      closeModal,
    };
  },
};
</script>
<style scoped>
/* Modal Overlay styless*/
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(
    0,
    0,
    0,
    0.6
  ); /* Use a semi-transparent black for the overlay */
  color: #fff; /* Change text color to white */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

/* Modal styless*/
.modal {
  background: #3498db; /* Change background color to blue for the modal */
  padding: 20px;
  border-radius: 8px;
  width: 800px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: #fff; /* Set text color for modal content to white */
}

/* Modal Header */
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
}

.modal-header h2 {
  margin: 0;
}

/* Close Button */
.close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #fff; /* Set text color for close button to white */
}

.close-btn:hover {
  color: #ccc; /* Change hover color for close button */
}

/* Modal Content */
.modal-content {
  /* content styling here */
}
</style>

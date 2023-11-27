<template>

<div>
    </div><div class="modal-overlay" v-if="isVisible">
    <div class="modal">
      <div class="modal-header">
        <h2>{{ title }}</h2>
        <button @click="closeModal">&times;</button>
      </div>
      <div class="modal-content">
      

        <slot></slot>
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from 'vue'
export default {
  name: 'Modal',
  setup()
  {

    let  isVisible= ref(true);
    const title=ref('Accommodation Options in Sydney');

//  const openModal=() =>{
//       isVisible.value = true;
//     }

    const closeModal=() =>{
      isVisible.value= false;
    }

    return {
      isVisible, title,closeModal
      
    }
  
    
  }

  
  
}
</script>

<style scoped>
/* Modal Overlay styless*/
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

/* Modal styless*/
.modal {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 600px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
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
  color: #555;
}

.close-btn:hover {
  color: #333;
}

/* Modal Content */
.modal-content {
  /*  content styling here */
}

</style>

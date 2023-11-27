const getItemFromLocalStorage = (key) => {
    const item = localStorage.getItem(key);
    try {
      // Try to parse the stored JSON data
      return JSON.parse(item);
    } catch (error) {
      // Handle parsing error or return the raw data if parsing fails
      return item;
    }
  };
  
  export { getItemFromLocalStorage };
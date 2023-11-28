VueJS3 Frontend Application - Accommodation Opti

which depends on backend APP available at https://github.com/meet-developer-aus/DataProvider_Backend.git


Application Structure
App.vue

    The main component serves as entry point for the application.
    Imports and utilizes other components like AppHeader, Footer, and Modal.
    Fetches data from the backend and displays a modal based on certain conditions.
    Modal render components (Region component, Area component and Suburb component)
    Region->Area->Suburb components has parent->child->grand child logic in passing props in vue

Modal.vue

    Represents a modal overlay that lists regions, areas, and suburbs for accommodation filtering.
    First show a Region component within the modal.
    Uses conditional rendering based on the isVisible property.
    

Region.vue

    Displays a dropdown for selecting a region.
    Dynamically loads regions from local storage or fetches them from the backend.
    Links to the Area component for further filtering.

Suburb.vue

    Displays a dropdown for selecting a suburb within a selected area.
    Populates the dropdown based on the selected area.
    Handles changes in the selected area to update the list of suburbs.

localStorageUtils.js

    Utility functions for handling data retrieval from local storage.
    Provides a function to parse JSON data from local storage.

Instructions
Installation via docker which install both this freondend app at 
https://github.com/meet-developer-aus/SPA_VUE.git
and also backend app 
https://github.com/meet-developer-aus/DataProvider_Backend.git


dcoker install as standalon app 


note: since php backend app use API ket to fetch, create .env file in folder where docker-compose.yml 
.env file needs to have API key 
as API_KEY=***********

docker-compose up 


Navigate to the Project Directory:


cd vuejs3-accommodation-app

Install Dependencies:

bash

    npm install

Usage

    Run the VueJS3 Frontend:

    bash

    npm run serve

        The application will be accessible at http://localhost:8080 by default.

    Access the Application:
        Open your browser and navigate to http://localhost:8080.
        Explore the accommodation options by selecting regions, areas, and suburbs.

    View Modal:
        The application checks if data is present in local storage and less than 24 hours old.
        If fresh, a modal is displayed with region, area, and location details.
        If not fresh, data is fetched from the backend and stored in local storage.

Configuration

    Adjust the CORS headers in App.vue to match your backend API URL.
    The application makes use of Axios for HTTP requests and Vue3 for component-based structure.

Dependencies

    VueJS3: JavaScript framework for building user interfaces.
    Axios: Promise-based HTTP client for making requests.
    Vue CLI: Standard tooling for Vue.js development.

Author

    Romeo Antony

License

MIT License 



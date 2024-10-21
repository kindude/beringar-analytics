<template>
  <div id="app" class="container mt-5">

    <div class="col-md-4">
        <div class="form-group">
          <label for="buildingSelect">Select Building</label>
          <select class="form-control" id="buildingSelect" v-model="selectedBuilding" @change="filterByBuilding">
            <option v-for="building in buildings" :key="building.id" :value="building.id">
              {{ building.name }}
            </option>
          </select>
        </div>
      </div>


      <div v-if="loading">
      <p>Loading data, please wait...</p>
    </div>

    <div v-if="!loading" class="row">
      <!-- Table Section -->
      <div class="col-md-8">
        <div class="table-responsive">
          <table class="table table-striped table-bordered table-hover">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">ATTEC ID</th>
                <th scope="col">Lora Address</th>
                <th scope="col">Occupancy</th>
                <th scope="col">Temp (°C)</th>
                <th scope="col">Noise (dB)</th>
                <th scope="col">CO2 (ppm)</th>
                <th scope="col">AQ 1</th>
                <th scope="col">AQ 2</th>
                <th scope="col">Humidity (%)</th>
                <th scope="col">Pressure (hPa)</th>
                <th scope="col">Lux</th>
                <th scope="col">Bearing (°)</th>
                <th scope="col">Time (YYYY-MM-DD HH:mm:ss)</th>
                <th scope="col">Device UUID</th>
                <th scope="col">Host MCU</th>
                <th scope="col">Lora MCU</th>
                <th scope="col">EeDsp</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(record, index) in paginatedData" :key="record.id">
                <td>{{ (currentPage - 1) * itemsPerPage + index + 1 }}</td>
                <td>{{ record.detail.ateccid }}</td>
                <td>{{ record.detail.physicalsensorid }}</td>
                <td>{{ record.detail.occupancy }}</td>
                <td>{{ record.detail.temperature }}</td>
                <td>{{ record.detail.noise }}</td>
                <td>{{ record.detail.co2 }}</td>
                <td>{{ record.detail.aqi1 }}</td>
                <td>{{ record.detail.aqi2 }}</td>
                <td>{{ record.detail.humid }}</td>
                <td>{{ record.detail.pressure }}</td>
                <td>{{ record.detail.lux }}</td>
                <td>{{ record.detail.bearing }}</td>
                <td>{{ formatDate(record.updated) }}</td>
                <td>{{ record.detail.deviceid }}</td>
                <td>{{ record.deviceCache?.shadow_event_document_json?.current?.state?.reported?.softwareRevision?.hostMcu }}</td>
                <td>{{ record.deviceCache?.shadow_event_document_json?.current?.state?.reported?.softwareRevision?.loraMcu }}</td>
                <td>{{ record.deviceCache?.shadow_event_document_json?.current?.state?.reported?.softwareRevision?.eeDsp }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Pagination Component -->
        <div class="pagination mt-4">
          <nav aria-label="Page navigation">
            <ul class="pagination">
              <li class="page-item" :class="{ disabled: currentPage === 1 }">
                <a class="page-link" @click.prevent="currentPage--">Previous</a>
              </li>
              <li class="page-item" v-for="page in totalPages" :key="page" :class="{ active: currentPage === page }">
                <a class="page-link" @click.prevent="currentPage = page">{{ page }}</a>
              </li>
              <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                <a class="page-link" @click.prevent="currentPage++">Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <!-- Analytics Section -->
      <div class="col-md-4">
        <div class="analytics mt-4">
          <h3 class="text-center">Analytics</h3>
          <div class="row">
            <div class="col-md-12 mb-3" v-if="averageTemperature || averageHumidity || maxCO2">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Average Temperature (°C)</h5>
                  <p class="card-text">{{ averageTemperature.toFixed(2) }}</p>
                </div>
              </div>
            </div>
            <div class="col-md-12 mb-3">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Average Humidity (%)</h5>
                  <p class="card-text">{{ averageHumidity.toFixed(2) }}</p>
                </div>
              </div>
            </div>
            <div class="col-md-12 mb-3">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Maximum CO2 (ppm)</h5>
                  <p class="card-text">{{ maxCO2 }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="">
          <h3 class="text-center">CO2 Levels Over Time</h3>
          <CO2Chart 
            v-if="co2Data.length > 0 && timestamps.length > 0" 
            :co2Data="co2Data" 
            :timestamps="timestamps" 
            class="" 
            style="height: 1000px;"  
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { onMounted, ref, computed } from 'vue';
import CO2Chart from './components/CO2Chart.vue';


export default {
  name: 'App',
  components: {
    CO2Chart, 
  },
  setup() {
    const username = 'george_dudnik';
    const password = '7355608Egor$';
    const authString = btoa(`${username}:${password}`);
    const data = ref([]);
    const buildings = ref([]);
    const selectedBuilding = ref(null);
    const itemsPerPage = 10;
    const currentPage = ref(1);
    const loading = ref(false);

    const fetchDeviceCache = async (record) => {
      try {
        const response = await axios.get(`https://console.beringar.co.uk/privateapi/device/cache/${record.detail.deviceid}/`, {
          headers: {
            'Authorization': `Basic ${authString}`
          }
        });
        record.deviceCache = response.data; 
      } catch (error) {
        console.error('Error fetching device cache:', error);
      }
    };

    const fetchData = async (id) => {
      loading.value = true;
      try {
        const response = await axios.get(`https://console.beringar.co.uk/privateapi/sensorlatest/building/${id}/`, {
          headers: {
            'Authorization': `Basic ${authString}`
          }
        });
        data.value = response.data;
        await Promise.all(data.value.map(record => fetchDeviceCache(record)));
        console.log('All device caches fetched');
      } catch (error) {
        console.error('Error fetching protected data:', error);
      }
    };

    const fetchBuildings = async () => {
  try {
    const response = await axios.get("https://console.beringar.co.uk/privateapi/building/", {
      headers: {
        'Authorization': `Basic ${authString}`
      }
    });

    console.log(response.data); // Log the full response to check structure

    // Assuming response.data contains an array of buildings directly
    buildings.value = response.data; 

    // If buildings are inside another object like {data: [..]}
    // buildings.value = response.data.data; // Adjust this based on actual structure

  } catch (error) {
    console.error('Error fetching building data:', error);
  }
};

    onMounted(fetchBuildings);

    onMounted(fetchData);

    const filterByBuilding = () => {
      if (selectedBuilding.value) {
        fetchData(selectedBuilding.value);
      }
    };
    const averageTemperature = computed(() => {
      const temperatures = data.value.map(record => record.detail.temperature).filter(Boolean);
      const total = temperatures.reduce((sum, temp) => sum + temp, 0);
      return (total / temperatures.length) || 0; 
    });

    const averageHumidity = computed(() => {
      const humidities = data.value.map(record => record.detail.humid).filter(Boolean);
      const total = humidities.reduce((sum, hum) => sum + hum, 0);
      return (total / humidities.length) || 0; 
    });

    const maxCO2 = computed(() => {
      const co2Levels = data.value.map(record => record.detail.co2).filter(Boolean);
      return Math.max(...co2Levels) || 0;
    });

    const totalPages = computed(() => {

      return Math.ceil(data.value.length / itemsPerPage);

    });

    const paginatedData = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return data.value.slice(start, end);
    });

    const co2Data = computed(() => {
      return data.value ? data.value.map(record => record.detail.co2) : [];
    });

    const timestamps = computed(() => {
      return data.value ? data.value.map(record => formatDate(record.updated)) : [];
    });

    const formatDate = (dateString) => {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    };

    

    return { data, buildings, currentPage, itemsPerPage, averageTemperature, averageHumidity, maxCO2, totalPages, paginatedData, co2Data, timestamps, formatDate,
      selectedBuilding, filterByBuilding
     };
  },
  


    
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.table {
  margin-top: 20px;
}
.card {
  margin-bottom: 20px;
}
.pagination {
  justify-content: center;
}
</style>

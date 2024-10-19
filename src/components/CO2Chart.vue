<template>
    <div>
      <canvas id="co2Chart"></canvas>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  import { Chart, registerables } from 'chart.js';
  
  Chart.register(...registerables);
  
  export default {
    name: 'CO2Chart',
    props: {
      co2Data: {
        type: Array,
        required: true
      },
      timestamps: {
        type: Array,
        required: true
      }
    },
    setup(props) {
      const co2Chart = ref(null);
  
      onMounted(() => {
        const ctx = document.getElementById('co2Chart').getContext('2d');
        console.log(props.co2Data);
        co2Chart.value = new Chart(ctx, {
          type: 'line',
          data: {
            labels: props.timestamps,
            datasets: [
              {
                label: 'CO2 Levels (ppm)',
                data: props.co2Data,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 2,
                fill: true,
              },
            ],
          },
          options: {
            responsive: true,
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Time',
                },
              },
              y: {
                title: {
                  display: true,
                  text: 'CO2 Levels (ppm)',
                },
                beginAtZero: true,
              },
            },
          },
        });
      });
  
      onBeforeUnmount(() => {
        if (co2Chart.value) {
          co2Chart.value.destroy();
        }
      });
  
      return { co2Chart };
    },
  };
  </script>

<style>
.chart {
  width: 500px !important;  /* Full width */
  height: 400px;           /* Adjust height as needed */
}
</style>
  
  
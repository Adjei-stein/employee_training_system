import React from 'react';
import { Bar } from 'react-chartjs-2';
//import 'chartjs-plugin-category-scale'; // Import the plugin
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

// Register the plugin before creating the chart
Chart.register(CategoryScale);

function DashboardBarGraph() {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',],
    datasets: [
      {
        label: 'Completions in 2024',
        fontColor: 'white',
        backgroundColor: 'rgba(75,192,192)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        data: [65, 59, 80, 75, 92, 12, 1],
      },
      // Add more datasets as needed
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: 'white', // Color of the legend text
        },
      },
    },
    scales: {
      x: {
        type: 'category', // Use 'category' scale for the x-axis
        position: 'bottom',
        paddingRight: 10,
        grid: {
          color: '#777', // Light blue gridlines on the y-axis
        },
        ticks: {
          color: 'white', // Color of x-axis labels
        },
      },
      y: {
        beginAtZero: true,
        paddingBottom: 10,
        grid: {
          color: '#777', // Light blue gridlines on the y-axis
        },
        ticks: {
          color: 'white', // Color of x-axis labels
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: '100%', height: '200px' }}>
      <Bar data={data} options={options} width={'100%'} height={'50%'} />
    </div>
  );
}

export default DashboardBarGraph;

// import React from 'react';
// import { Bar } from 'react-chartjs-2'
import UserData1 from '../DataSets/DataBar.jsx';
// import {Chart as ChartJS} from 'chart.js/auto'

// function BarChart({chartData}) {
//     return <Bar style={{backgroundColor:"white", color:"black"}} data={chartData} />
// }

// export default BarChart;
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);



const options = {
  plugins: {
    legend: {
      labels: {
        color: 'black' // Set legend text color to black
      }
    },
    title: {
      display: true,
      text: 'Chart Title',
      color: 'black' // Set title color to black
    }
  },
  scales: {
    x: {
      ticks: {
        color: 'black' // X-axis labels color
      },
      grid: {
        color: 'black' // X-axis grid color
      }
    },
    y: {
      ticks: {
        color: 'black' // Y-axis labels color
      },
      grid: {
        color: 'black' // Y-axis grid color
      }
    }
  },
  backgroundColor: 'black' // This would typically apply to elements like tooltips
};

export default function BarChart({chartData}) {
  return (
    <div style={{ backgroundColor: 'transparent', padding: '10px' }}>
      <Bar data={chartData} options={options} />
    </div>
  );
}
// function BarChart({chartData}) {
//         return <Bar style={{backgroundColor:"black", options={options}}} data={chartData} />
//      }

// export default BarChart;

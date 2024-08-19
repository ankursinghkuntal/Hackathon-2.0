// import React from 'react';
// import { Line } from 'react-chartjs-2'
import UserData from '../DataSets/DataBar.jsx';
// import {Chart as ChartJS} from 'chart.js/auto'

// function LineChart({chartData}) {
//     return <Line  data={chartData} />
// }

// export default LineChart;
// import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// const chartData = {
//   // Your data here
// };

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
  elements: {
    line: {
      borderColor: 'black' // Line color
    },
    point: {
      backgroundColor: 'black' // Point color
    }
  }
};

export default function MyLineChart({chartData}) {
  return (
    <div style={{ backgroundColor: 'transparent', padding: '10px' }}>
      <Line data={chartData} options={options} />
    </div>
  );
}



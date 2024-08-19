// import React from 'react';
// import { PolarArea  } from 'react-chartjs-2'
import UserData from '../DataSets/DataBar.jsx';
// import {Chart as ChartJS} from 'chart.js/auto'

// function PolarChart({chartData}) {
//     return <PolarArea  data={chartData} />
// }

// export default PolarChart;
import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

// const chartData = {
//   // Your data here
// };

const options = {
  scales: {
    r: {
      angleLines: {
        color: 'black' // Set angle lines (radial grid lines) color to black
      },
      grid: {
        color: 'black' // Set grid lines color to black
      },
      ticks: {
        color: 'black' // Set tick labels color to black
      },
      pointLabels: {
        color: 'black' // Set labels at the edge of each segment to black
      }
    }
  },
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
  }
};

export default function MyPolarAreaChart({chartData}) {
  return (
    <div style={{ backgroundColor: 'transparent', padding: '10px' }}>
      <PolarArea data={chartData} options={options} />
    </div>
  );
}

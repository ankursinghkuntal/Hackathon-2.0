// import React from 'react';
// import { Pie } from 'react-chartjs-2'
import UserData from '../DataSets/DataBar.jsx';
// import {Chart as ChartJS} from 'chart.js/auto'

// function PieChart({chartData}) {
//     return <Pie  data={chartData} style={{"color":"black"}} />
// }

// export default PieChart;
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

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
  }
};

export default function MyPieChart({chartData}) {
  return (
    <div style={{ backgroundColor: 'transparent', padding: '10px' }}>
      <Pie data={chartData} options={options} />
    </div>
  );
}

import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({chartData}) => {
    console.log(chartData)
    const { openCount, inProgressCount, waitingCount, resolvedCount } = chartData;
    const counts = [openCount, inProgressCount, waitingCount, resolvedCount];
    const data = {
        labels: ['Open', 'In Progress', 'Waiting on client', 'Resolved'],
        datasets: [
          {
            label: '# of Votes',
            data: counts,
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(153, 102, 255, 0.5)',
              'rgba(255, 159, 64, 0.5)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 2,
          },
        ],
      };

  const options = {
    // You can customize options here
  };

  return <Pie data={data} options={options} />;
};

export default PieChart;

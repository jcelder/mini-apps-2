import React from 'react';
import { defaults, Bar } from 'react-chartjs-2';

const Chart = ({ data }) => {
  const timeSeries = {
    datasets: [
      {
        label: 'Price of Bitcoin(USD)',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data,
      },
    ],
  };

  return (
    data.length > 0 ? (
      <Bar
        data={timeSeries}
        width={1000}
        height={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            xAxes: [{
              type: 'time',
              distribution: 'series',
            }],
            yAxes: [{
                
            }]
          },
        }}
      />
    ) : null
  );
};

export default Chart;

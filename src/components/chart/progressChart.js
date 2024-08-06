import React from 'react';
import Chart from 'react-apexcharts';

const ProgressChart = () => {
  const chartOptions = {
    chart: {
      type: 'radialBar',
      height: 130,
      background: 'var(--th-secondary)',
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '40%',
        },
        track: {
          background: '#273164', // Color to match the provided image
        },
        dataLabels: {
          showOn: 'always',
          name: {
            show: true,
            color: 'var(--th-dark-100)',
            fontSize: '8px',
            offsetY: 10,
          },
          value: {
            show: true,
            fontSize: '16px',
            fontWeight: '700',
            color: '#fff',
            offsetY: -20,
            formatter: function (val) {
              return `${val}%`;
            },
          },
        },
      },
    },
    fill: {
      colors: ['#4e7ddc'], 
    },
    stroke: {
      lineCap: 'round',
    },
    labels: ['Completed'],
  };

  const chartSeries = [70]; // Percentage value

  return (
    <div className="progress-chart">
      <Chart options={chartOptions} series={chartSeries} type="radialBar" height={180} />
      <p className='mb-0 float-text' >*The values here have been rounded off.</p>
    </div>
  );
};

export default ProgressChart;

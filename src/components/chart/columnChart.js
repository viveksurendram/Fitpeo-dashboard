import React from 'react';
import Chart from 'react-apexcharts';

const ColumnChart = () => {
  const chartOptions = {
    chart: {
      type: 'bar',
      height: 165,
      background: 'var(--th-secondary)',
      toolbar: {
        show: false, // Disables the toolbar, removing the menu icon
      },

    },
    plotOptions: {
      bar: {
        borderRadius: 12,
        horizontal: false,
        columnWidth: '60%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    
    xaxis: {
      categories: [5,7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27,21, 23, 25, 27],
      axisBorder: {
        show: false
      },
      labels: {
        style: {
          colors: '#fff',
        },
      },
    },
    yaxis: {
      tickAmount: 3, 
      labels: {
        formatter: function (value) {
          return value / 1000 + 'k';
        },
        style: {
          colors: '#fff',
        },
      },
    },
    fill: {
      opacity: 1,
      colors: ['#4e7ddc'],
    },
    tooltip: {
      theme: 'dark',
    },
    grid: {
      borderColor: 'var(--th-dark)',
    },
  };

  const chartSeries = [
    {
      name: 'Sales',
      data: [4500, 5000, 4000, 4300, 4100, 2000, 12000, 12500, 13000, 4000, 3000, 15000,13000, 12000, 10000, 8000],
    },
  ];

  return (
    <div className="column-chart">
      <Chart options={chartOptions} series={chartSeries} type="bar" height={185} />
    </div>
  );
};

export default ColumnChart;

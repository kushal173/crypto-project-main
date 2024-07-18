import React from 'react'
import { Stack } from '@mui/system';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Chart as Chartjs, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
Chartjs.register(...registerables)



const LineChart = ({ coinHistory, currentPrice, coinName }) => {




  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 100; i < coinHistory?.data?.history?.length; i += 6) {
    coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleTimeString());
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: true,
        backgroundColor: '#C87198',
        borderColor: '#0071bd',
      },
    ],
  };

  const options = {

    scales: {
      yAxes: [{

        ticks: {
          beginAtZero: true,

        }
      }]
    }
  };

  return (

    <>
      <Stack p={4} flexWrap={'wrap'} justifyContent={'space-between'}>
        <h1 style={{color:'#191934'}}>{coinName} Price Chart</h1>
        
      
        {coinHistory?.data?.change <0 ? ( <h2>24H Change: <span className='red'><ArrowDownOutlined />  {coinHistory?.data?.change}</span></h2>):       (<h2>24H Change  :<span  className='blue'> <ArrowUpOutlined/>  {coinHistory?.data?.change}</span> </h2>)
        }
   

        <Line data={data} options={options} />

      </Stack>



    </>
  )
}

export default LineChart
import React, { useEffect, useState } from 'react'
import { useGetCryptosQuery } from '../../services/cryptoApi'
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Header from '../header/header';
import { Card, CardContent, Stack, Button } from '@mui/material';
import millify from 'millify';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Loader from '../loader/loader';
import { Card2 } from '../home/card/card';

const CryptoCurrency = () => {


  const { data, isFetching } = useGetCryptosQuery();
  const [sttes, setsttes] = useState([])
  const [Bhai, setBhai] = useState('')
  const numberFormat = (value) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'USD'
    }).format(value);

  useEffect(() => {



    const filteredData = data?.data?.coins.filter((ele) => ele.name.toLowerCase().includes(Bhai.toLowerCase()))

    setsttes(filteredData);

  }, [Bhai, data])

  if (isFetching) return <div style={{ backgroundColor: 'black', display: 'flex', height: '100vh', justifyContent: 'center', }}><div className='mainlaoder' style={{ width: '90px', margin: '20% auto' }}><Loader /></div></div>
  return (
    <>

      <Header />
      <br />
      <h1 style={{ textAlign: 'center' }} className='home_h1'>Explore the CryptoEconomy</h1>
      <p style={{ textAlign: 'center', fontWeight: 600 }} className='home_p'>All cryptocurrencies ranked by market cap.</p>

      <Stack className='Seerch'>
        <input type="text" placeholder='Search Coins...' onChange={(e) => { setBhai(e.target.value) }} />

      </Stack>

      <Stack className='nav2' margin={'12px 0'} fontSize={12} direction={'row'} gap={4} flexWrap={'wrap'} justifyContent={'center'} alignItems={'center'}>
        <Card2 />
      </Stack>


      <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'center'} p={4} gap={3}>
        {

          sttes && sttes.map((ele) => {
            console.log(ele)
            return (
              <Stack key={ele.uuid} justifyContent={'center'}>

                <Link style={{ textDecoration: 'none' }} to={`/cryptocurency/crypto/${ele.uuid}`}>
                  <div className='card'>
                    <Stack direction={'column'} justifyContent={'space-between'} p={1} alignItems={'center'} className='DESIGN' >
                      <h1>  <img className='cryptoImg' src={ele.iconUrl} alt="" /></h1>
                      <h1 className='h1'> {ele.name}</h1>

                    </Stack>

                    <CardContent>
                      <Button sx={{ fontWeight: 'bold', backgroundColor: 'rgb(180 173 173 / 30%)' }} variant="contained" disabled>
                        <h3 className='h1' style={{ color: 'white' }}>Rank: #{ele.rank}</h3>
                      </Button><br />
                      <div className='cardContent'>
                        <h3 className='h3'> Price : {numberFormat(ele.price)}</h3>
                      </div>
                      <div className='cardContent'>
                        {
                          ele.change < 0 ? (<h3 className='h3'>Change :  <span className='red'>{(ele.change)}% <TrendingDownIcon /></span></h3>) : (<h3 className='h3'>Change : <span className='blue'>{(ele.change)}%  <TrendingUpIcon /></span></h3>)
                        }
                      </div>
                      <div className='cardContent'>
                        <h3 className='h3'>Market Capital : {millify(ele.marketCap)}</h3>
                      </div>
                    </CardContent>
                  </div>
                </Link>

              </Stack>
            )
          })
        }

      </Stack>

    </>




  )
}

export default CryptoCurrency
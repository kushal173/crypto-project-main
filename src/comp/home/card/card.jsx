import React from 'react'
import millify from 'millify'
import { CardContent } from '@mui/material'
import { Stack } from '@mui/material'
import { useGetCryptosQuery } from '../../../services/cryptoApi'

export const Card2 = () => {
  const { data, isFetching } = useGetCryptosQuery();

  const states = data?.data?.stats;
  console.log(states)
  if (isFetching) return 'Loading.....'
  return (
    <>

      <Stack p={2} direction={'row'} gap={2} flexWrap={'wrap'} justifyContent={'center'}>
        <h3>Total Coins : <span style={{ color: 'yellow' }}>{states && states.total}</span> </h3>
        <h3 >Total 24h Volume :<span style={{ color: 'yellow' }}>{millify(states && states.total24hVolume)}</span> </h3 >
        <h3 >Total Exchanges : <span style={{ color: 'yellow' }}>{millify(states && states.totalExchanges)}</span> </h3 >
        <h3>Total Markets :  <span style={{ color: 'yellow' }}>{millify(states && states.totalMarkets)}</span></h3>
        <h3 >Total MarketCap : <span style={{ color: 'yellow' }} >{millify(states && states.totalMarketCap)}</span> </h3 >

      </Stack>

    </>
  )

}
const Cardsss = () => {

  const { data, isFetching } = useGetCryptosQuery();

  const states = data?.data?.stats;
  console.log(states)
  if (isFetching) return 'Loading.....'


  return (

    <>

      <CardContent>
        <h1 className='home_h1' style={{ textAlign: 'center' }}> Cryptocurrency market statistics</h1>
        <p className='home_p' style={{ textAlign: 'center', marginTop: '10px' }}>
          An overview of the complete cryptocurrency market, including the number of cryptocurrencies, the total market cap, and trading volume.
        </p>

        <CardContent sx={{ fontSize: '16px' }}>
          <Stack direction={'row'} pt={3} pb={3} justifyContent={'space-between'} alignItems={'center'}>
            <h3 style={{ display: 'flex', alignItems: 'center' }}> <span style={{ paddingRight: 5 }}><svg xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 22 19" stroke="#ffff"><g fill="none" stroke-linejoin="round" stroke-linecap="round" stroke-width="2"><path d="M1 9.75a3.68 3.68 0 0 1 5 0 3.52 3.52 0 0 0 5 0 3.67 3.67 0 0 1 5 0" /><path d="M21 2a3.68 3.68 0 0 1 -5 0 3.52 3.52 0 0 0 -5 0A3.67 3.67 0 0 1 6 2" /><path d="M21 17a3.68 3.68 0 0 1 -5 0 3.52 3.52 0 0 0 -5 0 3.67 3.67 0 0 1 -5 0" /></g></svg></span> Crypto market cap</h3>
            <h3 style={{ color: 'white' }}>$ {millify(states && states.totalMarketCap)}</h3>
          </Stack>
          <hr />
          <Stack direction={'row'} pt={3} pb={3} justifyContent={'space-between'} alignItems={'center'}>
            <h3 style={{ display: 'flex', alignItems: 'center' }} ><span style={{ paddingRight: 5 }}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 18 24" stroke="#ffff"><g fill="none" stroke-linejoin="round" stroke-linecap="round" stroke-width="2"><path d="M17,15a8.1,8.1,0,0,1-8,8,8.1,8.1,0,0,1-8-8C1,10,9,1,9,1S17,10,17,15Z" /><path d="M13,15.5a3.64,3.64,0,0,1-3,3" /></g></svg></span> 24h volume</h3>
            <h2 style={{ color: 'white' }} > $ {millify(states.total24hVolume)} </h2>
          </Stack>
          <hr />
          <Stack direction={'row'} pt={3} pb={3} justifyContent={'space-between'} alignItems={'center'}>
            <h3 style={{ display: 'flex', alignItems: 'center' }}><span style={{ paddingRight: 5 }}><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" stroke="#ffff"><g fill="none" stroke-linejoin="round" stroke-linecap="round" stroke-width="2"><circle cx="11.5" cy="11.5" r="10.5" /><path d="m9 12l4-2.5" /><path d="M11,7.5v6c0,2,2,1.5,2,1.5" /></g></svg></span>  ALL Coins</h3>
            <h2 style={{ color: 'white' }} >{millify(states.totalCoins)}</h2>
          </Stack>
          <hr />

          <Stack direction={'row'} pt={3} pb={3} justifyContent={'space-between'} alignItems={'center'}>
            <h3 style={{ display: 'flex', alignItems: 'center' }}><span style={{ paddingRight: 5 }}><svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" stroke="#ffff"><g fill="none" stroke-linejoin="round" stroke-linecap="round" stroke-width="2"><path d="m13 16l0-1" /><path d="m5 11l0-1" /><path d="m5 16l0-1" /><path d="m17 16l0-1" /><path d="m13 11l0-1" /><path d="m17 11l0-1" /><path d="m13 6l0-1" /><path d="m17 6l0-1" /><path d="M9.47,1H20.53a.47.47,0,0,1,.47.47V19.53a.47.47,0,0,1-.47.47H9V1.47A.47.47,0,0,1,9.47,1Z" /><path d="M1.47,6H9V20H1.47A.47.47,0,0,1,1,19.53V6.47A.47.47,0,0,1,1.47,6Z" /></g></svg></span>  All crypto exchanges</h3>
            <h2 style={{ color: 'white' }} > {millify(states.totalExchanges)}</h2>
          </Stack>
          <hr />
          <Stack direction={'row'} pt={3} pb={3} justifyContent={'space-between'} alignItems={'center'}>
            <h3 style={{ display: 'flex', alignItems: 'center' }}><span style={{ paddingRight: 5 }}><svg xmlns="http://www.w3.org/2000/svg" width="33" height="19" viewBox="0 0 33 19" stroke="#ffff"><g fill="none" stroke-linejoin="round" stroke-linecap="round" stroke-width="2"><circle cx="9.5" cy="9.5" r="8.5" /><path d="M23.5 1a8.48 8.48 0 0 0 -7 3.68 8.49 8.49 0 0 1 0 9.64A8.5 8.5 0 1 0 23.5 1" /><path d="m7 10l4-2.5" /><path d="m22 8.5l4-2.5" /><path d="m22 13l4-2.5" /><path d="M9,5.5v6c0,2,2,1.5,2,1.5" /></g></svg></span>  All crypto markets</h3>
            <h2 style={{ color: 'white' }} >{millify(states.totalMarkets)}</h2>
          </Stack>
          <hr />


        </CardContent>
      </CardContent>





    </>


  )
}

export default Cardsss
import React, { useEffect, useState } from 'react'
import HTMLReactParser from 'html-react-parser'
import { useParams } from 'react-router-dom'
import { useGetDetailsQuery } from '../../services/cryptoApi'
import { useGetHistoryQuery } from '../../services/cryptoApi'
import Loader from '../loader/loader'
import { CardContent, Button, Stack } from '@mui/material'
import LineChart from '../LineChart/lineChart'
import millify from 'millify'
import Header from '../header/header'

const Detail = () => {

    const { uuid } = useParams();

    const { data, isFetching } = useGetDetailsQuery(uuid);

    const [settes, setsettes] = useState(data?.data?.coin)

    const [timePeriod] = useState('')


    const { data: coinHistory } = useGetHistoryQuery(uuid, timePeriod);
    console.log(coinHistory)
    const numberFormat = (value) =>
        new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'USD'
        }).format(value);

    useEffect(() => {
        setsettes(data?.data?.coin)
    }, [data]);

    if (isFetching) return <Loader />

    return (<>
        <Header />
        <Stack sx={{ backgroundColor: '#DEE0E1' }} >
            <Stack direction={'row'} p={1} flexWrap={'wrap'} justifyContent={'space-between'} >
                <CardContent >
                    <Stack p={2}>
                        <h1 style={{ alignItems: 'center',display:'flex' }}><img className='logos' src={settes && settes.iconUrl} alt="" /><span className='Span'>{settes && settes.name}</span></h1>
                    </Stack>

                    <Stack direction={'row'} gap={1} flexWrap={'wrap'}>
                        <Button sx={{ fontWeight: 'bold' }} variant="contained" disabled>
                            <h3 className='h1' style={{ color: 'gray' }}>Rank: #{settes && settes.rank}</h3>
                        </Button>

                        <Button sx={{ fontWeight: 'bold' }} variant="contained" disabled>
                            <h3 className='h1' style={{ color: 'gray' }}>{settes && settes.symbol}</h3>
                        </Button>

                        <Button sx={{ fontWeight: 'bold' }} variant="contained" disabled>
                            <h3 className='h1' style={{ color: 'gray' }}> {settes && settes.tags}</h3>
                        </Button>
                    </Stack>

                </CardContent>



                <CardContent>

                    <Stack p={2} sx={{ fontSize: 18 }}>
                        <h4 style={{ color: '#F65603' }}>{settes && settes.name} price <span>({settes && settes.symbol})</span></h4>
                        <Stack direction={'row'} gap={2} p={1}>

                            <Button sx={{ fontWeight: 'bold', cursor: 'none' }} variant="contained" diabled >
                                <h1>{numberFormat(settes && settes.price)}</h1>
                            </Button>


                        </Stack>
                        <Stack p={1} fontSize={14} color={'#0060FF'}>
                            <h3>All Time High Price : <span style={{ color: '#333333' }}>${millify(settes && settes.allTimeHigh?.price)}</span> </h3>
                            <h3>Total exchanges : <span style={{ color: '#333333' }}>{millify(settes && settes.numberOfExchanges)}</span></h3>
                            <h3>Total Markets : <span style={{ color: '#333333' }}>{millify(settes && settes.numberOfMarkets)}</span></h3>
                        </Stack>
                    </Stack>
                </CardContent>
            </Stack>
            <hr />

            <LineChart coinHistory={coinHistory} currentPrice={millify(settes && settes.price)} coinName={settes && settes.name} />
            {/* -------------------------------------------- */}

            <Stack flexWrap={'wrap'} direction={'row'} sx={{ padding: { xs: '10px', sm: '48px', md: '48px' } }} justifyContent={'center'}>
                <CardContent>
                    <h1 style={{ textAlign: 'center', fontSize: '24px' }}>Value statistics</h1>
                    <br />
                    <p style={{ textAlign: 'center', fontSize: '16px' }}>An overview showing the statistics of Bitcoin, such as the base and quote currency, the rank, and trading volume.</p>

                    <CardContent>
                        <Stack direction={'row'} padding={'24px 4px'} justifyContent={'space-between'} alignItems={'center'}>
                            <h2 style={{ display: 'flex', color: '#0060FF', marginBottom: '0em' }}> <span style={{ paddingRight: 5 }}><img src="https://cdn.coinranking.com/assets/3bc76b90ac5fa7a9d0ebb3eadd0db736.svg" loading="lazy" alt="" class="stats__img" /></span> Price to USD</h2>
                            <h2>$ {millify(settes && settes.price)}</h2>
                        </Stack>
                        <hr />
                        <Stack direction={'row'} padding={'24px 4px'} justifyContent={'space-between'} alignItems={'center'}>
                            <h2 style={{ display: 'flex', color: '#0060FF', marginBottom: '0em' }}><span style={{ paddingRight: 5 }}><img src="https://cdn.coinranking.com/assets/d5dc50712c0ee405fdacef50c1076d7f.svg" loading="lazy" alt="" class="stats__img" /></span> Price to BTC</h2>
                            <h2>{millify(settes && settes.btcPrice)} BTC</h2>
                        </Stack>
                        <hr />
                        <Stack direction={'row'} padding={'24px 4px'} justifyContent={'space-between'} alignItems={'center'}>
                            <h2 style={{ display: 'flex', color: '#0060FF', marginBottom: '0em' }}><span style={{ paddingRight: 5 }}><img src="https://cdn.coinranking.com/assets/71798b73ccd1acf2b7cecd584238b810.svg" loading="lazy" alt="" class="stats__img" /></span> Rank</h2>
                            <h2>#{millify(settes && settes.rank)}</h2>
                        </Stack>
                        <hr />

                        <Stack direction={'row'} padding={'24px 4px'} justifyContent={'space-between'} alignItems={'center'}>
                            <h2 style={{ display: 'flex', color: '#0060FF', marginBottom: '0em' }}><span style={{ paddingRight: 5 }}><img src="https://cdn.coinranking.com/assets/393c694ac4e62408003ed1617d009626.svg" loading="lazy" alt="" class="stats__img" /></span> Fully diluted market cap</h2>
                            <h2>$ {settes && millify(settes.fullyDilutedMarketCap)}</h2>
                        </Stack>
                        <hr />
                        <Stack direction={'row'} padding={'24px 4px'} justifyContent={'space-between'} alignItems={'center'}>
                            <h2 style={{ display: 'flex', color: '#0060FF', marginBottom: '0em' }}><span style={{ paddingRight: 5 }}><img src="https://cdn.coinranking.com/assets/393c694ac4e62408003ed1617d009626.svg" loading="lazy" alt="" class="stats__img" /></span> Market cap</h2>
                            <h2>$ {millify(settes && settes.marketCap)}</h2>
                        </Stack>
                        <hr />
                        <Stack direction={'row'} padding={'24px 4px'} justifyContent={'space-between'} alignItems={'center'}>
                            <h2 style={{ display: 'flex', color: '#0060FF', marginBottom: '0em' }}><span style={{ paddingRight: 5 }}><img src="https://cdn.coinranking.com/assets/6dc3ae58ba61dc653ea96cfc969c581a.svg" loading="lazy" alt="" class="stats__img" /></span> All-time high (daily avg.)</h2>
                            <h2 style={{ color: '#333333', }} >$ {millify(settes && settes.allTimeHigh?.price)}</h2>
                        </Stack>
                        <hr />
                    </CardContent>




                </CardContent>



                {/* ----------------------------------------- */}


                <CardContent>


                    <h1 style={{ textAlign: 'center', fontSize: '24px' }}>Supply information</h1>
                    <br />
                    <p style={{ textAlign: 'center', fontSize: '16px' }}>View the total and circulating supply of Bitcoin, including details on how the supplies are calculated.</p>
                    <CardContent>
                        <Stack direction={'row'} p={2} justifyContent={'space-between'} alignItems={'center'}>
                            <h2 style={{ display: 'flex', color: '#0060FF', marginBottom: '0em' }}> Circulating Supply</h2>
                            <h2 style={{ color: '#333333', }}> {millify(settes && settes.supply?.circulating)} {settes && settes.symbol}</h2>
                        </Stack>
                        <hr />
                        <Stack direction={'row'} p={2} justifyContent={'space-between'} alignItems={'center'}>
                            <h2 style={{ display: 'flex', color: '#0060FF', marginBottom: '0em' }}> Total suh2ply</h2>
                            <h2 style={{ color: '#333333', }}>{millify(settes && settes.supply?.total)} {settes && settes.symbol}</h2>
                        </Stack>
                        <hr />
                        <Stack direction={'row'} p={2} justifyContent={'space-between'} alignItems={'center'}>
                            <h2 style={{ display: 'flex', color: '#0060FF', marginBottom: '0em' }}> Max supply </h2>
                            <h2 style={{ color: '#333333', }}>{millify(settes && settes.supply?.max)} {settes && settes.symbol}</h2>
                        </Stack>
                        <hr />
                    </CardContent>
                </CardContent>
            </Stack>

            <Stack p={4} fontSize={18} textAlign={'justify'}>
                <CardContent className='content'>
                    <h1>what is <span style={{ color: 'red' }}> {settes && settes.name}</span></h1>
                    {HTMLReactParser(`${settes && settes.description}`)}
                </CardContent>
            </Stack>
        </Stack>
        <Stack sx={{ backgroundColor: '#0055DA' }} p={2} textAlign={'center'} justifyContent={'center'} >
            <h2 style={{ color: 'white' }}><span>&#169;</span> Copyright reserved by Kushal</h2>
        </Stack>
    </>

    )
}

export default Detail
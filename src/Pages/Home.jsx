import { Link } from 'react-router-dom'
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import React, { useEffect, useState } from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi'
import { CardContent, Stack, Button } from '@mui/material';
import millify from 'millify';
import News from './news';
import Footer from './Footer';
import Header from '../comp/header/header';
import Loader from '../comp/loader/loader';
import Cardsss from '../comp/home/card/card'

const Home = () => {
    const { data, isFetching } = useGetCryptosQuery();
    console.log(data)
    const [sttes, setsttes] = useState(data?.data?.coins)
    const numberFormat = (value) =>
        new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'USD'
        }).format(value);

    useEffect(() => {
        setsttes(data?.data?.coins)
    }, [data])

    if (isFetching) return <div style={{ backgroundColor: 'black', display: 'flex', height: '100vh', justifyContent: 'center', }}><div className='mainlaoder' style={{ width: '90px', margin: '20% auto' }}><Loader /></div></div>

    return (

        <>
            <Header />
            <br />

            <Stack className='sup' alignItems={'center'} direction="row" spacing={2} sx={{ padding: { xs: '5px', sm: '24px', md: '4px' }, textAlign: { xs: 'center', sm: 'left' } }} flexWrap={'wrap'} justifyContent={'center'} >
                <CardContent sx={{ width: { xs: 500, sm: 800, md: 425, lg: 500 } }}>
                    <h1 className='home_h1' >
                        Be the first to know about <b style={{ color: '#ae2c8d' }}>crypto news every day.</b>
                    </h1>
                    <p className='home_p'>
                        Get crypto analysis, news and updates right to your inbox! Sign up here so you don't miss a single newsletter.
                    </p><br></br>
                    <Link className='home_butt' to={'/cryptocurency'} >Explore-More</Link>

                </CardContent>

                <CardContent sx={{ width: 450 }}>

                    <img className='home_img' src="https://s2.coinmarketcap.com/static/cloud/img/newsletter_bg_light.svg?_=872fb24" alt="" />

                </CardContent>

            </Stack>

            <br /><br /><br /><br />
            {/* ======================================= */}


            <Stack p={2}>
                <Stack className='nav2' p={4} fontSize={12} direction={'row'} gap={4} flexWrap={'wrap'} justifyContent={'center'} alignItems={'center'}>
                </Stack>


                <div style={{ backgroundColor: '#F7F7F8' }}>
                    <CardContent sx={{ padding: 6, textAlign: 'center' }}>
                        <h1 className='home_h1' >
                            Explore Top Crypto's Like <span style={{ color: '#ae2c8d' }}>Bitcoin, Etherium , and Dogecoin.</span>
                        </h1>
                    </CardContent>

                    <Stack direction={'row'} alignItems={'center'} flexWrap={'wrap'} justifyContent={'center'} p={4} gap={3}>

                        {
                            sttes && sttes.slice(0, 7).map((ele) => {
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

                        <CardContent sx={{ textAlign: 'center' }}>
                            <p className='home_p'>
                                See All Awailable Assets.          </p><br></br>
                            <Link className='home_butt' to={'/cryptocurency'}>See more-Coins</Link>
                        </CardContent>
                    </Stack>

                </div>

                <br />
                <Stack className='nav2' p={4} fontSize={12} direction={'row'} gap={4} flexWrap={'wrap'} justifyContent={'center'} alignItems={'center'}>
                    <Cardsss />
                </Stack>
            </Stack>


            <News />
            <Footer />
        </>
    )
}






  export default Home





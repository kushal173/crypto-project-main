
import React, { useState, useEffect } from 'react'
import { Card, CardContent } from '@mui/material';
import { useGetNewsQuery } from '../../services/newsAPi'
import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import moment from 'moment/moment';
import Loader from '../loader/loader';
import Header from '../header/header';
import Footer from '../../Pages/Footer';


const Newws = () => {
  const { data, isFetching } = useGetNewsQuery()

  const [Info, setInfo] = useState(data?.value)
  console.log(Info)


  useEffect(() => {
    setInfo(data?.value)

  }, [data])

  if (isFetching) return <Loader />
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
    <Header/>
      <div>
        <Typography variant='h3' sx={{ padding: { xs: 2, md: 3 } }} fontWeight={600} alignItems={'center'} >
          <span className='svg4'><svg className='svg3' focusable="false" viewBox="0 0 24 24"><path d="M12 11h6v2h-6v-2zm-6 6h12v-2H6v2zm0-4h4V7H6v6zm16-7.22v12.44c0 1.54-1.34 2.78-3 2.78H5c-1.64 0-3-1.25-3-2.78V5.78C2 4.26 3.36 3 5 3h14c1.64 0 3 1.25 3 2.78zM19.99 12V5.78c0-.42-.46-.78-1-.78H5c-.54 0-1 .36-1 .78v12.44c0 .42.46.78 1 .78h14c.54 0 1-.36 1-.78V12zM12 9h6V7h-6v2"></path></svg></span><span className='svg2'>Top Feeds  </span>

          <span className='svg'>           <svg className='news-svg' focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
          </span>
        </Typography>

        <Stack direction={'row'} flexWrap={'wrap'} gap={6} justifyContent={'center'} p={2}>


          {Info && Info.map((ele) => (


            <Card key={ele.id} sx={{ width: { xs: 400, sm: 650, md: 400, lg: 465 } }} >


              <Stack sx={{ flexDirection: { xs: 'column', md: 'row', sm: 'row' }, textAlign: { xs: 'justify', sm: 'left', md: 'left' } }} justifyContent={'space-between'} p={1} gap={2} alignItems={'center'} key={ele.Id} >
                <h1>{ele.name}</h1>
                <img src={ele.image?.thumbnail?.contentUrl} alt="" width={'44%'} />
              </Stack>
              <CardContent sx={{ fontSize: 16 }}>
                <p style={{ textAlign: 'justify' }}>
                  {ele.description}
                </p>

                <Stack direction={'row'} p={1} alignItems={'center'} justifyContent={'space-between'} >

                  <p className='p'><span>                <img className='logo' src={ele.provider[0]?.image?.thumbnail?.contentUrl} alt="" />
                  </span>{moment(ele.datePublished).startOf('ss').from()}</p>

                  <button className='home_butt' onClick={() => openInNewTab(ele.url)}>
                    Read-More
                  </button>
                </Stack>
              </CardContent>
            </Card>



          ))}
        </Stack>


      </div>

<Footer/>
    </>
  )
}

export default Newws
import React from 'react'
import { Stack } from '@mui/material'
const Footer = () => {
  return (
    <Stack sx={{ backgroundColor: '#0055DA' }} p={2} textAlign={'center'} justifyContent={'center'} >
      
      <h2 style={{color:'white'}}><span>&#169;</span> @Copyright reserved by Manish</h2>
    </Stack>
  )
}

export default Footer
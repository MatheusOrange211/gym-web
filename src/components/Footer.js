import React from 'react'
import {Box, Stack, Typography} from '@mui/material'

import Logo from '../assets/images/Logo-1.png';

const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#fff3f4'>
      <Stack gap='20px' alignItems='center' justifyContent='center' px='40px' pt='24px'>
        <img  src={Logo} alt='logo' width='200px' height='40px'/>  
        <Typography alignItems='center' justifyContent='center' fontWeight={700}>
            Made with Tutorials by Javascript Mastery
        </Typography>
        <Typography  m='0' alignItems='center' justifyContent='center' fontWeight={700}>
            Since 2022
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer
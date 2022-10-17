import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollBar from './HorizontalScrollBar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box 
      sx={{
        position: 'relative',
        width: '100%',
        p: '20px',
        mt:{lg:'80px', xs:'0'}
    }}
    >
      <Typography variant ="h4" mb="33px" fontWeight={700} sx={{ fontSize: { lg: '36px', xs: '24px' } }}>
        Exercises that target the same <span style={{color:"#FF2625", textTransform: 'capitalize'}}>muscle group</span>
       </Typography>
       <Stack direction='row' sx={{p:'2', position:'relative'}} mb='5px' >
        {targetMuscleExercises.length ?
          <HorizontalScrollBar data= {targetMuscleExercises} />
          :<Loader />}
       </Stack>
       <Typography variant ="h4" mb="33px" fontWeight={700} mt='100px' sx={{ fontSize: { lg: '36px', xs: '24px' } }}>
        Exercises that target the same <span style={{color:"#FF2625", textTransform: 'capitalize'}}>Equipment</span>
       </Typography>
       <Stack direction='row' sx={{p:'2', position:'relative'}} mb='5px'>
        {equipmentExercises.length ?
          <HorizontalScrollBar data= {equipmentExercises} />
          :<Loader />}
       </Stack>
    </Box>
  );

};
export default SimilarExercises
import React from 'react';
import { Stack, Typography } from '@mui/material';

import Icon from '../assets/icons/gym.png';
import { width } from '@mui/system';

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "none",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "240px",
        height: "250px",
        cursor: 'pointer',
        gap: '40px'
      }}
      onClick={() =>{
          setBodyPart(item);
          window.scrollTo({top:1800, left:100, behavior:'smooth'})
        }
      }
    >
      <img 
        src={Icon} 
        alt="dumbbell"
        style={{ 
          width: '36px',
          height: '36px' 
        }}
      />
      <Typography fontSize="24px" fontWeight="bold" textTransform="capitalize">{item}</Typography>
    </Stack>
  )
}

export default BodyPart


// 1:10:02


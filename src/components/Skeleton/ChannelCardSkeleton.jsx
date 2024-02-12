// ChannelCardSkeleton.js
import React from 'react'
import { Box, Skeleton } from '@mui/material'
import './SkeletonAnimations.css' // Import CSS file for animations

const ChannelCardSkeleton = () => {
  return (
    <>
      <Skeleton
        variant='text'
        animation='wave'
        // width={180}
        height={280}
        sx={{
          width: { xs: '100%', sm: '358px', md: '320px' },
          marginTop: '0',
        }}
      />
      <Skeleton
        variant='text'
        animation='wave'
        // width={180}
        height={40}
        sx={{ width: { xs: '100%', sm: '328px', md: '290px' } }}
      />
      <Skeleton
        variant='text'
        animation='wave'
        // width={180}
        height={20}
        sx={{ width: { xs: '100%', sm: '238px', md: '220px' } }}
      />
    </>
  )
}

export default ChannelCardSkeleton

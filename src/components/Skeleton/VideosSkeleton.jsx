import React from 'react'
import { Skeleton } from '@mui/material'

const VideosSkeleton = () => {
  return (
    <>
      <Skeleton
        variant='rectangular'
        animation='wave'
        height={180}
        sx={{
          width: { xs: '100%', sm: '358px', md: '320px' },
        }}
      />
      <Skeleton
        variant='text'
        animation='wave'
        height={40}
        sx={{ width: { xs: '100%', sm: '328px', md: '290px' } }}
      />
      <Skeleton
        variant='text'
        animation='wave'
        height={20}
        sx={{ width: { xs: '100%', sm: '238px', md: '220px' } }}
      />
    </>
  )
}

export default VideosSkeleton

import React from 'react'
import { Card, Skeleton, Box } from '@mui/material'
import './SkeletonAnimations.css'

const VideoCardSkeleton = () => (
  <Box>
    <Skeleton
      variant='text'
      animation='wave'
      // width={180}
      height={280}
      sx={{ width: { xs: '100%', sm: '358px', md: '320px' } }}
    />
  </Box>
)

export default VideoCardSkeleton

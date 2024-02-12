import React from 'react'
import { Stack, Skeleton, Box } from '@mui/material'
import { VideoCard, ChannelCard } from './'
import ChannelCardSkeleton from './Skeleton/ChannelCardSkeleton'
import VideoCardSkeleton from './Skeleton/VideoCardSkeleton'

const Videos = ({ videos, direction }) => {
  if (!videos?.length) {
    return (
      <Stack
        direction={direction || 'row'}
        flexWrap='wrap'
        justifyContent={'start'}
        gap={2}
        alignItems={'start'}
      >
        {[...Array(10)].map((_, idx) => (
          <Box key={idx}>
            <ChannelCardSkeleton />
          </Box>
        ))}
      </Stack>
    )
  }
  return (
    <Stack
      direction={direction || 'row'}
      flexWrap='wrap'
      justifyContent={'start'}
      gap={2}
      alignItems={'start'}
    >
      {videos.map(
        (item, idx) => (
          console.log('item:', item),
          (
            <Box key={idx}>
              {item.id.videoId && <VideoCard video={item} />}
              {item.id.channelId && <ChannelCard channelDetail={item} />}
            </Box>
          )
        )
      )}
    </Stack>
  )
}

export default Videos

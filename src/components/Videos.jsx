import React, { useState } from 'react'
import { Stack, Box, Button, Typography } from '@mui/material'
import { VideoCard, ChannelCard } from './'
import VideosSkeleton from './Skeleton/VideosSkeleton'

const Videos = ({ videos, direction, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1)

  const shouldPaginate =
    itemsPerPage && typeof itemsPerPage === 'number' && itemsPerPage > 0

  if (!videos) {
    return (
      <Stack
        direction={direction || { md: 'row', sm: 'column' }}
        flexWrap='wrap'
        justifyContent={'start'}
        gap={2}
        alignItems={'start'}
      >
        {[...Array(10)].map((_, idx) => (
          <Box key={idx}>
            <VideosSkeleton />
          </Box>
        ))}
      </Stack>
    )
  }

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const totalItems = videos.length

  const currentVideos = shouldPaginate
    ? videos.slice(indexOfFirstItem, indexOfLastItem)
    : videos

  const nextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  const prevPage = () => {
    setCurrentPage(currentPage - 1)
  }

  return (
    <Box display='flex' flexDirection='column' alignItems='center'>
      <Stack
        direction={direction || 'row'}
        flexWrap='wrap'
        justifyContent={'start'}
        gap={2}
        alignItems={'start'}
      >
        {currentVideos.map((item, idx) => (
          <Box key={idx}>
            {item.id?.videoId && <VideoCard video={item} />}
            {item.id?.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        ))}
      </Stack>
      {shouldPaginate && (
        <Box mt={2} display='flex' alignItems='center'>
          <Button disabled={currentPage === 1} onClick={prevPage}>
            Previous
          </Button>
          <Typography variant='body1' color='white'>
            Page {currentPage} of {Math.ceil(videos.length / itemsPerPage)}
          </Typography>

          <Button
            disabled={indexOfLastItem >= videos.length}
            onClick={nextPage}
          >
            Next
          </Button>
        </Box>
      )}
    </Box>
  )
}

export default Videos

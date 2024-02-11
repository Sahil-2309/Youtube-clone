import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Box, Stack, Typography } from '@mui/material'
import ReactPlayer from 'react-player'
import { Videos, ChannelCard } from './'
import { fetchFromAPI } from '../utils/fetchFromApi'

const formatNumber = (num) => {
  if (num >= 1e9) {
    return (num / 1e3).toFixed(1) + 'B'
  }
  if (num >= 1e6) {
    return (num / 1e6).toFixed(1) + 'M'
  }
  if (num >= 1e3) {
    return (num / 1e3).toFixed(1) + 'K'
  }
  return num
}

const VideoDetail = () => {
  const [videoDetails, setVideoDetails] = useState(null)
  const [relatedVideos, setRelatedVideos] = useState([])
  // const []

  const { id } = useParams()
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      setVideoDetails(data.items[0])
    })
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}`).then((data) =>
      setRelatedVideos(data.items)
    )
  }, [id])
  if (!videoDetails) return <Box>Loading...</Box>

  // console.log('videoDetails:', videoDetails)

  const {
    snippet: { title, description, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetails || {}
  return (
    <Box minHeight='95vh' zIndex='40'>
      <Stack
        direction={{
          xs: 'column',
          md: 'row',
        }}
      >
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className='react-player'
              controls
            />
            <Typography color='#fff' variant='h5' fontWeight='bold' p={2}>
              {title}
            </Typography>
            <Stack
              direction='row'
              justifyContent='space-between'
              sx={{ color: '#fff' }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography color='white' variant='h6' fontWeight='bold'>
                  {channelTitle}
                </Typography>
              </Link>
              <Typography variant='h7'>
                {formatNumber(viewCount)} views
              </Typography>
              <Stack direction='row' gap={2}>
                <Typography variant='h7'>
                  {formatNumber(likeCount)} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          p={2}
          py={{ md: 1, xs: 5 }}
          justifyContent='center'
          alignItems='center'
        >
          <Videos videos={relatedVideos} direction='column' />
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail

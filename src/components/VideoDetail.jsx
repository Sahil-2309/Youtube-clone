import React, { useState, useEffect } from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import ReactPlayer from 'react-player'
import { Videos, ChannelCard } from './'
import { fetchFromAPI } from '../utils/fetchFromApi'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import { useParams } from 'react-router-dom'

const formatNumber = (num) => {
  if (num >= 1e9) {
    return (num / 1e9).toFixed(1) + 'B'
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
  const [showFullDescription, setShowFullDescription] = useState(false)
  const [showLessDescription, setShowLessDescription] = useState(false)
  const [channelDetail, setChannelDetail] = useState(null)

  const { id } = useParams()

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => {
        setVideoDetails(data.items[0])
        const channelId = data.items[0]?.snippet?.channelId
        if (channelId) {
          fetchFromAPI(`channels?part=snippet,statistics&id=${channelId}`)
            .then((channelData) => {
              setChannelDetail(channelData.items[0])
            })
            .catch((error) => {
              console.error('Error fetching channel details:', error)
            })
        }
      })
      .catch((error) => {
        console.error('Error fetching video details:', error)
      })

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}`)
      .then((data) => setRelatedVideos(data.items))
      .catch((error) => {
        console.error('Error fetching related videos:', error)
      })
  }, [id])

  if (!videoDetails || !channelDetail) return <Box>Loading...</Box>

  const {
    snippet: { title, description },
    statistics: { viewCount, likeCount },
  } = videoDetails || {}

  const handleShowMoreDescription = () => {
    setShowFullDescription(true)
    setShowLessDescription(true)
  }

  const handleShowLessDescription = () => {
    setShowFullDescription(false)
    setShowLessDescription(false)
  }

  return (
    <Box minHeight='95vh' zIndex='40' sx={{ m: '20px' }}>
      <Stack
        direction={{
          xs: 'column',
          md: 'row',
        }}
      >
        <Box flex={1}>
          <Box sx={{ width: '100%', top: '86px', mt: '1rem' }}>
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
              <ChannelCard channelDetail={channelDetail} inVideoDetail={true} />
              <Stack
                direction='row'
                gap={2}
                sx={{
                  backgroundColor: '#2f2f2f',
                  borderRadius: '10px',
                  alignItems: 'center',
                }}
              >
                <Typography
                  variant='h7'
                  sx={{ p: '10px', pr: '0px' }}
                  fontFamily='arial'
                >
                  {formatNumber(likeCount)}
                </Typography>
                <ThumbUpIcon sx={{ pr: '10px' }} />
              </Stack>
            </Stack>
          </Box>
          <Typography
            color='#fff'
            variant='body2'
            p={2}
            sx={{ backgroundColor: '#2f2f2f', borderRadius: '5px' }}
          >
            <Typography variant='h7'>
              {formatNumber(viewCount)} views
            </Typography>
            {showFullDescription
              ? description
              : `${description.slice(0, 1000)}...`}
            {!showFullDescription && description.length > 1000 && (
              <Button
                variant='text'
                color='primary'
                onClick={handleShowMoreDescription}
              >
                Show More
              </Button>
            )}
            {showLessDescription && (
              <Button
                variant='text'
                color='primary'
                onClick={handleShowLessDescription}
              >
                Show Less
              </Button>
            )}
          </Typography>
        </Box>
        <Stack
          p={2}
          py={{ md: 1, xs: 5 }}
          justifyContent='center'
          alignItems='center'
          sx={{ overflowY: 'auto', mt: '1rem' }}
        >
          <Videos videos={relatedVideos} direction='column' />
        </Stack>
      </Stack>
    </Box>
  )
}

export default VideoDetail

import React from 'react'
import { Box, CardContent, Typography, CardMedia, Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utils/constants'
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
const ChannelCard = ({ channelDetail, inVideoDetail }) => {
  if (inVideoDetail)
    return (
      <Link to={`/channel/${channelDetail.id.channelId}`}>
        <Stack direction='row' justifyContent='space-between'>
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high.url || demoProfilePicture
            }
            sx={{
              borderRadius: '50%',
              height: '7vh',
              width: '7vh',
              margin: '0 auto',
              border: inVideoDetail ? '2px solid #FC1503' : 'none',
              mr: '1vh',
            }}
          />
          <Stack direction='column'>
            <Typography
              variant='subtitle4'
              fontWeight='bold'
              mt={2}
              color='white'
              fontFamily='arial'
            >
              {channelDetail?.snippet?.title}
            </Typography>
            {channelDetail?.statistics?.subscriberCount && (
              <Typography variant='subtitle8' color='gray' fontFamily='arial'>
                {formatNumber(channelDetail?.statistics?.subscriberCount)} subs
              </Typography>
            )}
          </Stack>
        </Stack>
      </Link>
    )
  else
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: { xs: '356px', md: '320px' },
          height: '326px',
          boxShadow: 'none',
          borderRadius: '20px',
        }}
      >
        <Link to={`/channel/${channelDetail.id.channelId}`}>
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              textAlign: 'center',
              color: '#fff',
            }}
          >
            <CardMedia
              image={
                channelDetail?.snippet?.thumbnails?.high.url ||
                demoProfilePicture
              }
              sx={{
                borderRadius: '50%',
                height: '180px',
                width: '180px',
                margin: '0 auto',
                border: '2px solid #FC1503',
              }}
            />
            <Typography variant='h6' fontWeight='bold' mt={2}>
              {channelDetail?.snippet?.title}
            </Typography>
            {channelDetail?.statistics?.subscriberCount && (
              <Typography variant='subtitle2' color='gray'>
                {parseInt(
                  channelDetail?.statistics?.subscriberCount
                ).toLocaleString()}{' '}
                subscribers
              </Typography>
            )}
          </CardContent>
        </Link>
      </Box>
    )
}

export default ChannelCard

import React from 'react'
import { Box, CardContent, Typography, CardMedia } from '@mui/material'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utils/constants'

const ChannelCard = ({ channelDetail }) => {
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
              channelDetail?.snippet?.thumbnails?.high.url || demoProfilePicture
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

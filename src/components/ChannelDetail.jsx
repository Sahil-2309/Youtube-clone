import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { Videos, ChannelCard } from '.'
import { fetchFromAPI } from '../utils/fetchFromApi'
const ChannelDetail = () => {
  const { id } = useParams()
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => {
        if (data && data.items && data.items.length > 0) {
          setChannelDetail(data.items[0])
        }
      })
      .catch((error) => {
        console.error('Error fetching channel details:', error)
      })

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => {
        if (data && data.items) {
          setVideos(data.items)
        }
      })
      .catch((error) => {
        console.error('Error fetching videos:', error)
      })
  }, [id])

  return (
    <Box minHeight='95vh'>
      <Box
        style={{
          display: 'flex',
          justifyContent: 'center',
          background:
            'radial-gradient(circle, rgba(28,28,28,1) 29%, rgba(82,105,221,1) 100%)',
          zIndex: '-1',
        }}
      >
        {channelDetail && (
          <ChannelCard channelDetail={channelDetail} style={{ zIndex: '3' }} />
        )}
      </Box>
      <Box p={5} display='flex'>
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail

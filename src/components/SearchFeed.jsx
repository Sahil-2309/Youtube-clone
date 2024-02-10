import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import { fetchFromAPI } from '../utils/fetchFromApi'
import { Videos } from './'

const SearchFeed = () => {
  const [selectedCategory, setSelectedCategory] = useState('Home')
  const [videos, setVideos] = useState(null)

  useEffect(() => {
    setVideos(null)

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    )
  }, [selectedCategory])

  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
      <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
        {selectedCategory === 'Home' ? 'Home' : selectedCategory}{' '}
        <span
          style={{ color: selectedCategory === 'Home' ? 'white' : '#FC1503' }}
        >
          {selectedCategory === 'Home' ? '' : 'Videos'}
        </span>
      </Typography>

      <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed

import React, { useEffect, useState } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { fetchFromAPI } from '../utils/fetchFromApi'
import { Videos, Sidebar } from './'

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState(null)

  useEffect(() => {
    setVideos(null)

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    )
  }, [selectedCategory])

  const renderCategoryLabel = () => {
    if (selectedCategory === 'New') return ''
    else return selectedCategory
  }

  const renderVideosTitle = () => {
    if (selectedCategory === 'New') return 'Home'
    else return 'Videos'
  }

  return (
    <Stack direction={{ xs: 'column', md: 'row' }}>
      <Box
        sx={{
          height: { xs: 'auto', md: '92vh' },
          boxShadow: '0 0 6px #000',
          px: { xs: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className='copyright'
          variant='body2'
          sx={{ mt: 1.5, color: '#fff' }}
        />
      </Box>

      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography
          variant='h4'
          fontWeight='bold'
          mb={2}
          sx={{ color: 'white' }}
        >
          {renderCategoryLabel()}{' '}
          <span
            style={{ color: selectedCategory === 'New' ? 'white' : '#FC1503' }}
          >
            {renderVideosTitle()}
          </span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed

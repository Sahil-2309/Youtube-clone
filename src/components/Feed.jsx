import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { fetchFromApi } from '../utils/fetchFromApi'
import { Videos, Sidebar } from './'
const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box
        sx={{
          height: { sx: 'auto', md: '92vh' },
          borderRight: '1px solid #3d3d3d',
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar />
        <Typography
          variant='body2'
          className='copyright'
          sx={{ mt: 1.5, color: '#fff' }}
        >
          Feed
        </Typography>
      </Box>
      <Box p={2} sx={{ overflow: 'auto', height: '90vh', flex: 2 }}>
        <Typography
          variant='h4'
          fontWeight='bold'
          mb={2}
          sx={{ color: 'white' }}
        >
          <span style={{ color: '#F311503' }}>Videos</span>
        </Typography>
        <Videos videos={[]} />
      </Box>
    </Stack>
  )
}
export default Feed

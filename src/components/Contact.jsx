import React from 'react'
import { Stack } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LanguageIcon from '@mui/icons-material/Language'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <Stack direction={'row'} spacing={2}>
      {' '}
      <Link to='https://github.com/Sahil-2309' target='_blank'>
        <GitHubIcon sx={{ color: 'white', fontSize: 30 }} />{' '}
      </Link>
      <Link to='https://sahilxar.netlify.app/' target='_blank'>
        <LanguageIcon sx={{ color: 'white', fontSize: 30 }} />
      </Link>
    </Stack>
  )
}

export default Contact

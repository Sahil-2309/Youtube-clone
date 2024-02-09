import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
import SearchBar from './SearchBar'
const Navbar = () => (
  <Stack
    direction='row'
    alignItems='center'
    p={2}
    sx={{
      boxShadow: 'inset 0 0 6px #000',
      position: 'sticky',
      background: '#212121',
      top: 0,
    }}
  >
    <Link
      to='/'
      style={{ display: 'flex', alignItems: 'start', marginLeft: '50px' }}
    >
      <img src={logo} alt='logo' height={45} />
    </Link>
    <SearchBar />
  </Stack>
)

export default Navbar

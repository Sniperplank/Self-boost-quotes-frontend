import { AppBar, Stack, Typography } from '@mui/material'
import React from 'react'
import { NavButton } from '../styledComponents/NavButton'
import { StyledToolbar } from '../styledComponents/StyledToolBar'

const NavBar = () => {
  return (
    <AppBar component='nav' position='sticky'>
      <StyledToolbar>
        <Typography variant='h5' color='primary'>Self Boost Quotes</Typography>
        <Stack direction='row' spacing={4}>
          <NavButton variant='text'>API</NavButton>
          <NavButton variant='text'>About</NavButton>
          <NavButton variant='text'>Contact</NavButton>
        </Stack>
      </StyledToolbar>
    </AppBar>
  )
}

export default NavBar
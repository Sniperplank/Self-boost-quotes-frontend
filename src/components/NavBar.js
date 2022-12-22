import { AppBar, Stack, Typography } from '@mui/material'
import React from 'react'
import { NavButton } from '../styledComponents/NavButton'
import { StyledToolbar } from '../styledComponents/StyledToolBar'
import { HashLink } from 'react-router-hash-link';
import '../App.css'

const NavBar = () => {
  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth"
    })
  };
  return (
    <AppBar className='navbar' component='nav' position='sticky'>
      <StyledToolbar>
        <Typography component={HashLink} smooth to='#main' scroll={el => scrollWithOffset(el, 100)} variant='h5' color='primary' sx={{ textDecoration: 'none' }}>Self Boost Quotes</Typography>
        <Stack direction='row' spacing={4}>
          <NavButton component={HashLink} smooth to='#api' scroll={el => scrollWithOffset(el, 100)} variant='text'>API</NavButton>
          <NavButton component={HashLink} smooth to='#about' scroll={el => scrollWithOffset(el, 100)} variant='text'>About</NavButton>
          <NavButton component={HashLink} smooth to='#contact' scroll={el => scrollWithOffset(el, 100)} variant='text'>Contact</NavButton>
        </Stack>
      </StyledToolbar>
    </AppBar>
  )
}

export default NavBar
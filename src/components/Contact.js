import { Stack, Typography } from '@mui/material'
import React from 'react'
import { StyledButton } from '../styledComponents/StyledButton'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

const Contact = () => {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <Stack spacing={10} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
            <Typography variant='h3' color='#a394a6'>Contact Me</Typography>
            <Stack spacing={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant='body1' color='#a394a6' maxWidth={400} textAlign='center'>If you are having any problems or you run into any bugs with the API, send me a message through my website and let me know what the problem is.</Typography>
                <StyledButton onClick={() => openInNewTab('https://eilafaljundi.com/Pages/Contact.html')} endIcon={<OpenInNewIcon />} variant='contained' color='primary'>Message Me</StyledButton>
            </Stack>
        </Stack>
    )
}

export default Contact
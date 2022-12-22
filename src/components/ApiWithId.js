import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { StyledButton } from '../styledComponents/StyledButton'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

const ApiWithId = () => {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <Stack spacing={10} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
            <Typography className='sectionTitle' variant='h3' color='#a394a6'>Using Quote ID</Typography>
            <Stack spacing={{ xs: 10, md: 30 }} direction={{ xs: 'column', md: 'row' }}>
                <Stack spacing={5}>
                    <Typography variant='body1' color='#a394a6' maxWidth={400}>You can specify the id of the quote and always get the right quote for the id. Just change the id number in the URL to the desired id.</Typography>
                    <Typography variant='body1' color='primary' sx={{ textDecoration: 'underline' }}>https://self-boost-quotes-api.vercel.app?id=14</Typography>
                    <StyledButton onClick={() => openInNewTab('https://self-boost-quotes-api.vercel.app?id=14')} endIcon={<OpenInNewIcon />} variant='contained' color='primary'>Try it</StyledButton>
                </Stack>
                <Box sx={{ backgroundColor: '#10062e', width: { xs: '80%', md: 400 }, height: 200, borderRadius: 10, borderWidth: 2, borderColor: 'white', padding: 3 }}>
                    <Stack spacing={1} sx={{ color: '#881bd1' }}>
                        <code>{"{"}</code>
                        <Stack spacing={1} sx={{ paddingLeft: 2 }}>
                            <code>"id": 14,</code>
                            <code>"message": "SUPER BRILLIANT BRAINED GIANT GO IN..."</code>
                        </Stack>
                        <code>{"}"}</code>
                    </Stack>
                </Box>
            </Stack>
        </Stack>
    )
}

export default ApiWithId
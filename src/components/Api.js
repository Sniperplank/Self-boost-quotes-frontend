import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { StyledButton } from '../styledComponents/StyledButton'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import '../App.css'

const Api = () => {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <Stack className="api" id="api" spacing={10} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 10, backgroundColor: '#10062e' }}>
            <Typography className='sectionTitle' variant='h3' color='#a394a6'>Using the API</Typography>
            <Stack spacing={{ xs: 10, md: 30 }} direction={{ xs: 'column', md: 'row' }}>
                <Box sx={{ backgroundColor: '#090417', width: { xs: '80%', md: 400 }, height: 200, borderRadius: 10, borderWidth: 2, borderColor: 'white', padding: 3 }}>
                    <Stack spacing={1} sx={{ color: '#881bd1' }}>
                        <code>{"{"}</code>
                        <Stack spacing={1} sx={{ paddingLeft: 2 }}>
                            <code>"id": 75,</code>
                            <code>"message": "grrrr .. MAD ! :( no HAPPY ! :) ok..."</code>
                        </Stack>
                        <code>{"}"}</code>
                    </Stack>
                </Box>
                <Stack spacing={5}>
                    <Typography variant='body1' color='#a394a6' maxWidth={400}>The API will return two properties, id and message. Message is the random quote that is being returned and the id is unique to that quote.</Typography>
                    <Typography variant='body1' color='primary' sx={{ textDecoration: 'underline' }}>https://self-boost-quotes-api.vercel.app/</Typography>
                    <StyledButton onClick={() => openInNewTab('https://self-boost-quotes-api.vercel.app/')} endIcon={<OpenInNewIcon />} variant='contained' color='primary'>Try it</StyledButton>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Api
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import { Box, Stack, Typography } from '@mui/material';
import { StyledButton } from '../styledComponents/StyledButton';
import '../App.css'

const About = () => {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <Stack className="about" id="about" spacing={10} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 10, backgroundColor: '#10062e' }}>
            <Typography className='sectionTitle' variant='h3' color='text.main'>About Me</Typography>
            <Stack spacing={{ xs: 10, md: 30 }} direction={{ xs: 'column', md: 'row' }}>
                <Box sx={{ backgroundColor: '#090417', width: { xs: '80%', md: 400 }, height: 200, borderRadius: 10, borderWidth: 2, borderColor: 'white', padding: 3 }}>
                    <Stack spacing={1} sx={{ color: '#881bd1' }}>
                        <code>{"{"}</code>
                        <Stack spacing={1} sx={{ paddingLeft: 2 }}>
                            <code>"name": "Eilaf",</code>
                            <code>"message": "Thanks for stopping by!"</code>
                        </Stack>
                        <code>{"}"}</code>
                    </Stack>
                </Box>
                <Stack spacing={5}>
                    <Typography variant='body1' color='text.main' maxWidth={400}>I am a college student who loves building apps and websites. Check out all my projects on my github!</Typography>
                    <Typography variant='body1' color='primary' sx={{ textDecoration: 'underline' }}>https://github.com/Sniperplank</Typography>
                    <StyledButton onClick={() => openInNewTab('https://github.com/Sniperplank')} endIcon={<GitHubIcon />} variant='contained' color='primary'>Visit My GitHub</StyledButton>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default About
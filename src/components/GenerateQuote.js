import { CircularProgress, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { StyledButton } from '../styledComponents/StyledButton'
import '../App.css'

const GenerateQuote = () => {
    const [quote, setQuote] = useState('')
    const [refresh, setRefresh] = useState(0)
    const [loading, setLoading] = useState(true)

    const regenerateQuote = () => {
        setRefresh(prev => prev + 1)
    }

    useEffect(() => {
        fetch('https://self-boost-quotes-api.vercel.app/')
            .then(res => res.json())
            .then((data) => {
                setQuote(data.message)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [refresh])

    return (
        <Stack className='main' id='main' spacing={10} height={550} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: { xs: 5, md: 20 } }}>
            {
                loading ? <CircularProgress size={50} color='primary' />
                    : <Typography className='quote' sx={{ typography: { xs: 'h5', md: 'h3' } }} color='text.main' textAlign='center'>{quote}</Typography>
            }
            <StyledButton onClick={regenerateQuote} variant='contained' color='primary'>Regenerate Quote</StyledButton>
        </Stack>
    )
}

export default GenerateQuote
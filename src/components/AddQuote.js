import { Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { StyledButton } from '../styledComponents/StyledButton'
import { StyledInput } from '../styledComponents/StyledInput'
import axios from 'axios'

const AddQuote = () => {
    const [quote, setQuote] = useState('')
    const [password, setPassword] = useState('')
    const [success, setSuccess] = useState('')
    const [errors, setErrors] = useState('')

    const handleQuoteChange = (e) => {
        setQuote(e.target.value)
    }

    const handlePassChange = (e) => {
        setPassword(e.target.value)
    }

    const submitQuote = async () => {
        try {
            await axios.post('http://self-boost-quotes-api.vercel.app/add_quote', { quote: quote, password: password })
            setSuccess("Successfully added quote!")
            setErrors('')
            setQuote('')
            setPassword('')
        } catch (err) {
            console.log(err)
            setErrors(err.response.data.message)
            setSuccess('')
        }
    }

    return (
        <Stack spacing={10} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
            <Typography variant='h2' color='primary'>Self Boost Quotes</Typography>
            <Stack spacing={5} width='50%'>
                <Typography variant='h4' color='primary'>Add a quote</Typography>
                <StyledInput variant='outlined' name='quote' label='Quote' autoFocus value={quote} onChange={(e) => handleQuoteChange(e)} />
                <StyledInput variant='outlined' name='password' label='Password' type='password' value={password} onChange={(e) => handlePassChange(e)} />
                <StyledButton variant='contained' color='primary' onClick={submitQuote}>Submit</StyledButton>
                <Typography variant='h5' color='green'>{success}</Typography>
                <Typography variant='h5' color='red'>{errors}</Typography>
            </Stack>
        </Stack>
    )
}

export default AddQuote
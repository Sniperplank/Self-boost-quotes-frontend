import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledButton = styled(Button)(({ theme }) => ({
    borderRadius: 5,
    height: 50,
    color: theme.palette.buttonText.main,
    fontWeight: 'bold',
}));
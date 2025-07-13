import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
    palette: {
        primary: {
            main: "#b52bff",
            light: "#b13dff"
        },
        secondary: {
            main: "#10062e",
            light: "#302e28"
        },
        buttonText: {
            main: "#ffffff"
        },
        text: {
            main: '#fbe9ff',
            input: 'white'
        },
        body: {
            main: '#090417'
        },
    }
})
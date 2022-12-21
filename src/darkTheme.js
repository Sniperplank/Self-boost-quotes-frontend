import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
    palette: {
        primary: {
            main: "#881bd1",
            light: "#b13dff"
        },
        secondary: {
            main: "#10062e",
            light: "#302e28"
        },
        buttonText: {
            main: "#212121"
        },
        text: {
            main: '#a394a6',
            input: 'white'
        },
        body: {
            main: '#090417'
        },
    }
})
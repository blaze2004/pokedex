import { createTheme } from '@mui/material/styles';

export const theme=createTheme({
    mode: 'dark',
    palette: {
        primary: {
            main: "#33C0F6",
        },
        secondary: {
            main: "#00DEE2"
        },
        background: {
            default: "#000E20",
            secondary: "#222B48"
        },
        text: {
            primary: "#fff",
            secondary: '#c9c7c7',
            light: "#33C0F6",
            dark: "#222B48"
        },
        neutral: {
            container: "#1C1B20",
            navbar: '#99CBE7',
            black: "#000"
        }
    }
});
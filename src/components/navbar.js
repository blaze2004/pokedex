import { Avatar, Box, Button, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import logo from '../assets/logo.png';

export default function Navbar() {
    const theme=useTheme();
    const smallScreen=useMediaQuery('(max-width: 650px');

    return (
        <Box sx={{
            backgroundImage: `linear-gradient(45deg, #0093E9 30%, #80D0C7 90%)`,
            padding: '0.2rem 1rem',
            position: "fixed",
            top: "0",
            width: '100%',
            zIndex: 9999999
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <Avatar alt="pokedex logo" src={logo.src} sx={{ width: 50, height: 50 }} />
                <Button
                    variant="contained"
                    sx={{
                        textTransform: 'none',
                        borderRadius: '1.5rem',
                        background: theme.palette.background.default,
                        fontWeight: smallScreen? theme.typography.fontWeightRegular:theme.typography.fontWeightBold,
                        fontSize: theme.typography.pxToRem(15),
                        marginRight: theme.spacing(1),
                        color: 'rgba(255, 255, 255, 0.7)',
                        '&.Mui-selected': {
                            color: '#fff',
                        },
                        '&.Mui-focusVisible': {
                            backgroundColor: 'rgba(100, 95, 228, 0.32)',
                        },
                    }}
                    onClick={() => window.open("https://blaze2004.bio.link", '_blank', 'noopener,noreferrer')}
                >
                    Connect
                </Button>
            </Box>

        </Box>
    );
}
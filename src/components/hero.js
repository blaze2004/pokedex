import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import banner from '../assets/logo.png';
import Image from 'next/image';

export default function Hero() {
    const theme=useTheme();
    const smallScreen=useMediaQuery('(max-width: 650px');

    return (
        <Box sx={{ m: '6% 0' }} >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mb: "2rem",
                    flexDirection: 'column',
                }}
            >
                <Typography
                    textAlign={"center"}
                    variant={smallScreen? "h2":"h1"}
                    fontWeight={"bold"}
                    sx={{
                        mt: "2rem",
                        mb: "1rem",
                        color: '#33C0F6',
                        fontSize: smallScreen? 95:200,
                        WebkitTextStroke: '3px #33C0F6',
                    }}
                >
                    Pokedex
                </Typography>
                <Typography
                    variant="h4"
                    textAlign={"center"}
                    fontWeight={"bold"}
                    color={theme.palette.text.primary}
                    sx={{ maxWidth: "600px" }}
                    m={theme.spacing(1, 2)}
                >
                    Pocket Monster Encyclopedia
                </Typography>

                <Typography
                    textAlign={"center"}
                    variant="body1"
                    sx={{
                        mb: 2
                    }}
                >
                    Know your pokemon with a monster encyclopedia in your pocket.
                </Typography>
                <Image src={banner} alt="pokemon banner" width={150}/>
            </Box>
        </Box>
    );
}

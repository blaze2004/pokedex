import { Autocomplete, Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import axios from "axios";
import PokeCard from "./pokeCard";

export default function Explore({ pokemon }) {
    const theme=useTheme();
    const smallScreen=useMediaQuery('(max-width: 650px');

    // const pokemon={
    //     name: "Charmander",
    //     id: 4,
    //     image: '',
    //     hp: 5,
    //     attack: 10,
    //     genera: 'fire',
    //     about: "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
    //     defense: '',
    //     abilities: [
    //         {
    //             ability: {
    //                 name: 'xyz'
    //             }
    //         }
    //     ],
    //     weight: 55,
    //     height: 60,
    //     moves: [],
    //     evoDetails: [
    //         {
    //             id: 5,
    //             name: 'charmeleon',
    //             sprites: {
    //                 other: {
    //                     dream_world: {
    //                         front_default: 'xyz'
    //                     }
    //                 }
    //             }
    //         }
    //     ],
    //     type: []
    // };

    return (
        <Box
            sx={{
                backgroundColor: theme.palette.background.secondary,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
        >
            <Typography
                textAlign={"center"}
                variant={smallScreen? "h3":"h2"}
                fontWeight={"bold"}
                sx={{
                    mt: "5rem",
                    mb: "1rem",
                    color: theme.palette.text.light
                }}
            >
                Explore
            </Typography>

            {/* <Autocomplete /> */}

            <PokeCard pokemon={pokemon} />

        </Box>
    )
}
import { Box, Button, Dialog, DialogActions, DialogTitle, TextField, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import axios from 'axios';
import PokeCard from "./pokeCard";

export default function Explore({ pokemon }) {
    const theme=useTheme();
    const smallScreen=useMediaQuery('(max-width: 650px');

    const [name, setName]=useState("");
    const [pokeData, setPokeData]=useState(pokemon);

    const handleSearch=async () => {
        if (name === "")return
        try {
            const { data }=await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
            setPokeData(data);
            setName("");
        } catch (error) {
            handleClickOpen();
        }
    }

    const handleChange=(event) => {
        setName(event.target.value);
    };

    const [open, setOpen]=useState(false);

    const handleClickOpen=() => {
        setOpen(true);
    };

    const handleClose=() => {
        setOpen(false);
        setName("");
    };

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

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    m: theme.spacing(3, 1)
                }}
            >
                <TextField
                    value={name}
                    onChange={handleChange}
                    variant="filled"
                    label="Pokemon Name"
                    sx={{
                        backgroundColor: theme.palette.background.default
                    }}
                />

                <Button variant="contained"
                    sx={{
                        textTransform: 'none',
                        borderRadius: '1.5rem',
                        background: theme.palette.background.default,
                        fontWeight: smallScreen? theme.typography.fontWeightRegular:theme.typography.fontWeightBold,
                        fontSize: theme.typography.pxToRem(15),
                        margin: theme.spacing(2),
                        color: 'rgba(255, 255, 255, 0.7)',
                        '&.Mui-selected': {
                            color: '#fff',
                        },
                        '&.Mui-focusVisible': {
                            backgroundColor: 'rgba(100, 95, 228, 0.32)',
                        },
                    }}

                    onClick={handleSearch}
                >
                    Go
                </Button>
            </Box>

            <PokeCard pokemon={pokeData} />

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="not-found"
                aria-describedby="pokemon-not-found"
            >
                <DialogTitle id="pokemon-not-found" color={theme.palette.neutral.black}>
                    {name} is not a pokemon.
                </DialogTitle>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>

        </Box>
    )
}
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import Image from "next/image";
import styles from '../styles/Home.module.css';

function titleCase(string) {
    var sentence=string.toLowerCase();
    return sentence=sentence[0].toUpperCase()+sentence.slice(1);
}

function get3D( num ) {
    var n=num.toString().length;
    return ( num.toString().length < 2 ? "00"+num : (num.toString().length < 3 ? "0"+num: num) ).toString();
}

export default function PokeCard({ pokemon }) {

    const smallScreen=useMediaQuery('(max-width: 650px');
    const theme=useTheme();

    return (
        <Box
            sx={{
                textTransform: 'none',
                borderRadius: '0.5rem',
                background: theme.palette.background.default,
                marginRight: theme.spacing(1),
                marginBottom: theme.spacing(5),
                p: theme.spacing(5),
                '&.Mui-focusVisible': {
                    backgroundColor: 'rgba(100, 95, 228, 0.32)',
                },
            }}
        >

            <Typography
                textAlign={"center"}
                variant={smallScreen? "h4":"h3"}
                fontWeight={"bold"}
                sx={{
                    mb: "1rem",
                    color: theme.palette.text.primary
                }}
            >
                {titleCase(pokemon.name)}
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: smallScreen? 'column':'row',
                }}
            >

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: theme.palette.background.secondary,
                    mr: smallScreen? 0:5,
                    borderRadius: '1.5rem',
                    p: 2,
                    alignItems: 'center'
                }}
                >
                    <Image src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${get3D(pokemon.id)}.png`} alt="pokemon image" width={250} height={250} />
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                        <Typography>
                            HP<br />{pokemon.stats[0].base_stat}
                        </Typography>
                        <Typography>
                            ATK.<br />{pokemon.stats[1].base_stat}
                        </Typography>
                        <Typography>
                            DEF.<br />{pokemon.stats[2].base_stat}
                        </Typography>
                    </Box>

                    <Button variant="contained" sx={{ borderRadius: '0.5rem', mt: 5 }}>{pokemon.types[0].type.name} Pokemon</Button>
                </Box>

                <Box className={styles.cardsList}>
                    <Details title={"Abilities"}>{pokemon.abilities.map((ability, _) => ability.ability.name+', ')}</Details>
                    <Details title={"Height"} >{pokemon.height} feet</Details>
                    <Details title={"Types"} >{pokemon.types.map((type, _) => type.type.name+', ')}</Details>
                    <Details title={"Weight"} >{pokemon.weight} pounds</Details>
                </Box>
            </Box>

        </Box>

    )
}

function Details({ title, children }) {
    const theme=useTheme();
    return (
        <Box>
            <Typography variant={"h4"} sx={{ m: theme.spacing(2, 1, 2, 2) }}>{title}</Typography>
            <Box sx={{ backgroundColor: theme.palette.background.secondary, borderRadius: '1.5rem', p: 1.5 }}>
                {children}
            </Box>
        </Box>
    );
}
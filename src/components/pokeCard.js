import { Box, Card, CardMedia, CardContent, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import Image from "next/image";

export default function PokeCard(props) {

    const smallScreen=useMediaQuery('(max-width: 650px');
    const theme=useTheme();

    const {
        name,
        id,
        image,
        hp,
        attack,
        genera,
        about,
        defense,
        abilities,
        weight,
        height,
        moves,
        evoDetails,
        type
    }=props;

    return (
        <Box
            sx={{
                textTransform: 'none',
                borderRadius: '0.5rem',
                background: theme.palette.background.default,
                marginRight: theme.spacing(1),
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
                    mt: "5rem",
                    mb: "1rem",
                    color: theme.palette.text.primary
                }}
            >
                {name}
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: smallScreen? 'column':'row'
                }}
            >
                {/* 
                <Box>
                     <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="pokemon image" layout="fill" />
                </Box> 
                */}

                <Box>
                    <Typography
                        textAlign={"center"}
                    >
                        {about}
                    </Typography>

                </Box>
            </Box>

            <Card>
                <CardMedia src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="pokemon image" />
                <CardContent></CardContent>
            </Card>

        </Box>

    )
}


// import React from 'react'
// import axios from 'axios'
// import { makeStyles } from '@material-ui/core/styles'
// import Card from '@material-ui/core/Card'
// import CardMedia from '@material-ui/core/CardMedia'
// import CardContent from '@material-ui/core/CardContent'
// import Typography from '@material-ui/core/Typography'

// const useStyles = makeStyles({
//   card: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // 16:9
//   },
// })

// const PokemonCard = ({ name, image, types, abilities }) => {
//   const classes = useStyles()

//   return (
//     <Card className={classes.card}>
//       <CardMedia
//         className={classes.media}
//         image={image}
//         title={name}
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="h2">
//           {name}
//         </Typography>
//         <Typography variant="body2" color="textSecondary" component="p">
//           Types: {types.join(', ')}
//         </Typography>
//         <Typography variant="body2" color="textSecondary" component="p">
//           Abilities: {abilities.join(', ')}
//         </Typography>
//       </CardContent>
//     </Card>
//   )
// }

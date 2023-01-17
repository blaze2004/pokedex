import { Box } from '@mui/material';
import axios from 'axios';
import Hero from '../components/hero';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Explore from '../components/explore';

export default function Home({ pokemon }) {
  return (
    <Box>
      <Navbar />
      <Hero />
      <Explore pokemon={pokemon} />
      <Footer />
    </Box>
  )
}

export async function getServerSideProps() {
  const id=Math.floor(Math.random()*1008)+1;
  const { data: pokemon }=await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

  return {
    props: {
      pokemon
    }
  };
}
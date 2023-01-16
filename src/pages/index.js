import { Box } from '@mui/material';
import Hero from '../components/hero';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Explore from '../components/explore';

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Hero />
      <Explore />
      <Footer />
    </Box>
  )
}
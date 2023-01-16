import "../styles/globals.css";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Head from "next/head";
import * as React from 'react';
import PropTypes from 'prop-types';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../utils/createEmotionCache';
import { theme } from '../utils/theme';
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';

const clientSideEmotionCache=createEmotionCache();

function MyApp({ Component, emotionCache=clientSideEmotionCache, pageProps }) {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>PokeDex - Know Your Pokemon | Shubham Tiwari | Pocket Monster Encyclopedia</title>
        <meta name="description" content="A Pokedex is an in-universe encyclopedia in the Pokemon franchise that records data of all the Pokemon that a trainer has seen or captured, it serves as an inventory management tool. In the context of a website, it's a website that features information, statistics and images of all the pokemons in the franchise." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;

MyApp.propTypes={
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
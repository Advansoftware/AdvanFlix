import { createTheme, ThemeProvider } from '@mui/material';
import React, { useEffect } from 'react';
import Layout from './Layout';
import Api from './services/Api';

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#d21b1b',
      },
      secondary: {
        main: '#f50057',
      },
      background: {
        default: '#010810',
        paper: '#0f0f25',
      },
      info: {
        main: '#2f48ea',
      },
    },
    typography: {
      h4: {
        fontFamily: 'Bebas Neue',
      },
      h5: {
        fontFamily: 'Bebas Neue',
      },
    },
    components: {
      MuiTextField: {
        variants: [
          {
            props: { variant: 'filled' },
            style: {
             backgroundColor: '#333',
             borderRadius: '5px'
            },
          },
        ],
      },
      MuiButton: {
        variants: [
          {
            props: { variant: 'contained' },
            style: {
             borderRadius: '0px'
            },
          },
        ],
      },
    },
  });
  useEffect(()=> {
    Api.get("/users/romulo27");
  }, []);
  

  return (
    <ThemeProvider theme={darkTheme}>
        <Layout />
    </ThemeProvider>
  );
}

export default App;

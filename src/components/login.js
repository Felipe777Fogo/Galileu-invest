import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Image from 'next/image';
import Logo02 from '../../public/logo02.png'
import Investments from './investiment';




function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erroUsuario, setErroUsuario] = useState('');
  const [exibirLogin, setExibirLogin] = useState(false);
// cores do tema dakr 

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        color:'#565458',
        paper: '#333',
      },
      text: {
        secondary: '#fff',
      },
    },
  });


  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();


    const usuarios = [
      {
          email: 'galileu@gmail.com',
          password: '123456'
      },
      {
          email: 'teste@teste.com',
          password: '123456'
      },
      {
        email: 'felipe@gmail.com',
        password: '123456'

      }
// nessa linha ele vai procurar o email que foi digitado no imput e vai comprar com os emails que estão no array (lista de usuarios acima)



    ];


    const encontrarUsuario = usuarios.find((item) => item.email === email);



    if(encontrarUsuario == null) {
      setErroUsuario('algo de errado não está certo !')
    }
    else {
      if(password != encontrarUsuario.password) {
        setErroUsuario('algo de errado não está certo !')
      }
      if(password == encontrarUsuario.password) {
        setExibirLogin(false)
      }
    }
    
  };

  return (

    <ThemeProvider theme={darkTheme}>

      { exibirLogin == true ? 

        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
          >
          <br/>
          <br/>
          <Image 
            src={Logo02}
            alt="Galileu" 
            width="150"
            height="45"
          />
          <br/>
          <br/>
          <br/>
          <Typography component="h1" variant="h5">
            Login
          </Typography>

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-mail"
              autoFocus
              sx={{ bgcolor: 'background.paper' }}
              value={email}
              onChange={handleChangeEmail}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="Senha"
              label="Senha"
              type="password"
              sx={{ bgcolor: 'background.paper' }}
              value={password}
              onChange={handleChangePassword}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ 
                mt: 3, 
                mb: 2, 
                background:'#dfff00',
                '&:hover': {
                  background: '#ff0000', // Custom hover color
                },              
              }}
            >
              ENTRAR
            </Button>

            <Typography align='center' sx={{fontSize: 16, color:'#dfff00'}}>
              {erroUsuario}
            </Typography>


            <Grid container>
              <Grid item xs>
              </Grid>
              <Grid item>
                {/* <Link href="#" variant="body2" sx={{ color: 'text.secondary' }}>
                  {"Don't have an account? Sign Up"}
                </Link> */}
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 8, mb: 4 }}>
          {/* {'Copyright © '} */}
          <Link color="inherit" href="https://www.instagram.com/galileunegocios/">
            Não é aluno? Envie um DM pelo nosso Instagram.
          </Link>{' '}
          {/* {new Date().getFullYear()} */}
          {/* {'.'} */}
        </Typography>
      </Container>
      
      :

      <Investments/>
          

      
      }
    </ThemeProvider>
  );
}


export default SignIn;
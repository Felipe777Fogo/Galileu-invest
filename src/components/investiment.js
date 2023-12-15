import React, { useState } from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import SavingsIcon from '@mui/icons-material/Savings';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import Button from '@mui/material/Button';
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

function Investments() {
    const [saldo, setSaldo] = useState(10000);
    const [valorCDB, setValorCDB] = useState();
    const [valorDebenture, setValorDebenture] = useState();
    const [valorTesouro, setValorTesouro] = useState();
    const [valorPoupanca, setValorPoupanca] = useState();
    const [valorCDBInvestido, setValorCDBInvestido] = useState(500);
    const [valorDebentureInvestido, setValorDebentureInvestido] = useState(0);
    const [valorTesouroInvestido, setValorTesouroInvestido] = useState(0);
    const [valorPoupancaInvestido, setValorPoupancaInvestido] = useState(0);
    const [ativarCDB, setAtivarCDB] = useState(false);
    const [ativarDebenture, setAtivarDebenture] = useState(false);
    const [ativarTesouro, setAtivarTesouro] = useState(false);
    const [ativarPoupanca, setAtivarPoupanca] = useState(false);
    const [valorInvestido, setValorInvestido] = useState(0);




      const handleChangeValorCDB = (event) => {
        setValorCDB(event.target.value);
      };

      const handleChangeValorDebenture = (event) => {
        setValorDebenture(event.target.value);
      };

      const handleChangeValorTesouro = (event) => {
        setValorTesouro(event.target.value);
      };

      const handleChangeValorPoupanca = (event) => {
        setValorPoupanca(event.target.value);
      };


      const investirCDB = (event) => {
        event.preventDefault();

        if (valorCDB > saldo) {
            window.alert('Saldo insuficiente')
        }
        if (!valorCDB) {
            window.alert('Informe o valor!')
        }

        else{
            setValorCDBInvestido(valorCDB)

            setValorInvestido(valorInvestido + valorCDB)

            setSaldo(saldo - valorCDB)
    
            setValorCDB(0)
    
            setAtivarCDB(true)

        }
      };


      const investirDebenture = (event) => {
        event.preventDefault();

        if (valorDebenture > saldo) {
            window.alert('Saldo insuficiente')
        }
        if (!valorDebenture) {
            window.alert('Informe o valor!')
        }

        else{
        setValorDebentureInvestido(valorDebenture)

        setSaldo(saldo - valorDebenture)

        setValorDebenture(0)

        setAtivarDebenture(true)

        }

      };


      const investirTesouro = (event) => {
        event.preventDefault();

        if (valorTesouro > saldo) {
            window.alert('Saldo insuficiente')
        }
        if (!valorTesouro) {
            window.alert('Informe o valor!')
        }

        else{
        setValorTesouroInvestido(valorTesouro)

        setSaldo(saldo - valorTesouro)

        setValorTesouro(0)

        setAtivarTesouro(true)

        }

      };

      const investirPoupanca = (event) => {
        event.preventDefault();

        if (valorPoupanca > saldo) {
            window.alert('Saldo insuficiente')
        }

        if (!valorPoupanca) {
            window.alert('Informe o valor!')
        }

        else {
            setValorPoupancaInvestido(valorPoupanca)

            setSaldo(saldo - valorPoupanca)
    
            setValorPoupanca(0)
    
            setAtivarPoupanca(true)
        }
      };






      const data = {
        labels: ['CDB BANCO GALILEU', 'DEBÊNTURE PINHALENSE S/A', 'TESOURO DIRETO','POUPANÇA', 'NÃO INVESTIDO'],
        datasets: [
          {
            data: [valorCDBInvestido, valorDebentureInvestido, valorTesouroInvestido, valorPoupancaInvestido, saldo],
            backgroundColor: ['#dfff00', '#fd7816', '#0df90d', '#fa16fd', '#525252'],
            hoverBackgroundColor: ['#dfff00', '#fd7816', '#0df90d', '#fa16fd', '#525252'],
            borderColor: '#525252'
          },
        ],
      };
      
    const options = {
    plugins: {
        legend: {
        position: 'bottom',
        },
    },
    };

    const config = {
        type: 'doughnut',
        data: data,
      };


  return (

    <ThemeProvider theme={darkTheme}>
        <Container component="main" >
        <CssBaseline />


        <Grid 
            container 
            rowSpacing={1} 
            columnSpacing={{ xs: 1, sm: 2, md: 3, lg:3, xl:3 }}
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{padding:2}}
        >



            <Grid item xs={12} sm={12} md={12} lg={4} xl={4} 
                direction="column"
                justifyContent="start"
                alignItems="center"
                display= 'flex'
            >
                <Card sx={{ minWidth: 275 }}>
                    <CardContent align='center'>
                        <MonetizationOnIcon fontSize="large" style={{color:'#dfff00'}}/>
                        <Typography sx={{ fontSize: 20 , color:'#dfff00'}}>
                            CDB BANCO GALILEU
                        </Typography>
                        <br></br>
                        <Typography sx={{ fontSize: 16 }}>
                            Valor Investido: <b style={{color:'#dfff00'}}> R$ {valorCDBInvestido} </b> <br></br>
                            Rendimento Esperado: <b style={{color:'#dfff00'}}>R$ {valorCDBInvestido * 0.06} </b> 
                        </Typography>
                        <br></br>
                        <Typography sx={{fontSize: 13}}>
                            <b style={{color:'#dfff00'}}>CARACTERÍSTICAS</b> <br/>
                            Renda fixa.<br/>
                            Taxa pré-fixada de 13% a.a.<br/>
                            Prazo vencimento 12 meses.
                        </Typography>
                        <br></br>
                        <TextField 
                            id="cdb" 
                            label="Investir (R$)" 
                            variant="outlined" 
                            style={{background:'black'}}
                            value={valorCDB}
                            onChange={handleChangeValorCDB}
                            disabled={ativarCDB}
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ 
                                mt: 3, 
                                mb: 2, 
                                background:'#dfff00',
                                '&:hover': {
                                background: '#aabb00', // Custom hover color
                                        },              
                                }}
                                onClick={investirCDB}
                                disabled={ativarCDB}
                        >
                            Investir
                        </Button>
                    </CardContent>
                </Card>

                <br></br>
                <br></br>


                <Card sx={{ minWidth: 275 }}>
                    <CardContent align='center'>
                        <RequestQuoteIcon fontSize="large" style={{color:'#fd7816'}}/>
                        <Typography sx={{ fontSize: 20 , color:'#fd7816'}}>
                            Debênture Pinhalense S/A
                        </Typography>
                        <br></br>
                        <Typography sx={{ fontSize: 16 }}>
                            Valor Investido: <b style={{color:'#fd7816'}}> R$ {valorDebentureInvestido} </b> <br></br>
                            Rendimento Esperado: <b style={{color:'#fd7816'}}>R$  {valorDebentureInvestido * 0.09} </b> 
                        </Typography>
                        <br></br>
                        <Typography sx={{fontSize: 13}}>
                            <b style={{color:'#fd7816'}}>CARACTERÍSTICAS</b> <br/>
                            Renda fixa.<br/>
                            Taxa pré-fixada de 12% a.a.<br/>
                            Prazo vencimento 12 meses.
                        </Typography>
                        <br></br>
                        <TextField 
                            id="cdb" 
                            label="Investir (R$)" 
                            variant="outlined" 
                            style={{background:'black'}}
                            value={valorDebenture}
                            onChange={handleChangeValorDebenture}
                            disabled={ativarDebenture}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ 
                                mt: 3, 
                                mb: 2, 
                                background:'#fd7816',
                                '&:hover': {
                                background: '#fd7816', // Custom hover color
                                        },              
                                }}
                            onClick={investirDebenture}
                            disabled={ativarDebenture}
                        >
                            Investir
                        </Button>
                    </CardContent>
                </Card>
            </Grid>



            <Grid item xs={12} sm={12} md={12} lg={4} xl={4} 
                direction="column"
                justifyContent="start"
                alignItems="center"
                display= 'flex'
            >

                <Card sx={{ minWidth: 275 }}>
                    <CardContent align='center'>
                        <AccountBalanceIcon fontSize="large" style={{color:'#0df90d'}}/>
                        <Typography sx={{ fontSize: 20 , color:'#0df90d'}}>
                            Tesouro Direto
                        </Typography>
                        <br></br>
                        <Typography sx={{ fontSize: 16 }}>
                            Valor Investido: <b style={{color:'#0df90d'}}>R$ {valorTesouroInvestido}</b> <br></br>
                            Rendimento Esperado: <b style={{color:'#0df90d'}}>R$ {valorTesouroInvestido * 0.13}</b> 
                        </Typography>
                        <br></br>
                        <Typography sx={{fontSize: 13}}>
                            <b style={{color:'#0df90d'}}>CARACTERÍSTICAS</b> <br/>
                            Renda fixa.<br/>
                            Taxa pré-fixada de 12% a.a.<br/>
                            Prazo vencimento 12 meses.
                        </Typography>
                        <br></br>
                        <TextField 
                            id="cdb" 
                            label="Investir (R$)" 
                            variant="outlined" 
                            style={{background:'black'}}
                            value={valorTesouro}
                            onChange={handleChangeValorTesouro}
                            disabled={ativarTesouro}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ 
                                mt: 3, 
                                mb: 2, 
                                background:'#0df90d',
                                '&:hover': {
                                background: '#0df90d', // Custom hover color
                                        },              
                                }}
                            onClick={investirTesouro}
                            disabled={ativarTesouro}
                        >
                            Investir
                        </Button>
                    </CardContent>
                </Card>

                <br></br>
                <br></br>

                <Card sx={{ minWidth: 275 }}>
                    <CardContent align='center'>
                        <SavingsIcon fontSize="large" style={{color:'#fa16fd'}}/>
                        <Typography sx={{ fontSize: 20 , color:'#fa16fd'}}>
                            POUPANÇA
                        </Typography>
                        <br></br>
                        <Typography sx={{ fontSize: 16 }}>
                            Valor Investido: <b style={{color:'#fa16fd'}}>R$ {valorPoupancaInvestido}</b> <br></br>
                            Rendimento Esperado: <b style={{color:'#fa16fd'}}>R$ {valorPoupancaInvestido * 0.05}</b> 
                        </Typography>
                        <br></br>
                        <Typography sx={{fontSize: 13}}>
                            <b style={{color:'#fa16fd'}}>CARACTERÍSTICAS</b> <br/>
                            Renda fixa.<br/>
                            Taxa pré-fixada de 12% a.a.<br/>
                            Prazo vencimento 12 meses.
                        </Typography>
                        <br></br>
                        <TextField 
                            id="cdb" 
                            label="Investir (R$)" 
                            variant="outlined" 
                            style={{background:'black'}}
                            value={valorPoupanca}
                            onChange={handleChangeValorPoupanca}
                            disabled={ativarPoupanca}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ 
                                mt: 3, 
                                mb: 2, 
                                background:'#fa16fd',
                                '&:hover': {
                                background: '#fa16fd', // Custom hover color
                                        },              
                                }}
                            onClick={investirPoupanca}
                            disabled={ativarPoupanca}
                        >
                            Investir
                        </Button>
                    </CardContent>
                </Card>
            </Grid>


            <Grid item xs={12} sm={12} md={12} lg={4} xl={4} 
                direction="column"
                justifyContent="start"
                alignItems="center"
                display= 'flex'
            >





            <Card >
                <CardContent align='center'>
                    <Typography sx={{ fontSize: 20 }}>
                        SEUS INVESTIMENTOS
                    </Typography>
                    <br></br>
                    <Doughnut data={data} options={options}/>
                    <br></br>
                    <br></br>

                </CardContent>
            </Card>

            <br></br>
            <br></br>

            <Card sx={{minWidth:330}}>
                <CardContent align='center'>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <Typography sx={{ fontSize: 20 }}>
                        DISPONÍVEL EM CONTA
                    </Typography>

                    <Typography sx={{ fontSize: 30 }}>
                        R$ {saldo}
                    </Typography>
                    <br></br>
                    <br></br>
                    <Typography sx={{ fontSize: 20 }}>
                        TOTAL INVESTIDO
                    </Typography>

                    <Typography sx={{ fontSize: 30 }}>
                        {10000 - saldo}
                    </Typography>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                </CardContent>
            </Card>
            </Grid>
        </Grid>
        </Container>
    </ThemeProvider>

  );
}

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

export default Investments;

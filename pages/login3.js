import React from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import LoginCard from '../components/LoginCard';

import Logo from '../static/logo.svg';


const theme = createMuiTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#009ee2',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#bc2507',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#ffffff',
        },
        // error: will use the default color
    },
    overrides: {
        MuiPaper: { // Name of the component ⚛️ / style sheet
            rounded: { // Name of the rule
                borderRadius: 10,
            },
        },
        MuiButton: {
            contained: { // Name of the rule
                borderRadius: 16,
            },
        },
        MuiSvgIcon: {
            colorPrimary: {
                color: 'rgba(6,44,63,0.55)',
            }
        }
    },
});

//<img src="/static/login-background.jpg" alt="login image"/>
const Login = (props) => (

    <div className="root">
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <div className="container">
                <Grid container={true} justify="center" alignItems="center" spacing={24} >
                    <Grid item xs={8}>
                        <div className="logo">
                            <Logo />
                        </div>
                    </Grid >
                    <Grid item xs={8}>
                        <LoginCard theme={theme} />
                    </Grid>
                    <Grid item xs={8}>
                        <Button color="primary" variant="contained" fullWidth>Connexion</Button>
                    </Grid>
                </Grid>
            </div>
        </MuiThemeProvider>
        <style jsx>{`
        .logo {
            width: 120px;
            margin: 0 auto;
        }
        .container {
            background-image: linear-gradient(to right top, #062c3f, #064664, #03628c, #0080b6, #009ee2);
            background-repeat: no-repeat;
            padding-top: 32px;
            align-items: center;
            min-height:100%;
            background-size: 100% 300px;
        }
        .root { 
            height: 100vh;
            min-height:100%;
        };
      `}
        </style>
    </div>

);


export default Login
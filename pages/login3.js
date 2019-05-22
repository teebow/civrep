import React from "react";

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Link from 'next/link'
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


import LoginCard from '../components/LoginCard';

import Logo from '../static/logo.svg';
import theme from "../styles/theme";

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
                        <Link href='/users'>
                            <Button color="primary" variant="contained" fullWidth>Connexion</Button>
                        </Link>
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
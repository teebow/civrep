import React from "react";

import { MuiThemeProvider } from '@material-ui/core/styles';
import Link from 'next/link'
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import LoginCard from '../components/Login/LoginCard';

import Logo from '../static/logo.svg';
import theme from "../styles/theme";

import styled from 'styled-components';

const Root = styled.div`
    height: 100vh;
    min-height:100%;
`;

const Container = styled.div`
    background-image: linear-gradient(to right top, #062c3f, #064664, #03628c, #0080b6, #009ee2);
    background-repeat: no-repeat;
    padding-top: 32px;
    align-items: center;
    min-height:100%;
    background-size: 100% 300px;
`

const LogoContainer = styled.div`
    width: 120px;
    margin: 0 auto;
`

const Login = (props) => (
    <Root>
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Container>
                <Grid container={true} justify="center" alignItems="center" spacing={3} >
                    <Grid item xs={8}>
                        <LogoContainer>
                            <Logo />
                        </LogoContainer>
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
            </Container>
        </MuiThemeProvider>
    </Root>
);


export default Login
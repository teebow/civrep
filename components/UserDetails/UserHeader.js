import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import Eye from '@material-ui/icons/RemoveRedEye';
import { shadows } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import styled from 'styled-components';
import Receipt from '@material-ui/icons/Receipt'


import { InputAdornment, CssBaseline } from '@material-ui/core';

//<img src="/static/login-background.jpg" alt="login image"/>
const UserHeader = (props) => (
    <div className="container">
        <CssBaseline />
        <Grid container spacing={2}>
            <Grid item>
                <Box boxShadow={3} style={{ borderRadius: 55 }}>
                    <Avatar style={{
                        width: 120,
                        height: 120,
                    }} alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                </Box>
            </Grid>
            <Grid item xs={6} >
                <Grid item xs container direction="column" >
                    <Grid item xs >
                        <Typography variant="h4" color="textPrimary" style={{ marginTop: 10 }} >
                            John
                        </Typography>
                        <Typography variant="h6" gutterBottom color="textSecondary">
                            Bauer
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Typography color="textSecondary" style={{ display: 'flex', marginTop: 20 }} >
                            <Receipt color="action" style={{ marginRight: 5 }} />
                            10 Tickets
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
        <style jsx>{`
        .container {
            background-image: linear-gradient(to right top, #062c3f, #064664, #03628c, #0080b6, #009ee2);
            padding: 20px;
            align-items: center;
            min-height:100%
        };
      `}
        </style>
    </div>
);


export default UserHeader
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


import { InputAdornment, CssBaseline, Card, CardActionArea, CardMedia, CardContent, CardActions, Button, CardHeader, Container, Input } from '@material-ui/core';
import UserHeader from './UserHeader';

const UserCardContent = styled(CardContent)`
    background-image: linear-gradient(to right top, #062c3f, #064664, #03628c, #0080b6, #009ee2);
    align-items: center;
    text-align: center;
    min-height:100%;
    padding: 0;
`;

const UserCard = (props) => (
<>
        <CssBaseline />

            <Card >
                {/* <UserCardContent>
                    <Typography variant="h6" color="textPrimary" style={{ marginTop: 50 }} gutterBottom >
                        John Bauer
                    </Typography>
                    <Typography color="textSecondary" style={{ display: 'inline-flex', marginBottom: 20 }} >
                        <Receipt color="action" style={{ marginRight: 5 }} />
                        10 Tickets
                    </Typography>
                </UserCardContent> */}
                <UserHeader />
                <CardContent>
                    <Typography component="h4" >
                        Tickets
                    </Typography>
                    <TextField
                        id="standard-number"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                        fullWidth
                    />
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        Annuler
                    </Button>
                    <Button size="small" color={props.isAdd ? "primary" : "secondary"} variant="contained">
                        Ajouter
                    </Button>
                </CardActions>
            </Card>
    </>
);


export default UserCard
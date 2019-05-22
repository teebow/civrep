import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import ArrowBack from '@material-ui/icons/ArrowBack';

const NavBar = props => (
    <AppBar position="static" color="primary">
        <Toolbar>
            <IconButton color="inherit" aria-label="Back">
                <ArrowBack />
            </IconButton>
            <Typography variant="h6" color="inherit">
                Photos
          </Typography>
        </Toolbar>
    </AppBar>
)

export default NavBar